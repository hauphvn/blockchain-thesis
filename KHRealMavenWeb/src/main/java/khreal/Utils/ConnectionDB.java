package khreal.Utils;

import java.sql.*;

public class ConnectionDB {
    public static Connection openConnection() {
        Connection conn = null;
        try {
            conn = DriverManager.getConnection(DbConfig.host, DbConfig.username, DbConfig.password);
        } catch (Exception e) {
            System.out.printf("Loi ket noi db: " + e.getMessage());
            e.printStackTrace();
        }
        return conn;
    }
}
