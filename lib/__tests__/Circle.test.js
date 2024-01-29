const Circle = require("../Circle");

test("renders circle SVG with specified color", () => {
  const circle = new Circle();
  circle.setColor("blue");
  expect(circle.render()).toEqual('<circle cx="100" cy="100" r="80" fill="blue" />');
});
