const chai = require("chai");
const chaiHttp = require("chai-http");

const should = chai.should();

const app = require("../src/index");

chai.use(chaiHttp);
describe("users api with auth", () => {
  let jwtToken;
  let userId;

  before((done) => {
    let adminCredentials = {
      username: "admin",
      password: "1234",
    };
    chai
      .request(app)
      .post("/auth/login")
      .send(adminCredentials)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.property("token");

        jwtToken = res.body.token;
        done();
      });
  });

  it("get users", (done) => {
    chai
      .request(app)
      .get("/user")
      .set("Authorization", jwtToken)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it("create user", (done) => {
    chai
      .request(app)
      .post("/user")
      .set("Authorization", jwtToken)
      .send(userData())
      .end((err, res) => {
        userId = res.body.id;
        res.should.have.status(200);
        done();
      });
  });

  it("update user", (done) => {
    chai
      .request(app)
      .patch(`/user/${userId}`)
      .set("Authorization", jwtToken)
      .send({ firstName: "testing" })
      .end((err, res) => {
        userId = res.body.id;
        res.should.have.status(202);
        done();
      });
  });

  it("delete user", (done) => {
    chai
      .request(app)
      .delete(`/user/${userId}`)
      .set("Authorization", jwtToken)
      .end((err, res) => {
        userId = res.body.id;
        res.should.have.status(202);
        done();
      });
  });
});

const userData = () => {
  const pre = Math.random().toString(36);

  return {
    username: pre,
    password: pre,
    email: `${pre}.gmail.com`,
  };
};
