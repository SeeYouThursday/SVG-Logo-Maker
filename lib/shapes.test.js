const Shape = require("./shapes");

describe("Shapes", () => {
  it("Should render blue", () => {
    const shape = new Shape();
    const blue = `"blue"`;
    expect(shape.render(blue)).toEqual(`<fill="blue" />`);
  });
});

// sample test
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// Poorly drawn TRIANGLE
{
  /* <svg height="210" width="500">
  <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />
</svg> */
}

// circle W3
// {/* <svg height="100" width="100">
//   <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
// </svg> */}

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