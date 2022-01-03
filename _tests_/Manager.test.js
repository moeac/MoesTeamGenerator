const Manager = require('../lib/Manager');
const manager = new Manager('moe', '1', 'test@mail.com', '1-3- Double 0h! -6- Triple Fiiiiive -0-6');

test('check constructor values of manager object', () => {
    expect(manager.name).toBe('moe');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('test@mail.com');
    expect(manager.officeNumber).toBe('1-3- Double 0h! -6- Triple Fiiiiive -0-6');
});

test('check getName() method', () => {
    expect(manager.getName()).toBe('moe');
});

test('check getId() method', () => {
    expect(manager.getId()).toBe('1');
});

test('check getEmail() method', () => {
    expect(manager.getEmail()).toBe('test@mail.com');
});

test('check getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('1-3- Double 0h! -6- Triple Fiiiiive -0-6');
});

test('check getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});