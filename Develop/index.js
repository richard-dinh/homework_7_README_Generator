const inquirer = require("inquirer");
const api = require("./utils/api.js");
const markdown = require("./utils/generateMarkdown.js");
const fs = require("fs");
const questions = [
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub Username"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter your project description"
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), error => (error ? console.error(error) : null));
}

function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(JSON.stringify(answers, null, "  "));
        console.log(answers.username);
        let axiosProm = api.getUser(answers.username);
        axiosProm.then(res => {
            // All file handeling goes here
        });
    });
}

init();
