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

  //handle unknown amount of numbers
  it("should return the sum of an unknown amount of numbers", () => {
    const randomArray = (length, max) =>
      [...new Array(length)].map(() => Math.round(Math.random() * max));
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    const result = randomArray(randomNumber, randomNumber);
    const sum = result.reduce((pv, cv) => pv + cv, 0);
    const arg = result.join();
    expect(calculator.add(arg)).toEqual(sum);
  });

  //handle new lines between numbers
  it("should allow \\n in between the input number string", () => {
    expect(calculator.add("1\n2,3")).toEqual(6);
  });

  //handle negative numbers
  it("should not allow negative numbers", () => {
    expect(() => {
      calculator.add("-41,50");
    }).toThrow("negatives not allowed");

    expect(() => {
      calculator.add("-41,50,-20,-30");
    }).toThrow("negatives not allowed");
  });
});
