const Employee = require('../lib/Employee');
const employee = new Employee('moe', '1', 'test@mail.com');

test('check constructor values of employee object', () => {
    expect(employee.name).toBe('moe');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('test@mail.com');
});

test('check getName() method', () => {
    expect(employee.getName()).toBe('moe');
});

test('check getId() method', () => {
    expect(employee.getId()).toBe('1');
});

test('check getEmail() method', () => {
    expect(employee.getEmail()).toBe('test@mail.com');
});

test('check getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});