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
        TempData.Clear();

        if (string.IsNullOrWhiteSpace(username) || string.IsNullOrWhiteSpace(password))
        {
            TempData.Add("Message", "Username or password cannot be empty!");
            return RedirectToPage("Index");
        }

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
        var timeoutDuration = TimeSpan.FromSeconds(2);

        var cancellationTokenSource = CancellationTokenSource
            .CreateLinkedTokenSource(cancellationToken);

        cancellationTokenSource.CancelAfter(timeoutDuration);

        try
        {
            // Intentional SQL Injection possible here due to lack of parametrization
            var sqlQuery = string.Format(_sprocs.Login, Username, Password);

            await _sqlConnection.OpenAsync(cancellationTokenSource.Token);

            SqlCommand sqlCommand = new SqlCommand(sqlQuery, _sqlConnection);
            SqlDataReader sqlDataReader = await sqlCommand.ExecuteReaderAsync(cancellationTokenSource.Token);

            if (sqlDataReader.HasRows && await sqlDataReader.ReadAsync(cancellationTokenSource.Token))
            {
                var userData = sqlDataReader["Login_Username"];
                TempData["user"] = userData;
                TempData.Keep("user");

                return true;
            }

            TempData.Add("Message", "Incorrect Username or Password combination!");

            return false;
        }
        catch (TaskCanceledException ex)
        {
            Debug.WriteLine(ex.ToString());

            TempData.Add("Message", $"Failed to communicate with database within {timeoutDuration.TotalSeconds} seconds! Please make sure your connection string is correct in the `appsettings.json` and the SQL Server is reachable.");

            return false;
        }
        catch (SqlException ex)
        {
            Debug.WriteLine(ex.ToString());

            TempData.Add("Message", $"Failed to communicate with database! ({ex.GetType().Name}) {ex.Message}");

            return false;
        }
        catch (Exception ex)
        {
            Debug.WriteLine(ex.ToString());

            TempData.Add("Message", $"Generic failure! ({ex.GetType().Name}) {ex.Message}");

            return false;
        }
        finally
        {
            await _sqlConnection.CloseAsync();
        }
    }
}
