import { isValidCardNumber } from "../validation.js";

test("isValidCardNumber(number) returns false" , () => {
  const system = isValidCardNumber('4333333333333333333333');
  expect(system).toBe(false);
});


test("isValidCardNumber(number) returns true" , () => {
  const system = isValidCardNumber('4175001894565885');
  expect(system).toBe(true);
});


