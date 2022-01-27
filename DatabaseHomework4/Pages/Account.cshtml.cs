using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DatabaseHomework4.Pages;

public class AccountModel : PageModel
{
    private readonly ILogger<AccountModel> _logger;

    public AccountModel(ILogger<AccountModel> logger)
    {
        _logger = logger;
    }

    public void OnPostLogout()
    {
        TempData.Clear();
        Response.Redirect("Index");
    }
}

