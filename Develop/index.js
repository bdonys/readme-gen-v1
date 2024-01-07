// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter project title:",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter project description:",
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions:",
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage information:",
    },
    {
        type: "input",
        name: "contribution",
        message: "Please enter contributions",
    },
    {
        type: "input",
        name: "test",
        message: "Please enter test instructions:",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your application:",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3-Clause"],
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username:",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address:",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("README.md file created successfully!")
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const readmeContent = `
# ${answers.title}
## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributions
${answers.contribution}

## Tests
${answers.test}

## License
This project is licensed under the [${answers.license}](LICENSE) license.
![License](https://img.shields.io/badge/License-${answers.license.replace(/\s+/g, '%20')}-blue.svg)

## Questions
If you have any questions, you can reach me through:

- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: [${answers.email}](mailto:${answers.email})
`;
            writeToFile("README.md", readmeContent);
        })
        .catch((error) => {
            console.error(error);
        });
}

// Function call to initialize app
init();