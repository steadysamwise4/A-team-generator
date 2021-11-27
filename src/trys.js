const inquirer = require('inquirer');



const promptName = async () => {
    await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter the name of the team manager (Required)',
                validate: nameInput_1 => {
                    if (nameInput_1) {
                        return true;
                    } else {
                        console.log('team manager name required!');
                        return false;
                    }
                }
            }
    ])
};
const promptId = async () => {
    await inquirer.prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Enter the employee ID of the team manager (Required)',
                validate: nameInput_3 => {
                    if (nameInput_3) {
                        return true;
                    } else {
                        console.log('employee ID required!');
                        return false;
                    }
                }
            }
    ])
};

const promptEmail = async () => {
    await inquirer.prompt([
            {
                type: 'input',
                name: 'email',
                message: 'Enter the email address of the team manager (Required)',
                validate: nameInput_5 => {
                    if (nameInput_5) {
                        return true;
                    } else {
                        console.log('email address required!');
                        return false;
                    }
                }
            }
    ])
};

// const getRole = async () => {
//     await inquirer.prompt([

//     ])        
// }
//             {
//                 type: 'input',
//                 name: 'office-number',
//                 message: 'Enter the office number of the team manager (Required)',
//                 validate: nameInput_7 => {
//                     if (nameInput_7) {
//                         return true;
//                     } else {
//                         console.log('office number required!');
//                         return false;
//                     }
//                 }
//             },
//         ]);
//         teamData.push(answers);
//         promptUser();
     
//         console.log(`
// ==================
// Add a New Engineer
// ==================
//     `);
//         const members = await inquirer.prompt([
//             {
//                 type: 'input',
//                 name: 'name',
//                 message: 'Enter the name of this team member (Required)',
//                 validate: nameInput => {
//                     if (nameInput) {
//                         return true;
//                     } else {
//                         console.log('name required!');
//                         return false;
//                     }
//                 }
//             },
//             {
//                  type: 'input',
//                  name: 'id',
//                  message: 'Enter the employee ID of this team member (Required)',
//                  validate: nameInput => {
//                      if (nameInput) {
//                          return true;
//                      } else {
//                          console.log('employee ID required!');
//                          return false;
//                      }
//                  }
//             },
//             {
//                  type: 'input',
//                  name: 'email',
//                  message: 'Enter the email address of this team member (Required)',
//                  validate: nameInput => {
//                      if (nameInput) {
//                          return true;
//                      } else {
//                          console.log('email address required!');
//                          return false;
//                      }
//                  }
//              },
//              {
//                  type: 'input',
//                  name: 'gitHub',
//                  message: 'Enter the gitHub username of this team member (Required)',
//                  validate: nameInput => {
//                      if (nameInput) {
//                          return true;
//                      } else {
//                          console.log('gitHub username required!');
//                          return false;
//                      }
//                  }
//              },
//         ])
//         teamData.push(members);
//         console.log(teamData);
//         }
    


module.exports = {
    promptName,
    promptId,
    promptEmail
}