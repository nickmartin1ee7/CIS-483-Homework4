using System.Data.SqlClient;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DatabaseHomework4.Pages;

public class IndexModel : PageModel
{
    private readonly ILogger<IndexModel> _logger;
    private readonly SqlConnection _sqlConnection;

    public IndexModel(ILogger<IndexModel> logger, SqlConnection sqlConnection)
    {
        _logger = logger;
        _sqlConnection = sqlConnection;
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
            ? RedirectToPage(nameof(Index)) // TODO blog
            : RedirectToPage(nameof(Index));
    }

    private async Task<bool> RunQueryAsync(CancellationToken cancellationToken)
    {
        try
        {
            await _sqlConnection.OpenAsync(cancellationToken);

            // SQL Injection
            var sqlQuery = $"SELECT * FROM Login WHERE Login_Username='{Username}' AND Login_Password='{Password}'";

            SqlCommand sqlCommand = new SqlCommand(sqlQuery, _sqlConnection);
            SqlDataReader sqlDataReader = await sqlCommand.ExecuteReaderAsync(cancellationToken);
            
            if (sqlDataReader.HasRows && await sqlDataReader.ReadAsync(cancellationToken))
            {
                var userId = sqlDataReader["Login_ID"];
                TempData["userid"] = userId;
                TempData.Keep("userid");

#if DEBUG
                TempData.Add("Message", $"Logged in as user {userId}");
#endif

                return true;
            }

            TempData.Add("Message", "Incorrect Username or Password combination");
            TempData.Remove("userid");

            return false;
        }
        catch (Exception ex)
        {
            Debug.WriteLine(ex.ToString());

            TempData.Add("Message", "Login services are unavailable at this time");
            TempData.Remove("userid");

            return false;
        }
        finally
        {
            await _sqlConnection.CloseAsync();
        }
    }
}
