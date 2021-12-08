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
                        console.log("I need a name! quit playin");
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
                        console.log("just put a legit email so i can send you premium content");
                        return false;
                    }
                }
            },

            {
                name: 'offcieNumber',
                type: 'input',
                message: "And finally please enter the office number",
                validate: (offNum) => {
                    if (isNaN(offNum)) {
                        console.log("m8 enter an office number so i can call you after hours");
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
                generateTeam();
            }
    });
};
