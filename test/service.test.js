const { addAction } = require("../src/service");

test("1 + 2 to equal 3", () => {
  expect(addAction(1, 2)).toBe(3);
});

test("2 + 2 to equal 4", () => {
  expect(addAction(2, 2)).toBe(4);
});

test("2 + 3 to equal 5", () => {
  expect(addAction(2, 3)).toBe(5);
});

test("2 + 5 to equal 7", () => {
  expect(addAction(2, 5)).toBe(7);
});
