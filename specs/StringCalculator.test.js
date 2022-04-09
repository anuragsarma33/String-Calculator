const StringCalculator = require("../src/StrignCalculator");

describe("String Calculator", () => {
  let calculator;
  beforeEach(() => {
    calculator = new StringCalculator();
  });
  //empty test case
  it("should return 0 when '' is passed", () => {
    expect(calculator.add("")).toEqual(0);
  });
  //if only one number is passed
  it("should return the number itself when a single number is passed", () => {
    expect(calculator.add("1")).toEqual(1);
  });
  //if both numbers are passed
  it("should return the sum of the numbers if two numbers are given", () => {
    expect(calculator.add("1,2")).toEqual(3);
  });
});
