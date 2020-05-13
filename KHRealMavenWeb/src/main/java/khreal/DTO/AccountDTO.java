package khreal.DTO;

public class AccountDTO {
    private int id;
    private String userLogin;
    private String password;
    private String fulleName;
    private String status;

    public AccountDTO() {
    }

    public AccountDTO(int id, String userLogin, String password, String fulleName, String status) {
        this.id = id;
        this.userLogin = userLogin;
        this.password = password;
        this.fulleName = fulleName;
        this.status = status;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setUserLogin(String userLogin) {
        this.userLogin = userLogin;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setFulleName(String fulleName) {
        this.fulleName = fulleName;
    }

    public int getId() {
        return id;
    }

    public String getUserLogin() {
        return userLogin;
    }

    public String getPassword() {
        return password;
    }

    public String getFulleName() {
        return fulleName;
    }
}
