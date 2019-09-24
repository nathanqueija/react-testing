import { hello } from './functions';

test('it works', () => {
  console.log(window);
  const expected = 'hello';
  expect(hello()).toBe(expected);
});
