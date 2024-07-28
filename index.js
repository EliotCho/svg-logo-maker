const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes");

const svgGen = ({ name, nameColor, shape, shapeColor }) =>
  // Template for the svg logo file
  ``;

// Inquirer prompt where the inputs are collected
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your logo (max 3 characters)?",
      validate: (input) => {
        if (input.length > 3) {
          return "Please enter a name with 3 characters or less";
        }
        return true;
      },
    },
    {
      // color can be hex, rgb, or color name
      type: "input",
      name: "nameColor",
      message: "What color do you want your logo name to be?",
    },
    {
      type: "list",
      name: "shape",
      message: "What shape would you like to use?",
      choices: ["circle", "square", "triangle"],
    },
    {
      // color can be hex, rgb, or color name
      type: "input",
      name: "shapeColor",
      message: "What color do you want your logo shape to be?",
    },
  ])

  .then((answers) => {
    console.log(answers);

    // generate the README file is created as a variable
    const svgLogo = svgGen(answers);
    let fileName = shape + logo + ".svg";
    // write the README file
    fs.writeFile("readmeGenerated.md", svgLogo, (err) =>
      err ? console.error(err) : console.log("SVG Logo Generated!")
    );
  });
