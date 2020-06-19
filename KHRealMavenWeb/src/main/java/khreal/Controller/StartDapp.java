package khreal.Controller;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

//@WebServlet(name = "StartDapp")
public class StartDapp extends HttpServlet {

    protected void process(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        response.setContentType("text/html;charset=UTF-8");
        HttpSession session = request.getSession();
        try {
            if(session != null && session.getAttribute("isAdmin") != null && "true".equals(session.getAttribute(
                    "isAdmin"))){
            response.sendRedirect("/admin-home");
            }else if(session != null && session.getAttribute("isMember") != null && "true".equals(session.getAttribute(
                    "isMember"))){
                response.sendRedirect("/member-home");
            }
            else{
                response.sendRedirect("/home");
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
    protected void doPost(HttpServletRequest request, HttpServletResponse response) {
        try{
            process(request, response);
        }catch (Exception e){
            e.printStackTrace(System.out);
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) {
        try{
            process(request, response);
        }catch (Exception e){
            e.printStackTrace(System.out);
        }
    }
}
