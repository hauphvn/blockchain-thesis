package khreal.DAO;

import khreal.DTO.AccountDTO;
import khreal.Utils.ConnectionDB;
import khreal.Utils.DbConfig;

import java.sql.*;
import java.util.ArrayList;

public class AccountDAO {

    public static final String TABLE_NAME = "account";
    public static final String TABLE_COL_ID = "id";
    public static final String TABLE_COL_USERLOGIN = "namelogin";
    public static final String TABLE_COL_PASSWORD = "password";
    public static final String TABLE_COL_FULLNAME = "fullname";
    public static final String TABLE_COL_STATUS = "status";
    public static final String ACCOUNT_STATUS_ACTIVE = "active";
    public static final String ACCOUNT_STATUS_LOCKED = "locked";
    public static final String ACCOUNT_STATUS_PEDDING = "pending";
    public ArrayList<AccountDTO> getAll(){
        ArrayList<AccountDTO> list = new ArrayList<>();
//        Connection conn = null;
        PreparedStatement st = null;
        ResultSet rs = null;
        try(Connection conn = ConnectionDB.openConnection()) {
            if(conn != null){
                System.out.println("dang truy van");
                String sql = "select * from account where status = ?";
                st = conn.prepareStatement(sql);
                st.setString(1, ACCOUNT_STATUS_ACTIVE);
                rs = st.executeQuery();
                AccountDTO accountDTO = new AccountDTO();
                while (rs.next()){
                    accountDTO.setFulleName(rs.getString(AccountDAO.TABLE_COL_FULLNAME));
                    accountDTO.setPassword(rs.getString(AccountDAO.TABLE_COL_PASSWORD));
                    accountDTO.setUserLogin(rs.getString(AccountDAO.TABLE_COL_USERLOGIN));
                    accountDTO.setId(rs.getInt(AccountDAO.TABLE_COL_ID));
                    accountDTO.setStatus(rs.getString(AccountDAO.TABLE_COL_STATUS));
                    list.add(accountDTO);
                }
            }
        }catch (Exception e){
            e.printStackTrace();
        }finally {
        }

        return list;
    }

    public static void main(String[] args) {
        AccountDAO accountDAO = new AccountDAO();
        ArrayList<AccountDTO> lists = accountDAO.getAll();
    }

}
