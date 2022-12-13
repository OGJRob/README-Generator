// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./Develop/utils/generateMarkdown");
const fs = require ('fs');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the title of your project?"
},
{
    type: "input",
    name: "description",
    message: "Please describe your project"
},
{
    type: "input",
    name: "installation",
    message: "How do you install the project?"
},
{
    type: "input",
    name: "usage",
    message: "What is the project used for?"
},
{
    type: "input",
    name: "contributing",
    message: "How can contributions be made to the project?"
},
{
    type: "input",
    name: "tests",
    message: "Provide test instructions for your project"
},
{
    type: "input",
    name: "username",
    message: "What is your Github username?"
},
{
    type: "input",
    name: "email",
    message: "What is your email address?"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
