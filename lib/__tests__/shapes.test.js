const Triangle = require('../lib/Triangle');
const Circle = require('../lib/Circle');
const Square = require('../lib/Square');

describe('Triangle', () => {
  it('should render a triangle SVG with the correct color', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    const svg = triangle.render();
    expect(svg).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

describe('Circle', () => {
  it('should render a circle SVG with the correct color', () => {
    const circle = new Circle();
    circle.setColor('red');
    const svg = circle.render();
    expect(svg).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
  });
});

describe('Square', () => {
  it('should render a square SVG with the correct color', () => {
    const square = new Square();
    square.setColor('green');
    const svg = square.render();
    expect(svg).toEqual('<rect x="50" y="50" width="200" height="200" fill="green" />');
  });
});
