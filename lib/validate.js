class Validate {
  constructor(type, name, message, validate) {
    this.type = type;
    this.name = name;
    this.message = message;
  }
  validate() {
    if (this.name.length > 3) {
      return console.log("Please enter up to 3 characters");
    }
  }
}

module.exports = Validate;
