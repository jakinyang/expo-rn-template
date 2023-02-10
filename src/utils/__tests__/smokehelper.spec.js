import {smokeHelper} from '../smokeHelper'

describe('smokeHelper', () => {
  it('should add two numbers', () => {
    const firstNumber = 1;
    const secondNumber = 2;
    expect(smokeHelper(firstNumber, secondNumber)).toEqual(3);
  });
})