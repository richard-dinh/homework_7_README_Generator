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
    name: 'title',
    message: 'Please enter your Project Title',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter your Project description',
  },
  {
    type: 'input',
    name: 'tableContents',
    message: 'Please enter your Table of Contents separated by commans',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter you the Installation command',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please enter Usage examples',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Please enter the License link',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please enter a message about Contributing',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Please enter a message for directing questions',
  }
]

function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), error => error ? console.log(error) : null)
}

function init() {
  let markDownInfo={}
  inquirer.prompt(questions).then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
    let axiosProm = api.getUser(answers.username)
    axiosProm.then(({data:userProfile}) =>{
      //getting GitHub username
      markDownInfo.username = answers.username
      //getting profile pic
      markDownInfo.image = userProfile.avatar_url
      //checking if email is null
      if(userProfile.email === null){
        markDownInfo.email = 'No email to display'
      }else{
        markDownInfo.email = userProfile.email
      }
      //getting project title
      markDownInfo.title = answers.title
      //getting project description
      markDownInfo.description = answers.description
      //getting table of contents
      let tableList = answers.tableContents.split(',')
      for(let i=0; i<tableList.length; i++){
        tableList[i] = `${i+1}. ${tableList[i]}`
      }
      tableList.join('\n')
      console.log(`tableList: ${tableList}`)
      console.log(`Current data object: ${JSON.stringify(markDownInfo)}`)
    })
  })
}

init();
