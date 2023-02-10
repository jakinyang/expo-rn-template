import { smokeHelper } from "../smokeHelper";

describe('smokeHelper util', () => {
  it('should add two numbers together', () => {
    const smokeValues = {
      a: 1,
      b: 2
    };
    expect(smokeHelper(smokeValues.a, smokeValues.b)).toEqual(3);
  });
})