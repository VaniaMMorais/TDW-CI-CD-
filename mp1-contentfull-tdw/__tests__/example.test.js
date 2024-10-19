import React from 'react';

test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});

// __tests__/simpleJsx.test.js

const Hello = () => <div>Hello World</div>;

test('renders simple JSX component', () => {
  const result = Hello();
  expect(result).toEqual(<div>Hello World</div>);
});
