import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/letter";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Methods"] =
  "GET, POST, PUT, DELETE";
axios.defaults.headers.common["Access-Control-Allow-Headers"] = "Content-Type";

class LetterService {
  getToken() {
    const tokenStr = localStorage.getItem("token");
    if (tokenStr) return tokenStr;
    return null;
  }

  frontEndLetter() {
    const config = {
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    };
    return axios.get(API_URL+"/0", config).then((response) => {
      return response.data;
    });
  }
  // backEndLetter() {
  //   return axios
  //     .post(API_URL + "register", {
  //       username,
  //       email,
  //       password,
  //     })
  //     .then((response) => {
  //       if (response.data) {
  //         localStorage.setItem("user", JSON.stringify(response.data));
  //       }

  //       return response.data;
  //     });
  // }
  // fullStackLetter() {
  //   return axios
  //     .post(API_URL + "register", {
  //       username,
  //       email,
  //       password,
  //     })
  //     .then((response) => {
  //       if (response.data) {
  //         localStorage.setItem("user", JSON.stringify(response.data));
  //       }

  //       return response.data;
  //     });
  // }
  // cloudEngineerLetter() {
  //   return axios
  //     .post(API_URL + "register", {
  //       username,
  //       email,
  //       password,
  //     })
  //     .then((response) => {
  //       if (response.data) {
  //         localStorage.setItem("user", JSON.stringify(response.data));
  //       }

  //       return response.data;
  //     });
  // }
  // softwareDeveloper() {
  //   return axios
  //     .post(API_URL + "register", {
  //       username,
  //       email,
  //       password,
  //     })
  //     .then((response) => {
  //       if (response.data) {
  //         localStorage.setItem("user", JSON.stringify(response.data));
  //       }

  //       return response.data;
  //     });
  // }
  // softwareEngineerLetter() {
  //   return axios
  //     .post(API_URL + "register", {
  //       username,
  //       email,
  //       password,
  //     })
  //     .then((response) => {
  //       if (response.data) {
  //         localStorage.setItem("user", JSON.stringify(response.data));
  //       }

  //       return response.data;
  //     });
  // }
  // otherLetter() {
  //   return axios
  //     .post(API_URL + "register", {
  //       username,
  //       email,
  //       password,
  //     })
  //     .then((response) => {
  //       if (response.data) {
  //         localStorage.setItem("user", JSON.stringify(response.data));
  //       }

  //       return response.data;
  //     });
  // }
}

export default new LetterService();
