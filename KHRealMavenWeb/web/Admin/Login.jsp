<%--
  Created by IntelliJ IDEA.
  User: hauphvn
  Date: 5/8/2020
  Time: 9:47 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<jsp:include page="/WEB-INF/head_tag.jsp">
<jsp:param name="title" value="Admin Login"/>
<jsp:param name="link-css-this-page" value="../css/admin-login.css"/>
</jsp:include>

<body>
<%
    //        Check login
    String isMember = (request.getAttribute("isMember")) != null ? (String) request.getAttribute("isMember") : "";
%>
<div style="padding-top: 4em;" class="container">
    <div class="row">
        <div class="col-sm-12 wrap-login">
            <div>
                <h2 class="login-title">KH-REAL ESTATE</h2>
                <form action="adminLogin" method="post">
                    <div class="form-group">
                        <lable for="username">Username:</lable>
                        <input type="text" id="username" name="username" class="form-control">
                    </div>
                    <div class="form-group">
                        <lable for="password">Password:</lable>
                        <input type="password" name="password" id="password" class="form-control">
                    </div>
                    <div style="display: flex; justify-content: center; text-align: center">
                        <div>
                            <%if (!isMember.isEmpty() && "false".equals(isMember)) {%>
                            <div style="display:none" class="alert alert-danger" role="alert">Sai mật khẩu hoặc tên đăng
                                nhập
                            </div>
                            <%}%>
                            <button type="submit" class="btn btn-success">ĐĂNG NHẬP</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<script src="../js/admin-login.js"/>
</body>
</html>
