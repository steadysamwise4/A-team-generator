const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Buddy', 98452, 'buddyboy@email.com', 'billybcool27' );

test('creates an engineer object', () => {
    
    expect(engineer.name).toBe('Buddy');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
});

test('get name from getName() method', () => {
    expect(engineer.getName()).toBe('Buddy');
});

test('get id from getId() method', () => {
    expect(engineer.getId()).toBe(98452);
});

test('get email from getEmail() method', () => {
    expect(engineer.getEmail()).toBe('buddyboy@email.com');
});

test('get role from getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});

test('get number from getOfficeNumber() method', () => {
    expect(engineer.getGitHub()).toBe('billybcool27');
});