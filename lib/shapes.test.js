const shapes = require("./shapes");

describe("shapes", () => {
  describe("circle", () => {
    test("should be a green circle with blue text of hi", () => {
      const circle = `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
    <circle r="100" cx="100" cy="100" fill="green" />
    <text x="100" y="110" font-size="50" text-anchor="middle" fill="blue">hi</text>
    </svg>`;
      const testColor = "blue";
      const shape = new shapes("hi", testColor, "green");
      const result = shape.circle();
      expect(circle).toEqual(result);
    });
  });

  describe("square", () => {
    test("should be a green square with red text of svg", () => {
      const square = `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="green" />
    <text x="100" y="110" font-size="50" text-anchor="middle" fill="#ff0000">svg</text>
    </svg>`;
      // red color in hex
      const testColor = "#ff0000";
      const shape = new shapes("svg", testColor, "green");
      const result = shape.square();
      expect(square).toEqual(result);
    });
  });

  describe("triangle", () => {
    test("should be a black triangle with orange text of AbC", () => {
      const triangle = `<svg height="300" width="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50 15, 100 100, 0 100" fill="black" />
    <text x="50" y="80" font-size="30" text-anchor="middle" fill="orange">AbC</text>
    </svg>`;
      const testColor = "orange";
      const shape = new shapes("AbC", testColor, "black");
      const result = shape.triangle();
      expect(triangle).toEqual(result);
    });
  });
});
