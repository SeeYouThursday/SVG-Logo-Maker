const fs = require("fs");

// parent shape constructor
class Shape {
  constructor(type, points, color) {
    this.type = type;
    this.points = points;
    // this.fill = fill; //example uses setColor
    this.color = color;
  }
  render() {
    // fs.writeFile(fileName, render, (error) =>
    //   error ? console.error(error) : console.log("Shape Created!")
    // );
  }

  //   Consider rewriting looking to see if a valid hex or color chosen
  setColor(color) {
    ////come back to this - see test example
    color ? `fill="${color}"` : console.log("no color selected");
  }
}

// create a Circle SVG
class Circle extends Shape {
  constructor(type, points, fill, cx, cy, radius, stroke, sWidth) {
    super(type, points, fill);
    this.cx = cx;
    this.cy = cy;
    this.radius = radius;
    this.stroke = stroke;
    this.sWidth = sWidth;
  }
}
// create a Triangle SVG
class Triangle extends Shape {}

// create a Square SVG
class Square extends Shape {}

module.exports = { Shape, Circle, Triangle, Square };
