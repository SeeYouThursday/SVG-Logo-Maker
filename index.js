const inquirer = require("inquirer");
const Shape = require("./lib/shapes");
// const Validate = require("./lib/validate");



// const circleQuestions = {};
// const squareQuestions = {};
// const triangleQuestions = {};

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
    // validate: () => {
    //   if (this.name.length > 3) {
    //     return console.log("Please enter up to 3 characters");
    //   }
    // },
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
  //// New object created here const whateverShape = new ChosenShape(required params)
}

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      if (answers.shape == "Circle") {
        const newCircle = new Circle(
          answers.shape,
          answers.fillColor,
          answers.logoText,
          answers.textColor
        );
        const newFill = newCircle.setFill(answers.fillColor);
        return newCircle.render();
      }
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
