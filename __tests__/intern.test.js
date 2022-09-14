const Intern = require("../lib/Intern");

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Cosmin", 1, "test@email.com", "UW");
  expect(e.getRole()).toBe(testValue);
});
