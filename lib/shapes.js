class AllShapes {}
// parent shape constructor
class Shape {
  constructor(type, points, color) {
    this.type = type;
    this.points = points;
    // this.fill = fill; //example uses setColor
    // this.setColor = setColor;
    this.color = color;
  }
  // setType(type) {
  //   if type
  // }
  setColor(color) {
    ////come back to this - see test example
    color ? `fill="${color}"` : console.log("no color selected");
    //   Consider rewriting looking to see if a valid hex or color chosen
  }
  render() {
    // switch (type) {
    //   case "circle":
    //     `<${type} points="${points} fill="${setColor()}" />`;
    //     break;
    //   case "triangle":
    //     `<${type} points="${points} fill="${setColor()}" />`;
    //   default:
    //     break;
    // }
    //`;
    return `<${type} points="${points} ${this.setColor(color)} />`;
    // `<${type} points="${points} fill="${setColor()}" />`;
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

module.exports = Shape;
