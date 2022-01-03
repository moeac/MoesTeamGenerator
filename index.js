// imports the goods
const renderHTML = require('./src/renderHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// using inquirer for prompts and clc for node console colours to add a bit of flavour
const fs = require('fs');
const inquirer = require('inquirer');
const clc = require("cli-color");
let yellow = clc.yellow;

// create empty team array
const theTeam = [];

// manager questions prompted with inquirer and checks if values are entered before moving on to the next question so the victim cannot escape
function addManager() {
    return inquirer.prompt (

        [

            {
                name: "name",
                type: "input",
                message: "Who's the manager around here?",
                validate: managerName => {
                    if (managerName) {
                        return true;
                    } else {
                        console.log(yellow("\ngive me a name pls"));
                        return false;
                    }
                }
            },

            {
                name: "id",
                type: "input",
                message: "What is the manager's ID?",
                // validates for a number input
                validate: managerID => {
                    if (!/^[0-9]+$/.test(managerID)) {
                        console.log(yellow("\nplease give me an ID before ID-ecide to swerve my 1999 nissan altima into oncoming traffic"));
                        return false;
                    } else {
                        return true;
                    }
                }
            },

            {
                name: 'email',
                type: 'input',
                message: "Please give me the manager's email:",
                // validates for an email
                validate: email => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                    if (valid) {
                        return true;
                    } else {
                        console.log(yellow("\nplease enter a genuine email before i genuinely hang myself"));
                        return false;
                    }
                }
            },

            {
                name: 'officeNumber',
                type: 'input',
                message: "And finally please enter the office number:",
                validate: officeNum => {
                    if (!/^[0-9]+$/.test(officeNum)) {
                        console.log(yellow("\npls give me a number to call, it gets lonely sometimes"));
                        return false;
                    } else {
                        return true;
                    }
                }
            }

        ]

    )
    // deconstructs the data received and creates a new manager object and pushes to theTeam array, then runs options()
    .then(managerData => {
        const  { name, id, email, officeNumber } = managerData; 
        const manager = new Manager (name, id, email, officeNumber);
        console.log(manager);

        theTeam.push(manager);
        options();
    });
};

// engineer questions with validations as described above in the manager card
function addEngineer() {
    return inquirer.prompt(

        [

            {
                name: "name",
                type: "input",
                message: "Who are the engineers around here?",
                validate: engineerName => {
                    if (engineerName) {
                        return true;
                    } else {
                        console.log(yellow("\ngive me a name pls"));
                        return false;
                    }
                }
            },

            {
                name: "id",
                type: "input",
                message: "What is the engineer's ID?",
                validate: engineerID => {
                    if (!/^[0-9]+$/.test(engineerID)) {
                        console.log(yellow("\nplease give me an ID before ID-ecide to swerve my 1999 nissan altima into oncoming traffic"));
                        return false;
                    } else {
                        return true;
                    }
                }
            },

            {
                name: 'email',
                type: 'input',
                message: "Please give me the engineer's email:",
                validate: email => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                    if (valid) {
                        return true;
                    } else {
                        console.log(yellow("\nplease enter a genuine email before i genuinely hang myself"));
                        return false;
                    }
                }
            },

            {
                name: 'gitHub',
                type: 'input',
                message: "Please give me the engineer's gitHub username:",
                validate: gitHubName => {
                    if (gitHubName) {
                        return true;
                    } else {
                        console.log(yellow("\ngive me a github name pls"));
                        return false;
                    }
                }
            }

        ]
    )
    .then (engineerData => {
            const { name, id, email, gitHub } = engineerData;
            const engineer = new Engineer (name, id, email, gitHub);
            console.log(engineer);

            theTeam.push(engineer);
            options();
    });
};

// intern questions with validations as described above in the manager card
function addIntern() {
    return inquirer.prompt(

        [

            {
                name: "name",
                type: "input",
                message: "Who are the interns around here?",
                validate: internName => {
                    if (internName) {
                        return true;
                    } else {
                        console.log(yellow("\ngive me a name pls"));
                        return false;
                    }
                }
            },

            {
                name: "id",
                type: "input",
                message: "What is the intern's ID?",
                validate: internID => {
                    if (!/^[0-9]+$/.test(internID)) {
                        console.log(yellow("\nplease give me an ID before ID-ecide to swerve my 1999 nissan altima into oncoming traffic"));
                        return false;
                    } else {
                        return true;
                    }
                }
            },

            {
                name: 'email',
                type: 'input',
                message: "Please give me the slave's email:",
                validate: email => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                    if (valid) {
                        return true;
                    } else {
                        console.log(yellow("\nplease enter a genuine email before i genuinely hang myself"));
                        return false;
                    }
                }
            },

            {
                name: 'school',
                type: 'input',
                message: "Which school is the intern going to?",
                validate: schoolName => {
                    if (schoolName) {
                        return true;
                    } else {
                        console.log(yellow("\ngive me a school name pls"));
                        return false;
                    }
                }
            }

        ]
    )
    .then (internData => {
            const { name, id, email, school } = internData;
            const intern = new Intern (name, id, email, school);
            console.log(intern);

            theTeam.push(intern);
            options();
    });

};
        
// options list from inquirer to select what function to run using switch statement
function options() {
    return inquirer.prompt (
        [
            {
                name: 'options',
                type: 'list',
                message: 'Select one of the following:',
                choices: ['Add an Engineer', 'Add an Intern', 'Show me my team!']
            }
        ]
    )
    // whatever user selects, run the function
    .then (selected => {
        switch (selected.options) {
            
            case "Add an Engineer":
                addEngineer();
                break;
            case "Add an Intern":
                addIntern();
                break;
            default:
                // renderHTML function which we imported from /src to run through theTeam
                let data = renderHTML(theTeam);
                // generates the team file in the /dist folder
                generateTeamFile(data);
            }
    });
};

// generates the file
function generateTeamFile(data) {
    console.log(theTeam);
    fs.writeFile("./dist/TheTeam.html", data, (err) => 
    err ? console.log(err) : console.log(yellow("\nWe have generated a 'team'!"))
)}

// initialise to begin the prompts
function init() {
    console.log(yellow("\nAlright lets make a team"));
    addManager();
}

init();
