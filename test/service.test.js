const { addAction } = require("../src/service");

test("1 + 2 to equal 3", () => {
  expect(addAction(1, 2)).toBe(3);
});
