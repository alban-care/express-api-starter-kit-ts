import request from "supertest";
import app from "./app";

// use redirection middleware to redirect to /api/v1

describe("GET /", () => {
  it("should return 200 OK", () => {
    return request(app)
      .get("/api/v1")
      .expect("Content-Type", /json/)
      .expect(200, { message: "Hello World!" });
  });
});

describe("GET /api", () => {
  it("should return 200 OK", () => {
    return request(app)
      .get("/api/v1")
      .expect("Content-Type", /json/)
      .expect(200, { message: "Hello World!" });
  });
});
