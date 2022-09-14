const Engineer = require("../lib/Engineer");

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Cosmin", 1, "test@email.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

