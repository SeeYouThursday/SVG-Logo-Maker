const { Shape, Triangle, Circle, Square } = require("./shapes");

describe("Circle", () => {
  //Circle Color
  describe("Circle Color", () => {
    it("Circle should render blue", () => {
      const shape = new Circle();
      const blue = shape.setFill("blue");
      expect(shape.render()).toEqual(
        `<circle cx="150" cy="100" r="80" ${blue} />`
      );
    });
  });
  // describe("", ( => ))
  //Text Length
  describe("Circle Text Render", () => {});
  //Text Color
  describe("textColor test", () => {
    it("Text should render blue", () => {});
  });
});

//Triangle Testing Suite
describe("Triangle Tests", () => {
  //  Triangle Test Color
  describe("Color Test", () => {
    it("Triangle Color Test", () => {
      const shape = new Triangle();
      shape.fill = "blue";
      shape.setFill(shape.fill);
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });
});

// Bootcamp Example Circle
{
  /* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="green" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */
}

{
  /* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
    //Shape Prompt
  <circle cx="150" cy="100" r="80" fill="green" />
  
  //Text Prompt
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
  
  </svg> */
}
