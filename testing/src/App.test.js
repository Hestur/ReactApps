import {multiply} from './App';
import {minus} from './App';

console.log(multiply(2,2));
console.log(minus(2,2));

test('multiply', () =>{
  const value = multiply(2,2);
  expect(value).toBe(4);
})
test('minus', () =>{
  const value = minus(2,2);
  expect(value).toBe(0);
})