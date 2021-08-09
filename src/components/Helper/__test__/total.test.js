/* eslint-disable no-undef */
import { totalValue } from '../Total';

describe('check the total', () => {
  test('cuatro numbers in total', () => {
    const value = '3456';
    const expectedValue = '3.456';
    const resultValue = totalValue(value);
    expect(expectedValue).toBe(resultValue);
  });
  test('five numbers in total', () => {
    const value = '23456';
    const expectedValue = '23.456';
    const resultValue = totalValue(value);
    expect(expectedValue).toBe(resultValue);
  });
  test('seis numbers in total', () => {
    const value = '123456';
    const expectedValue = '123.456';
    const resultValue = totalValue(value);
    expect(expectedValue).toBe(resultValue);
  });
});