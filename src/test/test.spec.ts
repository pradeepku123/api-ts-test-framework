import axios from "axios";
describe("first", () => {
  it("first", () => {
    axios
      .post("http://localhost:3001/login", {
        type: "LOGIN",
        username: "Katharina_Bernier",
        password: "s3cret",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
});
