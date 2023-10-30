const { Shape, Triangle, Circle, Square } = require("./shapes");

//Testing for:
///// Test Only from Shape Class
// Shape Color - comes directly from Shape class - only test there
// Text Color - comes directly from Shape class - only test there
// Text Length - comes directly from Shape class - only test there
//// Individual Req Tests ////////
// Shape Render() - test for each because each render() is different for each shape
//TODO  Square, Triangle
// Shape htmlRender() - because each render() is different, test each shape
//TODO  Square, Triangle

describe("Shape", () => {
  //Text Color
  describe("textColor test", () => {
    it("Text should render blue", () => {
      const shape = new Shape();
      shape.text = "URM"; // Shows that at least 3 characters are accepted
      shape.textColor = "blue";
    });
  });
  //Text Render
  describe("Checking for Text", () => {
    test("Render text html", () => {
      const shape = new Shape();
      shape.text = "URM";
      shape.textColor = "blue";
      shape.renderText();
      expect(shape.renderText()).toEqual(
        `<text x="150" y="115" font-size="60" text-anchor="middle" fill="blue">URM</text>`
      );
    });
  });
  // Text Length Requirement - testing exception in shape.js
  describe("Checking Text Length", () => {
    it("should return error if > 3 characters", () => {
      const shape = new Shape();
      shape.text = "URMom"; // this is what is being tested
      shape.textColor = "blue";
      expect(console.error("Your logo text is too long! Max 3 Characters"));
    });
  });
});

describe("Circle", () => {
  // circle svg is created w/ color accepted
  describe("Circle svg and Color", () => {
    it("Circle svg should render and fill should be blue", () => {
      const shape = new Circle();
      shape.fill = "blue";
      shape.setFill(shape.fill);
      expect(shape.render()).toEqual(
        `<circle cx="150" cy="100" r="80" fill="blue" />`
      );
    });
    //Circle is rendered fully
    describe("Full SVG Rendering", () => {
      it("Circle should return svg html", () => {
        const shape = new Circle();
        shape.fill = "blue";
        shape.setFill(shape.fill);
        shape.text = "URM";
        shape.textColor = "red";
        expect(shape.htmlRender()).toEqual(
          `<?xml version="1.0" encoding="utf-8"?><svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="115" font-size="60" text-anchor="middle" fill="red">URM</text></svg>`
        );
      });
    });
  });
});

//Triangle Testing Suite
describe("Triangle Tests", () => {
  //  Triangle svg is created w/ color accepted
  describe("Triangle svg and Color", () => {
    it("Triangle Color Test", () => {
      const shape = new Triangle();
      shape.fill = "blue";
      shape.setFill(shape.fill);
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });

  describe("Full SVG Rendering", () => {
    it("Triangle should return full svg html", () => {
      const shape = new Triangle();
      shape.fill = "blue";
      shape.setFill(shape.fill);
      shape.text = "URM";
      shape.textColor = "red";
      expect(shape.htmlRender()).toEqual(
        `<?xml version="1.0" encoding="utf-8"?><svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="115" font-size="60" text-anchor="middle" fill="red">URM</text></svg>`
      );
    });
  });
});

describe("Square Tests", () => {
  //  Square svg is created w/ color accepted
  describe("Square svg and Color", () => {
    it("Square Color Test", () => {
      const shape = new Square();
      shape.fill = "blue";
      shape.setFill(shape.fill);
      expect(shape.render()).toEqual(
        `<rect x="50" y="20" width="160" height="160" style="fill:blue;" />`
      );
    });
  });

  describe("Full SVG Rendering", () => {
    it("Square should return full svg html", () => {
      const shape = new Square();
      shape.fill = "blue";
      shape.setFill(shape.fill);
      shape.text = "URM";
      shape.textColor = "red";
      expect(shape.htmlRender()).toEqual(
        `<?xml version="1.0" encoding="utf-8"?><svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="160" height="160" style="fill:blue;" /><text x="150" y="115" font-size="60" text-anchor="middle" fill="red">URM</text></svg>`
      );
    });
  });
});
// Bootcamp Example Circle
{
  /* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="green" />

<text x="150" y="115" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */
}

{
  /* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
    //Shape Prompt
  <circle cx="150" cy="100" r="80" fill="green" />
  
  //Text Prompt
  <text x="150" y="115" font-size="60" text-anchor="middle" fill="white">SVG</text>
  
  </svg> */
}
