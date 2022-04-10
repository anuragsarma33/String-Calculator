class StringCalculator {
  add(stringNumbers) {
    this.number = stringNumbers;
    if (this.number === "") {
      return 0;
    } else if (this.number.length === 1) {
      return parseInt(this.number, 10);
    } else {
      this.result = this.number.split(",");
      let total = 0;
      for (let i = 0; i < this.result.length; i++) {
        total = total + parseInt(this.result[i], 10);
      }
      return total;
    }
  }
}

module.exports = StringCalculator;
