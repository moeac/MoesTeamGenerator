const Engineer = require('../lib/Engineer');
const engineer = new Engineer('moe', '1', 'test@mail.com', 'moeac');

test('check constructor values of engineer object', () => {
    expect(engineer.name).toBe('moe');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('test@mail.com');
    expect(engineer.gitHub).toBe('moeac');
});

test('check getName() method', () => {
    expect(engineer.getName()).toBe('moe');
});

test('check getId() method', () => {
    expect(engineer.getId()).toBe('1');
});

test('check getEmail() method', () => {
    expect(engineer.getEmail()).toBe('test@mail.com');
});

test('check getGithub() method', () => {
    expect(engineer.getGitHub()).toBe('moeac');
});

test('check getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});