const inquirer = require('inquirer')
const questions = [
  {
    type: 'input',
    name: 'gitHubUserName',
    message: 'Please enter your GitHub Username',
  }
]

function writeToFile(fileName, data) {
}

function init() {

}

init();

inquirer.prompt(questions).then(answers => {
  console.log(JSON.stringify(answers, null, '  '));
  console.log(answers.gitHubUserName)
});