using System;
using System.Collections.Generic;
//using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

public partial class _02_blog : System.Web.UI.Page
{
    SqlConnection conn = new SqlConnection();
    public string sql;
    public int i;
    DataSet ds = new DataSet();
    protected void Page_Load(object sender, EventArgs e)
    {
        conn.ConnectionString = ConfigurationManager.ConnectionStrings["conn"].ConnectionString;
      
        try
        {
            conn.Open();
            sql = "SELECT * FROM Login WHERE loginid='" + Session["userid"] + "'";
            SqlCommand cmd = new SqlCommand(sql, conn);
            SqlDataReader dr = cmd.ExecuteReader();
            if (dr.HasRows)
            {
                LinkButton2.Visible = true;
                LinkButton1.Visible = false;
            }
            else
            {
                LinkButton1.Visible = true;
                LinkButton2.Visible = false;

            }
            conn.Close();
        }
        catch (Exception)
        { }
    }
    protected void LinkButton1_Click(object sender, EventArgs e)
    {
        Response.Redirect("Login.aspx");
    }
    protected void LinkButton2_Click(object sender, EventArgs e)
    {
        Session["userid"] = "";
        Session.Clear();
        Session.Abandon();
        Response.Redirect("Login.aspx");
    }
}
