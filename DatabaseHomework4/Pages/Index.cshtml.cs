using System.Data.SqlClient;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DatabaseHomework4.Pages;

public class IndexModel : PageModel
{
    private readonly ILogger<IndexModel> _logger;
    private readonly SqlConnection _sqlConnection;
    private readonly Sprocs _sprocs;

    public IndexModel(ILogger<IndexModel> logger, SqlConnection sqlConnection, Sprocs sprocs)
    {
        _logger = logger;
        _sqlConnection = sqlConnection;
        _sprocs = sprocs;
    }

    public string? Username => TempData[nameof(Username)] as string;
    public string? Password => TempData[nameof(Password)] as string;

    public void OnGet()
    {
    }

    public async Task<IActionResult> OnPost(CancellationToken cancellationToken, [FromForm] string username, [FromForm] string password)
    {
        TempData[nameof(Username)] = username;
        TempData[nameof(Password)] = password;

        var result = await RunQueryAsync(cancellationToken);

        TempData.Remove(nameof(Username));
        TempData.Remove(nameof(Password));

        return result
            ? RedirectToPage("Account")
            : RedirectToPage("Index");
    }

    private async Task<bool> RunQueryAsync(CancellationToken cancellationToken)
    {
        try
        {
            // Intentional SQL Injection possible here due to lack of parametrization
            var sqlQuery = string.Format(_sprocs.Login, Username, Password);

            await _sqlConnection.OpenAsync(cancellationToken);

            SqlCommand sqlCommand = new SqlCommand(sqlQuery, _sqlConnection);
            SqlDataReader sqlDataReader = await sqlCommand.ExecuteReaderAsync(cancellationToken);
            
            if (sqlDataReader.HasRows && await sqlDataReader.ReadAsync(cancellationToken))
            {
                var userId = sqlDataReader["Login_Username"];
                TempData["user"] = userId;
                TempData.Keep("user");

                return true;
            }

            TempData.Add("Message", "Incorrect Username or Password combination");
            TempData.Remove("user");

            return false;
        }
        catch (Exception ex)
        {
            Debug.WriteLine(ex.ToString());

            TempData.Add("Message", $"Login services are unavailable at this time (error {ex.HResult})");
            TempData.Remove("user");

            return false;
        }
        finally
        {
            await _sqlConnection.CloseAsync();
        }
    }
}
