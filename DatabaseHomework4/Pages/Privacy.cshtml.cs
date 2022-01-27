using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DatabaseHomework4.Pages;

public class PrivacyModel : PageModel
{
    private readonly ILogger<PrivacyModel> _logger;

    public PrivacyModel(ILogger<PrivacyModel> logger)
    {
        _logger = logger;
    }

    public void OnPostLogout()
    {
        TempData.Clear();
        Response.Redirect("Index");
    }
}

