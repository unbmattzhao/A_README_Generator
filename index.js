const fs = require("fs");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "Please enter the project title:",
    name: "title",
  },
  {
    type: "input",
    message: "Please provide a description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "Please provide the installation instructions:",
    name: "installation",
    default: "npm i",
  },
  {
    type: "input",
    message: "Please enter the usage instructions:",
    name: "usage",
  },
  {
    type: "input",
    message: "Please enter the contribution guidelines:",
    name: "contribution",
  },
  {
    type: "input",
    message: "Please enter any test instructions:",
    name: "test",
    default: "npm test",
  },
  {
    type: "list",
    message: "Please select the project license:",
    choices: [
      "MIT",
      "GPLv2",
      "Apache",
      "GPL",
      "MPL2.0",
      "GPLv3",
      "ISC",
      "None",
    ],
    name: "license",
  },
  {
    type: "input",
    message: "Please enter your GitHub username:",
    name: "github",
  },

  {
    type: "input",
    message: "Please enter your email address:",
    name: "email",
  },
];

// write README file function
function writeFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log("Your README.md file was generated!");
  });
}

function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    writeFile("./Demo/README.md", generateReadme({ ...inquirerResponses }));
  });
}

init();
