using System.Data.SqlClient;

var builder = WebApplication.CreateBuilder(args);

#region Services

builder.Services.AddRazorPages();

builder.Services.AddTransient<Sprocs>(sp =>
    sp.GetRequiredService<IConfiguration>()
    .GetSection(nameof(Sprocs))
    .Get<Sprocs>());

builder.Services.AddTransient<SqlConnection>(sp =>
    new SqlConnection(sp
        .GetRequiredService<IConfiguration>()
        .GetConnectionString("conn")));

#endregion Services

var app = builder.Build();

#region HTTP Request Pipeline

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

#endregion HTTP Request Pipeline

app.Run();
