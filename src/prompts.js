const inquirer = require('inquirer');

const promptUser = ( )=> {
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
            name: 'office-number',
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
};

const promptEngineer = teamData => {
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
    .then(memberData => {
        teamData.push(memberData);
        return promptTeam(teamData)
    })
};

const promptIntern = teamData => {
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
             name: 'gitHub',
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
    .then(memberData => {
        teamData.push(memberData);
        return promptTeam(teamData)
    })
};

const promptTeam = teamData => {
   // If there's no 'teamMembers' array, create it
   if (!teamData.teamMembers) {
       teamData.teamMembers = [];
   }
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addTeamMember',
            message: 'Make a choice:',
            choices: ['Add an engineer', 'Add an intern', 'Finish building the team', ],
            default: 'Finish building the team'
        },
        
    ])
    .then(teamChoice => {
        if (teamChoice.addTeamMember === 'Add an engineer') {
            promptEngineer(teamData);
        }
        if (teamChoice.addTeamMember === 'Add an intern') {
            promptIntern(teamData);
        } 
        if (teamChoice.addTeamMember === 'Finish building the team') {
        console.log('Finished building team');
        return teamData;
        
        }
    })
};
const promptPractice = () => {
let teamData = [];
let repeat = true;
do {
   teamData.push(
      await inquirer.prompt([{
            type: "input",
            name: "firstname",
            message: "Enter firstname",
         },
         {
            type: "input",
            name: "lastname",
            message: "Enter lastname",
         },
      ])
   );
   repeat = (
      await inquirer.prompt([{
         type: "confirm",
         name: "repeat",
         message: "Do you want to add another person ?",
      }, ])
   ).repeat;
} while (repeat);

console.log(teamData);

}
module.exports = {
    promptPractice
    
};