const inquirer = require("inquirer");
// const Shapes = require("/lib/shapes.js");

// const shape1 = new Shapes();
// console.log(shape1);

const circleQuestions = {};
const squareQuestions = {};
const triangleQuestions = {};

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
function writetoFile() {
  return "this";
}

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      writetoFile(answers);
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
