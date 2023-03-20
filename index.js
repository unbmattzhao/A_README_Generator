const fs = require("fs");
const path = rerquire("path");
const inquirer = require("inquirer");
const generateReadme = require("");

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
  },
  {
    type: "list",
    message: "Please select the project license:",
    choices: ["MIT", "GPLv2", "Apache", "GPLv3", "BSD 3-clause", "None"],
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

function writeFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log("Your README was generated!");
  });
}

function init() {}

init();
