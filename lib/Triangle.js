class Triangle {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }

  render(text, textColor) {
    return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100,20 180,180 20,180" fill="${this.color}" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="50px" font-family="Arial">${text}</text>
          </svg>`;
  }
}

module.exports = Triangle;
