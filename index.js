const renderHTML = require('./src/renderHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

const theTeam = [];

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
                        console.log("give me a name pls");
                        return false;
                    }
                }
            },

            {
                name: "id",
                type: "input",
                message: "What is the manager's ID?",
                validate: managerID => {
                    if (isNaN(managerID)) {
                        console.log("I need an ID before ID -stroy your face, im kidding but pls give me an id otherwise we're just gonna loop forever until one of us dies");
                        return false;
                    } else {
                        return true;
                    }
                }
            },

            {
                name: 'email',
                type: 'input',
                message: "Please give me the manager's email",
                validate: email => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                    if (valid) {
                        return true;
                    } else {
                        console.log("please enter a genuine email before i genuinely hang myself");
                        return false;
                    }
                }
            },

            {
                name: 'officeNumber',
                type: 'input',
                message: "And finally please enter the office number",
                validate: (offNum) => {
                    if (isNaN(offNum)) {
                        console.log("pls give me a number to call, it gets lonely sometimes");
                        return false;
                    } else {
                        return true;
                    }
                }
            }

        ]

    )
    .then(managerData => {
        const  { name, id, email, officeNumber } = managerData; 
        const manager = new Manager (name, id, email, officeNumber);
        console.log(manager);

        theTeam.push(manager);
        employeeList();
    });
};

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
                        console.log("give me a name pls");
                        return false;
                    }
                }
            },

            {
                name: "id",
                type: "input",
                message: "What is the engineer's ID?",
                validate: engineerID => {
                    if (isNaN(engineerID)) {
                        console.log("I need an ID before ID -stroy your face, im kidding but pls give me an id otherwise we're just gonna loop forever until one of us dies");
                        return false;
                    } else {
                        return true;
                    }
                }
            },

            {
                name: 'email',
                type: 'input',
                message: "Please give me the engineer's email",
                validate: email => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                    if (valid) {
                        return true;
                    } else {
                        console.log("please enter a genuine email before i genuinely hang myself");
                        return false;
                    }
                }
            },

            {
                name: 'gitHub',
                type: 'input',
                message: "Please give me the engineer's gitHub username",
                validate: gitHubName => {
                    if (gitHubName) {
                        return true;
                    } else {
                        console.log("give me a github name pls");
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
            employeeList();
    });
};

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
                        console.log("give me a name pls");
                        return false;
                    }
                }
            },

            {
                name: "id",
                type: "input",
                message: "What is the intern's ID?",
                validate: internID => {
                    if (isNaN(internID)) {
                        console.log("I need an ID before ID -stroy your face, im kidding but pls give me an id otherwise we're just gonna loop forever until one of us dies");
                        return false;
                    } else {
                        return true;
                    }
                }
            },

            {
                name: 'email',
                type: 'input',
                message: "Please give me the slave's email",
                validate: email => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

                    if (valid) {
                        return true;
                    } else {
                        console.log("please enter a genuine email before i genuinely hang myself");
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
                        console.log("give me a school name pls");
                        return false;
                    }
                }
            }

        ]
    )
    .then (internData => {
            const { name, id, email, gitHub } = internData;
            const intern = new Intern (name, id, email, gitHub);
            console.log(intern);

            theTeam.push(intern);
            employeeList();
    });

};
        

function employeeList() {
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
    .then (selected => {
        switch (selected.options) {
            
            case "Add an Engineer":
                addEngineer();
                break;
            case "Add an Intern":
                addIntern();
                break;
            default:
                generateTeam(theTeam);
            }
    });
};

function generateTeam() {
    fs.writeFile("./dist/TheTeam.html", data, (err) => 
    err ? console.log(err) : console.log("We have generated a 'team'!"));
}

function init() {
    console.log('alright lets make a team');
    addManager();
}

init();
