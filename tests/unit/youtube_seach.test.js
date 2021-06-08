const supertest = require("supertest");
const app = require("../../app");

const api = supertest(app);

// describe("Testing youtube app by Andersson", () => {
  test("Service are returned as json", async () => {
    await api
      .get("/api/v1/youtube-search?searchString=vue&maxResults=2")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
// });
