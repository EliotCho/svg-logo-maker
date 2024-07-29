class shapes {
  constructor(name, nameColor, shapeColor) {
    this.name = name;
    this.nameColor = nameColor;
    this.shapeColor = shapeColor;
  }

  // circle
  circle() {
    return `<svg height="1000" width="1000" xmlns="http://www.w3.org/2000/svg">
    <circle r="400" cx="500" cy="500" fill="${this.shapeColor}" />
    <text x="500" y="600" font-size="300" text-anchor="middle" fill="${this.nameColor}">${this.name}</text>
    </svg>`;
  }

  // square
  square() {
    return `<svg height="1000" width="1000" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="600" fill="${this.shapeColor}" />
    <text x="300" y="400" font-size="300" text-anchor="middle" fill="${this.nameColor}">${this.name}</text>
    </svg>`;
  }

  // triangle
  triangle() {
    return `<svg height="1000" width="1000" xmlns="http://www.w3.org/2000/svg">
    <polygon points="500,0 1000,1000 0,1000" fill="${this.shapeColor}" />
    <text x="500" y="700" font-size="500" text-anchor="middle" fill="${this.nameColor}">${this.name}</text>
    </svg>`;
    //   <polygon points="50 15, 100 100, 0 100"/>
  }
}

module.exports = shapes;
