import axios from "axios";

class HttpService {
  static getHeader() {
    return {};
  }

  static get(url) {
    const xhr = axios({
      method: "GET",
      url,
      headers: HttpService.getHeader(),
    })
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return xhr;
  }
}

export default HttpService;
