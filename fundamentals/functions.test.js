const { sum, subtract, sumAsync } = require("./functions");
// const { expect, test } = require("./testing-library");

const resultAdd = sum(3, 7);
const expectedAdd = 10;

if (resultAdd !== expectedAdd) {
  throw new Error(`${resultAdd} is not equal to ${expectedAdd}`);
}

const resultSubtract = subtract(10, 3);
const expectedSubtract = 7;

expect(resultSubtract).toBe(expectedSubtract);

test("Check if is greater than", () => {
  expect(6).toBeGreaterThan(5);
});

test("Check if is greater than 2", () => {
  expect(3).toBeGreaterThan(2);
});

test("Test sum async", async () => {
  const resultAdd = await sumAsync(3, 7);
  expect(resultAdd).toBe(10);
});
