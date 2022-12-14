// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = [

    //Title of the project
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?'
    },

    //Description of the project 
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?'
    },

    //Installation
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install a project?'
    },

    //Usuage 
    {
        type: 'input',
        name: 'usuage',
        message: 'How do you use this project?'
    },

    //License
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a License',
        choices: ['Apache 2.0', 'MIT', 'Boost 1.0', 'MPL 2.0']
    },

    //Contribution
    {
        type: 'input',
        name: 'contribution',
        message: 'How can user contribute to this project?'
    },

    //Tests
    {
        type:'input',
        name: 'test',
        message: 'How does the user test the project?'
    },

    //GitHub 
    {
        type: 'input',
        name:'github',
        message: 'Enter your GitHub username.',
    },

    //Email 
    {
        type:'input',
        name:'email',
        message: 'Enter your Email address to Contact us:',
    },
    ]


//Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(error) => {
        if(error){
            return console.log(error);
        }else{
            console.log("README file is created");
        }
    })
};

//Create a function to initialize app
// const init = () => {
// promptUser()
//     .then((data) => writeFile('README.md', generateMarkdown(data)))
//     .then(() => console.log('README file is created'))
//     .catch((err) => console.error(err));
// };

function init() {
    inquirer.prompt(questions)
    .then(function(userInput){
        console.log(userInput);
        
        writeToFile("README.md", generateMarkdown(userInput));
    });
}

// Function call to initialize app
init();

