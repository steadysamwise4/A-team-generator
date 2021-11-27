const { promptName, promptId, promptEmail } = require('./src/test');
const Employee = require('./lib/Employee');

let manager = new Employee(promptName, promptId, promptEmail);
manager.displayInfo();
   