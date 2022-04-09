class StringCalculator {
  add(stringNumbers) {
    this.number = stringNumbers;
    if (this.number === "") {
      return 0;
    } else if (this.number.length === 1) {
      return parseInt(this.number, 10);
    } else {
      this.num1 = this.number.split(",")[0];
      this.num2 = this.number.split(",")[1];
      this.sum = parseInt(this.num1, 10) + parseInt(this.num2, 10);
      return this.sum;
    }
  }
}

module.exports = StringCalculator;
