package khreal.Utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DbConfig {
    public static String driver;
    public static String host;
    public static String username;
    public static String password;

//    public static Connection ConnectDB(){
//        Connection conn = null;
//        try {
//            Class.forName(driver);
//             conn = DriverManager.getConnection(host, username, password);
//        } catch (Exception e) {
//            System.out.println("Loi truy van db: "+ e.getMessage());
//            conn = null;
//            e.printStackTrace();
//        }
//        return conn;
//    }
//
//    public static void main(String[] args) {
//        Connection conn = ConnectDB();
//        if(conn != null){
//            System.out.println("Success");
//            try {
//                conn.close();
//            } catch (SQLException throwables) {
//                throwables.printStackTrace();
//            }
//        }else{
//            System.out.println("Failed");
//        }
//    }
}
