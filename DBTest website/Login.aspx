<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="Login" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Login</title>
	
    <!--
	<link href="css/style.css" rel="stylesheet" type="text/css" />
	<link href="css/theme-brown.css" rel="stylesheet" type="text/css" />
	-->

	<script type="text/javascript" src="js/jquery.min.js" ></script>
	<script type="text/javascript" src="js/jquery.easing.js" ></script>
	<script type="text/javascript" src="js/jquery.inGallery.js" ></script>
	
	<script type="text/javascript" src="js/custom-brown.js" ></script>

</head>
<body>
 <form id="Form1" name="productForm" runat="server">	
    <div id="hash-wrapper">

	
	<!-- Header -->
	
	<div id="content-wrapper">
	<div id="content" class="clearfix">
		
		<div class="section single-side clearfix">
			<div >
				<h1>Login Screen</h1>
			<div  class="medColumns">
			<div>	
			
			  			
				
				<div>
                <p></p>
				<label>Login name</label>
				<div class="input">
                    <asp:TextBox ID="TextBox1" runat="server" Height="31px" Width="364px"></asp:TextBox>
				</div>
				<div>
				<label>Password</label>
				<div class="input">
                    <asp:TextBox ID="TextBox2" runat="server" TextMode="Password" Height="31px" 
                        Width="363px"></asp:TextBox>				
				</div></div>
                <p></p>			
				<!--<input class="form-button" type="submit" value="Submit"/>-->
                <asp:Button ID="Button1" runat="server" Text="Login" class="form-button" 
                    onclick="Button1_Click" Height="39px" Width="100px"/>
				<%--<input class="form-button" type="submit" name="loginButton" value="Login">--%>
				
				<br/><br/>
				<div></div>
				
			</div>
		</div>
		
	</div>
	</div>	
	
	
	
	</div> <!-- Hash wrapper  -->
	
	<div class="shadows">
		<div class="left"><div class="right"></div></div>
	</div>
	</form>
</body>
</html>
