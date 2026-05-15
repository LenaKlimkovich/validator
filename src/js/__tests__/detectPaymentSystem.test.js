import { detectPaymentSystem } from "../detectPaymentSystem.js";

test("detectPaymentSystem(number): visa system" , () => {
  const system = detectPaymentSystem('4485925113878675398');
  expect(system).toBe("visa");
});


test("detectPaymentSystem(number): amex system" , () => {
  const system = detectPaymentSystem('3438806346370045');
  expect(system).toEqual("amex");
});

test("detectPaymentSystem(number): mastercard system" , () => {
  const system = detectPaymentSystem('5259442811512418');
  expect(system).toEqual("mastercard");
});