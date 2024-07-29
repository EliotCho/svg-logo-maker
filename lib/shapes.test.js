const shapes = require("./lib/shapes");

describe("shapes", () => {
  describe("circle", () => {
    it("should be a blue circle"),
      () => {
        const testColor = "blue";
        const shapes = new shapes();
        expect(shapes.shapeColor).toEqual(testColor);
      };
  });
});
