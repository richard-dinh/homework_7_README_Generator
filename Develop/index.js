const inquirer = require('inquirer')
const api = require('./utils/api.js')
const markdown = require('./utils/generateMarkdown.js')
const fs = require('fs')
const questions = [
  {
    type: 'input',
    name: 'username',
    message: 'Please enter your GitHub Username',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter your project description',
  }
]

function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), error => error ? console.log(error) : null)
}

function init() {
  inquirer.prompt(questions).then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
    console.log(answers.username)
    let data = api.getUser(answers.username)
    console.log(`data is :${data}`)
  });
}

init();
