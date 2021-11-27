const Manager = require('../lib/Manager');
const manager = new Manager('Buddy', 98452, 'buddyboy@email.com', 'Manager', 2 );

test('creates a manager object', () => {
    
    expect(manager.name).toBe('Buddy');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.role).toEqual(expect.any(String));
});

test('get name from getName() method', () => {
    expect(manager.getName()).toBe('Buddy');
});

test('get id from getId() method', () => {
    expect(manager.getId()).toBe(98452);
});

test('get email from getEmail() method', () => {
    expect(manager.getEmail()).toBe('buddyboy@email.com');
});

test('get role from getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});

test('get number from getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe(2);
});