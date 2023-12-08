import request from "supertest";
import app from "@/app";

describe("GET /api/v1", () => {
  it("should return 200 OK", () => {
    return request(app)
      .get("/api/v1")
      .expect("Content-Type", /json/)
      .expect(200, { message: "Hello World!" });
  });
});
