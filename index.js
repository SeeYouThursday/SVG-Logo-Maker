const inquirer = require("inquirer");
const { Shape, Triangle, Circle, Square } = require("./lib/shapes");
const fs = require("fs");
const { error } = require("console");
// const Validate = require("./lib/validate");

const questions = [
  {
    type: "input",
    name: "logoText",
    message: "Enter up to 3 characters to render on your logo:", ////Going to need a validate here
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
    answers.fillColor,
    answers.logoText,
    answers.textColor
  );
  circle.htmlRender();
  writetoFile("logo.svg", `${circle.htmlRender()}`);
};

const returnSquare = (answers) => {
  const square = new Square(
    answers.fillColor,
    answers.logoText,
    answers.textColor
  );
  square.htmlRender();
  writetoFile("logo.svg", `${square.htmlRender()}`);
};

const returnTriangle = (answers) => {
  const triangle = new Triangle(
    answers.fillColor,
    answers.logoText,
    answers.textColtriangle
  );
  triangle.htmlRender();
  writetoFile("logo.svg", `${triangle.htmlRender()}`);
};

function writetoFile(fileName, data) {
  // console.log("checking which shape", whichShape(answers));
  fs.writeFile(`./dist/${fileName}`, data, (err) => {
    console.log(err);
  });
}
function whichShape(answers) {
  console.log("for switch", answers.shape);
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
      console.log("checking", answers.shape);
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
