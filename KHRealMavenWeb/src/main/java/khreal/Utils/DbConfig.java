package khreal.Utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DbConfig {
    public static String host = "jdbc:mysql://localhost:3306/khrealdb";
    public static String username = "root";
    public static String password = "012346";

    public static Connection ConnectDB(){
        Connection conn = null;
        try {
             conn = DriverManager.getConnection(host, username, password);
        } catch (Exception e) {
            System.out.println("Loi truy van db: "+ e.getMessage());
            conn = null;
            e.printStackTrace();
        }
        return conn;
    }

    public static void main(String[] args) {
        Connection conn = ConnectDB();
        if(conn != null){
            System.out.println("Success");
            try {
                conn.close();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        }else{
            System.out.println("Failed");
        }
    }
}
