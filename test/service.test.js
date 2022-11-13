const { addAction } = require("../src/service");

test("1 + 2 to equal 3", () => {
  expect(addAction(1, 2)).toBe(3);
});

test("2 + 2 to equal 4", () => {
  expect(addAction(2, 2)).toBe(4);
});

test("2 + 2 to equal 4", () => {
  expect(addAction(2, 2)).toBe(4);
});
