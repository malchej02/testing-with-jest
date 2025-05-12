const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

//Testar så att pop faktiskt tar bort det översta elementet
test('pop should remove the top item so peek gives next one', () => {
    stack.push('first');
    stack.push('second');
    stack.pop();

    //'first' borde vara det enda som finns kvar
    expect(stack.peek()).toBe('first');
})