import TestBase from "../main/base/test.base";
const url = `http://localhost:3001/login`;
const data = {
  type: "LOGIN",
  username: "Katharina_Bernier",
  password: "s3cret",
};
describe("first", () => {
  it("first", () => {
    const testBase = new TestBase();
    testBase
      .request(url, data)
      .then(function (response) {
        console.log(response.status);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
});
