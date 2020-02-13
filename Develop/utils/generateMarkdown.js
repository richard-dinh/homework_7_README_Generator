function generateMarkdown(data) {
  console.log(data)
//   return `
// # ${data.title}

// ###GitHub Username: ${data.username}
// ###Email: ${data.email}
// ![Avatar Image](${data.image})
// ##Table of Contents
// ${data.tableContents}

// ##Description
// ${data.description}



// ## License
// [MIT](https://choosealicense.com/licenses/mit/)
// `
}

module.exports = data =>{
  return `
# ${data.title}

### GitHub Username: ${data.username}

### Email: ${data.email}

![Avatar Image](${data.image})

## Table of Contents

${data.tableContents}

## Description

${data.description}

## Installation

To install, run the below code:

\`\`\`bash
  ${data.installation}
\`\`\`

## Usage

\`\`\`python
  import ${data.title}

  ${data.usage}
\`\`\`


## Contributing
${data.contributing}

## Questions
${data.questions}

## License
[MIT](${data.license})
`
};

