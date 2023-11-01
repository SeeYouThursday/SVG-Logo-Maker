const inquirer = require("inquirer");
const { whichShape } = require("./lib/generateSVG");

//prompts for user to create svg logo
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
    message: "Enter the fill color for your shape:",
    //// future dev:Validate for color
  },
];

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
