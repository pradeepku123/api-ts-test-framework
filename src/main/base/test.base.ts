import axios from "axios";

export default class TestBase {
  request(url: string, data: any) {
    return axios.post(url, data);
  }
}
