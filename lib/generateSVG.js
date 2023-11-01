const { Triangle, Circle, Square } = require("./shapes");
const fs = require("fs");

//return new Circle Constructor
const returnCircle = (answers) => {
  const circle = new Circle(
    answers.fillColor.toLowerCase(),
    answers.logoText.toUpperCase(),
    answers.textColor.toLowerCase()
  );
  circle.htmlRender();
  writetoFile("logo.svg", `${circle.htmlRender()}`);
};
//return new Square Constructor
const returnSquare = (answers) => {
  //return new Square Constructor
  const square = new Square(
    answers.fillColor,
    answers.logoText,
    answers.textColor
  );
  square.htmlRender();
  writetoFile("logo.svg", `${square.htmlRender()}`);
};
//return new Triangle Constructor
const returnTriangle = (answers) => {
  //return new Triangle Constructor
  const triangle = new Triangle(
    answers.fillColor,
    answers.logoText,
    answers.textColor
  );
  triangle.htmlRender();
  console.log("for testing");
  writetoFile("logo.svg", `${triangle.htmlRender()}`);
};

function whichShape(answers) {
  const { shape } = answers;
  switch (shape) {
    case "Circle":
      return returnCircle(answers);
    case "Square":
      return returnSquare(answers);
    case "Triangle":
      return returnTriangle(answers);
    default:
      console.log("Invalid Shape");
      break;
  }
}

//generate file with svg
function writetoFile(fileName, data) {
  fs.writeFile(`./dist/${fileName}`, data, (err) =>
    err ? console.log(err) : console.log("Generated logo.svg")
  );
}

module.exports = { whichShape };
