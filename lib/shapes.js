// parent shape constructor
class Shape {
  constructor(type, fill, text, textColor) {
    this.type = type;
    // this.points = points;
    // this.fill = fill; //example uses setfill
    this.fill = fill;
    this.text = text;
    this.textColor = textColor;
  }
  setFill() {
    ////come back to this - see test example
    if (this.fill !== "") {
      return `fill="${this.fill}"`;
    } else {
      console.log("no fill selected");
    }
    //   Consider rewriting looking to see if a valid hex or fill chosen
    // From Xpert
    // const color = "blue"; // or "#0000ff"

    // // Regular expression to match valid color names
    // const colorNameRegex = /^(?:[a-z]+|#[a-f0-9]{3}(?:[a-f0-9]{3})?)$/i;

    // if (colorNameRegex.test(color)) {
    //   console.log("Valid color");
    // } else {
    //   console.log("Invalid color");
    // }
  }
  render() {}
  renderText() {
    if (this.text !== "" && this.text.length < 4) {
      return `<text x="150" y="125" font-size="60" text-anchor="middle" ${this.textColor}>${this.text}</text>`;
    }
  }
  htmlRender() {
    `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${this.render()}
  ${this.renderText()}
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
    return `<circle cx="150" cy="100" r="80" ${this.setFill()} />`;
  }
}
// create a Triangle SVG
class Triangle extends Shape {
  constructor(type, fill, text, textColor) {
    super(type, fill, text, textColor);
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" ${this.setFill(
      this.fill
    )} />`;
  }
}

// create a Square SVG
class Square extends Shape {}

module.exports = { Shape, Circle, Triangle, Square };
