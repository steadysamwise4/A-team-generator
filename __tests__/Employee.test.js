const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Buddy');
    employee.id = 4582;
    employee.email = 'buddyboy@email.com';
    employee.role = 'Manager';

    expect(employee.name).toBe('Buddy');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
})