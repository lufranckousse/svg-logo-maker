const Square = require("../Square");

test("renders square SVG with specified color", () => {
  const square = new Square();
  square.setColor("green");
  expect(square.render()).toEqual('<rect x="20" y="20" width="150" height="150" fill="green" />');
});
