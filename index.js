const inquirer = require("inquirer");
const { Shape, Triangle, Circle, Square } = require("./lib/shapes");
const fs = require("fs");
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
    message: "Enter the fill color your shape:", ////Validate for color? or use the class?
  },
];

const answersData = [];

const returnCircle = (answers) => {
  const newCircle = new Circle(
    answers.fillColor,
    answers.logoText,
    answers.textColor
  );
  newCircle.setFill();
  newCircle.renderText();
  newCircle.render();
  writetoFile(answers);
};

function writetoFile(answers) {
  console.log(whichShape(answers));
  // New object created here const whateverShape = new ChosenShape(required params)if (answers.shape == "Circle") {
  fs.writeFile("logo.SVG", `${newCircle.htmlRender()}`);
}
function whichShape(answers) {
  switch (answers.shape) {
    case `"Circle"`:
      returnCircle(answers);
      break;
    case "Square":
      return returnSquare(answers);
      break;
    case "Triangle":
      return returnTriangle(answers);
    default:
      "This is tough";
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

// <svg
