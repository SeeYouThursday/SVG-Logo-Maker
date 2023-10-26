// parent shape constructor
class Shape {
  constructor(type, points, fill, text, textColor) {
    this.type = type;
    this.points = points;
    // this.fill = fill; //example uses setfill
    // this.setfill = setfill;
    this.fill = fill;
    this.text = text;
  }
  setfill(fill) {
    ////come back to this - see test example
    fill ? `fill="${fill}"` : console.log("no fill selected");
    //   Consider rewriting looking to see if a valid hex or fill chosen
  }
  render() {
    const shape = new Shape();
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape}
    ${text}

    </svg>`;
  }
}

// create a Circle SVG
//only needed to change the render() using polymorphism - is it still necessary to do so?
class Circle extends Shape {
  constructor(type, fill, text, textColor) {
    super(type, fill, text, textColor);
  }
  render() {
    return `<${this.type} cx="150" cy="100" r="100" fill="${this.fill}" />`;
  }
}
// create a Triangle SVG
class Triangle extends Shape {}

// create a Square SVG
class Square extends Shape {}

module.exports = { Shape, Circle, Triangle, Square };
