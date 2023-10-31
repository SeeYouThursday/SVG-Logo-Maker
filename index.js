const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");

const questions = [
  {
    type: "input",
    name: "logoText",
    message: "Enter up to 3 characters to render on your logo:", ////Going to need a validate here
    validate: (logoText) =>
      logoText.length < 4
        ? true
        : "Your logo text is too long! Max 3 Characters",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter the text color for the logo:",
  },
  {
    type: "list",
    message: "Select a Shape",
    name: "shape",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "fillColor",
    message: "Enter the fill color for your shape:", ////Validate for color? or use the class?
  },
];

const returnCircle = (answers) => {
  //return new Circle Constructor
  const circle = new Circle(
    answers.fillColor.toLowerCase(),
    answers.logoText.toUpperCase(),
    answers.textColor.toLowerCase()
  );
  circle.htmlRender();
  writetoFile("logo.svg", `${circle.htmlRender()}`);
};

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

const returnTriangle = (answers) => {
  //return new Triangle Constructor
  const triangle = new Triangle(
    answers.fillColor,
    answers.logoText,
    answers.textColtriangle
  );
  triangle.htmlRender();
  writetoFile("logo.svg", `${triangle.htmlRender()}`);
};

function writetoFile(fileName, data) {
  fs.writeFile(`./dist/${fileName}`, data, (err) =>
    err ? console.log(err) : console.log("Generated logo.svg")
  );
}

function whichShape(answers) {
  switch (answers.shape) {
    case "Circle":
      returnCircle(answers);
      break;
    case "Square":
      return returnSquare(answers);
      break;
    case "Triangle":
      return returnTriangle(answers);
    default:
      console.log("switch", error);
      break;
  }
}

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      whichShape(answers);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.error(`Prompt couldn't be rendered in the current environment`);
      } else {
        console.error(`Something else went wrong: ${error}`);
      }
    });
}

init();

//Future Dev - create tests that terminate properly at the end of the tests for index.js
// module.exports = { whichShape, returnCircle };
