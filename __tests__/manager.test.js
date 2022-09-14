const Manager = require("../lib/Manager");

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Cosmin", 1, "test@email.com", 100);
  expect(e.getRole()).toBe(testValue);
});
