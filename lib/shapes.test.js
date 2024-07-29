const shapes = require("./lib/shapes");

describe("shapes", () => {
  describe("circle", () => {
    it("should be a blue circle"),
      () => {
        const testColor = "blue";
        const shapes = new shapes("", "", testColor);
        expect(shapes.circle())
          .toEqual(`<svg height="1000" width="1000" xmlns="http://www.w3.org/2000/svg">
    <circle r="400" cx="500" cy="500" fill="blue" />
    <text x="500" y="600" font-size="300" text-anchor="middle" fill=""></text>
    </svg>`);
      };
  });
});
