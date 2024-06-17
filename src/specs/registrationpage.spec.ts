import Page from "../page_objects/login.ts";

describe("Case 0: Creating an account", () => {
  it("registration page has content", async () => {
    await browser.url("google.com");
  });
});

it("log in", async () => {
  let username = process.env.TEST_USERNAME;
  let password = process.env.TEST_PASSWORD;
  let url = process.env.TEST_URL;
  browser.url(url);
  browser.pause(3000);
});
