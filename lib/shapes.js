class shapes {
  constructor(name, nameColor, shapeColor) {
    // text
    this.name = name;

    // text color
    this.nameColor = nameColor;

    // shape color
    this.shapeColor = shapeColor;
  }

  // circle
  circle() {
    return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
    <circle r="100" cx="100" cy="100" fill="${this.shapeColor}" />
    <text x="100" y="110" font-size="50" text-anchor="middle" fill="${this.nameColor}">${this.name}</text>
    </svg>`;
  }

  // square
  square() {
    return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="${this.shapeColor}" />
    <text x="100" y="110" font-size="50" text-anchor="middle" fill="${this.nameColor}">${this.name}</text>
    </svg>`;
  }

  // triangle
  triangle() {
    return `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50 15, 100 100, 0 100" fill="${this.shapeColor}" />
    <text x="50" y="80" font-size="30" text-anchor="middle" fill="${this.nameColor}">${this.name}</text>
    </svg>`;
    //   <polygon points="50 15, 100 100, 0 100"/>
  }
}

module.exports = shapes;
