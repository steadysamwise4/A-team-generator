const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const teamMembers = [];
const generatePage = require('./page-template');
const fs = require('fs');
const path = require('path');
const distDir = path.resolve(__dirname, '../dist');

const promptManager = ( ) => {
   return inquirer.prompt([
       {
           type: 'input',
           name: 'name',
           message: 'Enter the name of the team manager (Required)',
           validate: nameInput => {
               if (nameInput) {
                   return true;
               } else {
                   console.log('team manager name required!');
                   return false;
               }
           }
       },
       {
            type: 'input',
            name: 'id',
            message: 'Enter the employee ID of the team manager (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('employee ID required!');
                    return false;
                }
            }
       },
       {
            type: 'input',
            name: 'email',
            message: 'Enter the email address of the team manager (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('email address required!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter the office number of the team manager (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('office number required!');
                    return false;
                }
            }
        },
   ])
   .then(answers => {
       answers.role = 'Manager';
       const manager = new Manager(answers.name, answers.id, answers.email, answers.role, answers.officeNumber);
       teamMembers.push(manager);
       promptMenu();
   })
};

const promptEngineer = () => {
    console.log(`
==================
Add a New Engineer
==================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of this team member (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('name required!');
                    return false;
                }
            }
        },
        {
             type: 'input',
             name: 'id',
             message: 'Enter the employee ID of this team member (Required)',
             validate: nameInput => {
                 if (nameInput) {
                     return true;
                 } else {
                     console.log('employee ID required!');
                     return false;
                 }
             }
        },
        {
             type: 'input',
             name: 'email',
             message: 'Enter the email address of this team member (Required)',
             validate: nameInput => {
                 if (nameInput) {
                     return true;
                 } else {
                     console.log('email address required!');
                     return false;
                 }
             }
         },
         {
             type: 'input',
             name: 'gitHub',
             message: 'Enter the gitHub username of this team member (Required)',
             validate: nameInput => {
                 if (nameInput) {
                     return true;
                 } else {
                     console.log('gitHub username required!');
                     return false;
                 }
             }
         },
    ])
    .then(answers => {
        answers.role = 'Engineer';
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.role, answers.gitHub);
        teamMembers.push(engineer);
        promptMenu();
    })
};

const promptIntern = () => {
    console.log(`
================
Add a New Intern
================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of this team member (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('name required!');
                    return false;
                }
            }
        },
        {
             type: 'input',
             name: 'id',
             message: 'Enter the employee ID of this team member (Required)',
             validate: nameInput => {
                 if (nameInput) {
                     return true;
                 } else {
                     console.log('employee ID required!');
                     return false;
                 }
             }
        },
        {
             type: 'input',
             name: 'email',
             message: 'Enter the email address of this team member (Required)',
             validate: nameInput => {
                 if (nameInput) {
                     return true;
                 } else {
                     console.log('email address required!');
                     return false;
                 }
             }
         },
         {
             type: 'input',
             name: 'school',
             message: 'Enter the school name of this team member (Required)',
             validate: nameInput => {
                 if (nameInput) {
                     return true;
                 } else {
                     console.log('school name required!');
                     return false;
                 }
             }
         },
    ])
    .then(answers => {
        answers.role = 'Intern';
        const intern = new Intern(answers.name, answers.id, answers.email, answers.role, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })
};

const buildTeam = () => {
    if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir);
    } 
    return fs.writeFileSync(path.join(distDir, 'team.html'), generatePage(teamMembers), 'utf-8' )      
    };

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Make a choice:',
            choices: ['Add an engineer', 'Add an intern', 'Finish building the team' ],
            default: 'Finish building the team'
        },   
    ])
    .then(choice => {
        switch (choice.menu) {
            case 'Add an engineer':
                promptEngineer();
                break;
            case 'Add an intern':
                promptIntern();
                break;
            default:
                buildTeam();
        }
    })
};

module.exports = {
    promptManager   
};