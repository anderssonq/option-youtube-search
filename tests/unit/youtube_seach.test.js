const supertest = require("supertest");

// getting express app from ./app.js
const app = require("../../app");
const server = require("../../server");

const api = supertest(app);

describe("Backend unit testing", () => {
  test("Service are returned as json", async () => {
    const expectedStatus = 200;
    const expectedContentType = "Content-Type";
    const expectedRegex = /application\/json/;
    await api
      .get(
        "/api/v1/youtube-search?searchString=option+interview+test&maxResults=2"
      )
      .expect(expectedStatus)
      .expect(expectedContentType, expectedRegex);
  });

  test("Service have to return invalid service when we dont provide its querys params", async () => {
    const expectedStatus = 400;
    const expectedMessage =
      "Invalid request!, be sure what data you are sending us!";
    const response = await api.get("/api/v1/youtube-search");

    const { status, message } = response.body;

    expect(status).toEqual(expectedStatus);
    expect(message).toMatch(expectedMessage);
  });

  test("Service have to return maxResults:number items", async () => {
    // max numbers of results
    const maxResults = 2;
    const response = await api.get(
      `/api/v1/youtube-search?searchString=option+interview+test&maxResults=${maxResults}`
    );
    const { data } = response.body;
    expect(data).toHaveLength(maxResults);
  });

  test("Service must return a specific video called 'SHOWING A SCAMMER HIS EXACT LOCATION ON GOOGLE STREET VIEW!' ", async () => {
    // looking for a specific video width title...
    const expected =
      "SHOWING A SCAMMER HIS EXACT LOCATION ON GOOGLE STREET VIEW!";

    const response = await api.get(
      `/api/v1/youtube-search?searchString=SHOWING+A+SCAMMER+HIS+EXACT+LOCATION+ON+GOOGLE+STREET+VIEW!&maxResults=1`
    );
    const { data } = response.body;
    expect(data[0].title).toBe(expected);
  });
});

afterAll(() => {
  server.close();
});
