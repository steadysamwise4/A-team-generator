const Employee = require('../lib/Employee');
const employee = new Employee('Buddy', 98452, 'buddyboy@email.com', 'Employee');

test('creates an employee object', () => {
    
    expect(employee.name).toBe('Buddy');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
});

test('get name from getName() method', () => {
    expect(employee.getName()).toBe('Buddy');
});

test('get id from getId() method', () => {
    expect(employee.getId()).toBe(98452);
});

test('get email from getEmail() method', () => {
    expect(employee.getEmail()).toBe('buddyboy@email.com');
});

test('get role from getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});