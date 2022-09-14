const Employee = require("../lib/Employee");

test("Can set employee name", () => {
  const name = "Cosmin";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set employee id", () => {
  const testValue = 100;
  const e = new Employee("Cosmin", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set employee email", () => {
  const testValue = "test@email.com";
  const e = new Employee("Cosmin", 1, testValue);
  expect(e.email).toBe(testValue);
});

