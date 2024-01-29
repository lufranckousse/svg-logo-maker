const Triangle = require("../Triangle");

test("renders triangle SVG with specified color", () => {
  const triangle = new Triangle();
  triangle.setColor("red");
  expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="red" />');
});
