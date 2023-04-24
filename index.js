// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const utils = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?",
"Enter a description",
"Enter the table of contents",
"How is this project installed?",
"How is this project used?",
"What license are you using?",
"Who contributed to this project?",
"What tests have been performed?",
"Do you have any questions?",
"Is there a link to a screenshot?",
"Add anything extra here"];

// TODO: Create a function to write README file
function writeToFile(data) {
    let newReadMe = utils.generateMarkdown(data);
    console.log(newReadMe);

    fs.writeFile('README.md', newReadMe, (err) => err ?
    console.log(err) : console.log("It works!"));
}

// TODO: Create a function to initialize app
function init() {
   
    inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'tableofcontents',
        },
        {
            type: 'rawlist',
            message: questions[3],
            name: 'installation',
            choices: ["Doesn't need installation", "Must download"],
        },
        {
            type: 'input',
            message: questions[4],
            name: 'usage',
        },
        {
            type: 'rawlist',
            message: questions[5],
            name: 'license',
            choices: ["MIT", "BSD", "Apache", "GNU", "IBM"],
        },
        {
            type: 'input',
            message: questions[6],
            name: 'contributors',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'testing',
        },
        {
            type: 'input',
            message: "What is your GitHub username?",
            name: 'github',
        },
        {
            type: 'input',
            message: "What is your email?",
            name: 'email',
        },
    ])
    .then((data) => writeToFile(data));
    
}

// Function call to initialize app
init();
