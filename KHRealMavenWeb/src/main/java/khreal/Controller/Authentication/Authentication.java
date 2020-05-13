package khreal.Controller.Authentication;

import khreal.DAO.AccountDAO;
import khreal.DTO.AccountDTO;

import java.util.ArrayList;

public class Authentication {
    public static boolean CheckLogin(String username, String password){
        AccountDAO accountDAO = new AccountDAO();
        AccountDTO accountDTO = null;
        try {
            ArrayList<AccountDTO> accountDTOS = new ArrayList<>();
            accountDTOS = accountDAO.getAll();
            for (AccountDTO acc : accountDTOS){
                if(acc.getUserLogin().equals(username) && acc.getPassword().equals(password)){
                    return true;
                }
            }
            return false;
        }catch (Exception e){
            System.out.println("Loi trong Authentication: "+e.getMessage());
            return false;
        }

    }

    public static void main(String[] args) {
        System.out.println(CheckLogin("hauphvn","123456"));
        System.out.println(CheckLogin("haupdfdhvn","123456"));
    }
}
