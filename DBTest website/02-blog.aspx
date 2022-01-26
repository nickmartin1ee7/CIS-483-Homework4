<%@ Page Language="C#" AutoEventWireup="true" CodeFile="02-blog.aspx.cs" Inherits="_02_blog" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Blog</title>

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
<form id="frm1" runat="server">
    <div id="hash-wrapper">

	<!-- Notice bar-->
	<div id="notice-wrapper">
	<div id="notice" class="clearfix">
		
        <p>
            &nbsp;</p>
        <ul class="menu right clearfix">
            <li>
                <asp:LinkButton ID="LinkButton1" runat="server" onclick="LinkButton1_Click" >LOGIN</asp:LinkButton>
            </li>
       

            <li>
                <asp:LinkButton ID="LinkButton2" runat="server" onclick="LinkButton2_Click">LOGOUT</asp:LinkButton>
            </li>
        </ul>
        <!--Footer content -->
		
		<!-- Footer styler -->
		
	</div>
	</div>
	
	
	
	
	</div> <!-- Hash wrapper  -->
	
	<div class="shadows">
		<div class="left"><div class="right"></div></div>
	</div>
	</form>
</body>
</html>
