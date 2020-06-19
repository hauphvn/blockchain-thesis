package khreal.Controller.Admin;

import khreal.Controller.Authentication.Authentication;
import khreal.Utils.DbConfig;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

//@WebServlet(name = "Login")
public class Login extends HttpServlet {
    @Override
    public void init(ServletConfig config) throws ServletException {
        DbConfig.username = config.getInitParameter("db.user");
        DbConfig.password = config.getInitParameter("db.password");
        DbConfig.host = config.getInitParameter("db.url");
    }

    protected void process(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        response.setContentType("text/html;charset=UTF-8");
        HttpSession session = request.getSession();
        try {
            if(session.getAttribute("isAdmin") != null){

            }else{
                response.sendRedirect("/adminLogin.html");
            }


//            Authentication.CheckL ogin(strUserLogin.trim(),strPassword.trim())
            if(true){//Do chua ket noi dc voi mysql
                HttpSession httpSession = request.getSession();

                httpSession.setAttribute("isMember", "true");
                response.sendRedirect("/managementReal");
            }else{
                request.setAttribute("isMember", "false");
                RequestDispatcher rd = request.getRequestDispatcher("/adminLogin.html");
                rd.forward(request,response);
            }
        }catch (Exception e){
            System.out.println(e.getMessage());
        }

    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        process(request, response);
    }

//    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOExcepticon {
//        process(request, response);
//    }
}
