const Intern = require('../lib/Intern');
const intern = new Intern('moe', '1', 'test@mail.com', 'ghettouniversity');

test('check constructor values of intern object', () => {
    expect(intern.name).toBe('moe');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('test@mail.com');
    expect(intern.school).toBe('ghettouniversity');
});

test('check getName() method', () => {
    expect(intern.getName()).toBe('moe');
});

test('check getId() method', () => {
    expect(intern.getId()).toBe('1');
});

test('check getEmail() method', () => {
    expect(intern.getEmail()).toBe('test@mail.com');
});

test('check getSchool() method', () => {
    expect(intern.getSchool()).toBe('ghettouniversity');
});

test('check getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});