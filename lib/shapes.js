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
    if (fill !== "" || fill !== undefined || fill !== null) {
      return `fill="${fill}"`;
    } else {
      throw new Error("Please enter a valid color keyword.");
    }
  }
  //will be redefined in child classes
  render() {
    return ``;
  }
  // render text - this will be reassigned based on the child class
  renderText() {
    if (this.text.length < 4) {
      return `<text x="50%" y="50%" font-size="60px"  text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    } else {
      throw console.error("Your logo text is too long! Max 3 Characters");
    }
  }
  //fully render the SVG
  htmlRender() {
    return `<?xml version="1.0" encoding="utf-8"?><svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.render()}${this.renderText()}</svg>`;
  }
}

// create a Circle SVG
//only needed to change the render() AND renderText() using polymorphism
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
//only needed to change the render() AND renderText() using polymorphism
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
//only needed to change the render() AND renderText() using polymorphism
class Square extends Shape {
  constructor(fill, text, textColor) {
    super(fill, text, textColor);
  }
  render() {
    return `<rect x="50" y="20" width="160" height="160" ${this.setFill(
      this.fill
    )} />`;
  }
  renderText() {
    if (this.text.length < 4) {
      return `<text x="43.5%" y="60%" font-size="60px" dominant-baseline="text-bottom" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    } else {
      throw console.error("Your logo text is too long! Max 3 Characters");
    }
  }
}

module.exports = { Shape, Circle, Triangle, Square };
