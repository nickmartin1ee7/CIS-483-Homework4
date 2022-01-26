using System;
using System.Collections.Generic;
//using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

public partial class Login : System.Web.UI.Page
{
    SqlConnection conn = new SqlConnection();
    public string sql;
    public int i;
    DataSet ds = new DataSet();
    protected void Page_Load(object sender, EventArgs e)
    {
        conn.ConnectionString = ConfigurationManager.ConnectionStrings["conn"].ConnectionString;
        //try
        //{
        //    conn.Open();
        //    sql = "SELECT * FROM Login WHERE loginid='" + Session["userid"] + "'";
        //    SqlCommand cmd = new SqlCommand(sql, conn);
        //    SqlDataReader dr = cmd.ExecuteReader();
        //    if (dr.HasRows)
        //    {
        //        LinkButton1.Visible = true;
        //        LinkButton2.Visible = false;
        //    }
        //    else
        //    {
        //        LinkButton2.Visible = true;
        //        LinkButton1.Visible = false;
               
        //    }
        //    conn.Close();
        //}
        //catch (Exception)
        //{ }
       
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        try
        {
            conn.Open();
            sql = "SELECT * FROM Login WHERE login_name='" + TextBox1.Text + "' AND password='" + TextBox2.Text + "'";
            SqlCommand cmd = new SqlCommand(sql, conn);
            SqlDataReader dr = cmd.ExecuteReader();
            if (dr.HasRows)
            {
                if (dr.Read())
                {
                    Session["userid"] = dr["loginid"];
                }
                Response.Redirect("02-blog.aspx");
            }
            else
            {
                Response.Redirect("Login.aspx");
            }
            conn.Close();
        }
        catch (Exception)
        { }
    }
}
