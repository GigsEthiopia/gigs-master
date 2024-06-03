import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/auth/";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Methods"] =
  "GET, POST, PUT, DELETE";
axios.defaults.headers.common["Access-Control-Allow-Headers"] = "Content-Type";

class AuthService {
  login(email: string, password: string) {
    return axios
      .post(API_URL + "login", {
        usernameOrEmail: email,
        password: password,
      })
      .then((response) => {
        if (response.data) {
          if (response.data.accessToken) {
            const user = { email: email, time: Date.now };
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", response.data.accessToken);
            return response.data;
          }
        }
        return null;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username: string, email: string, password: string) {
    return axios
      .post(API_URL + "register", {
        username,
        email,
        password,
      })
      .then((response) => {
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);
    return null;
  }
}

export default new AuthService();
