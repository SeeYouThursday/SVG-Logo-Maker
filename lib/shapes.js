// parent shape constructor
class Shape {
  constructor(fill, text, textColor) {
    // this.type = type;
    this.fill = fill;
    this.text = text;
    this.textColor = textColor;
  }
  //sets the fill color of the shape
  setFill(fill) {
    ////come back to this - see test example
    if (fill !== "") {
      return `fill="${fill}"`;
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
  render() {
    return ``;
  }
  renderText() {
    console.log(this.text);
    if (this.text.length < 4) {
      return `<text x="50%" y="50%" font-size="60px"  text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    } else {
      throw console.error("Your logo text is too long! Max 3 Characters");
    }
  }
  htmlRender() {
    return `<?xml version="1.0" encoding="utf-8"?><svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.render()}${this.renderText()}</svg>`;
  }
}

// create a Circle SVG
//only needed to change the render() using polymorphism - is it still necessary to do so?
class Circle extends Shape {
  constructor(fill, text, textColor) {
    super(fill, text, textColor);
  }
  render() {
    return `<circle cx="150" cy="100" r="80" ${this.setFill(this.fill)} />`;
  }
  renderText() {
    if (this.text.length < 4) {
      return `<text x="50%" y="50%" font-size="60px" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    } else {
      throw console.error("Your logo text is too long! Max 3 Characters");
    }
  }
}
// create a Triangle SVG
class Triangle extends Shape {
  constructor(fill, text, textColor) {
    super(fill, text, textColor);
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" ${this.setFill(
      this.fill
    )} />`;
  }
  renderText() {
    if (this.text.length < 4) {
      return `<text x="50%" y="70%" font-size="45px" dominant-baseline="text-bottom" rotate="9" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    } else {
      throw console.error("Your logo text is too long! Max 3 Characters");
    }
  }
}

// create a Square SVG
class Square extends Shape {
  constructor(fill, text, textColor) {
    super(fill, text, textColor);
  }
  render() {
    return `<rect x="50" y="20" width="160" height="160" style="fill:blue;" />`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };
