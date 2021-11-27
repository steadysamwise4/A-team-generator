const Intern = require('../lib/Intern');
const intern = new Intern('Buddy', 98452, 'buddyboy@email.com', 'Intern', 'Prestige Worldwide' );

test('creates an intern object', () => {
    
    expect(intern.name).toBe('Buddy');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.role).toEqual(expect.any(String));
});

test('get name from getName() method', () => {
    expect(intern.getName()).toBe('Buddy');
});

test('get id from getId() method', () => {
    expect(intern.getId()).toBe(98452);
});

test('get email from getEmail() method', () => {
    expect(intern.getEmail()).toBe('buddyboy@email.com');
});

test('get role from getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});

test('get number from getOfficeNumber() method', () => {
    expect(intern.getSchool()).toBe('Prestige Worldwide');
});