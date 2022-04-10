class StringCalculator {
  add(stringNumbers) {
    this.number = stringNumbers;
    this.numbers = this.number.replace(/(\r\n|\n|\r)/gm, ",");
    if (this.numbers.includes("-")) {
      throw new Error("negatives not allowed");
    }
    if (this.numbers === "") {
      return 0;
    } else if (this.numbers.length === 1) {
      return parseInt(this.numbers, 10);
    } else {
      this.result = this.numbers.split(",");
      let total = 0;
      for (let i = 0; i < this.result.length; i++) {
        total = total + parseInt(this.result[i], 10);
      }
      return total;
    }
  }
}

module.exports = StringCalculator;
