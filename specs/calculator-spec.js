var calculator = require("../index");
 
describe("multiplication", function () {
 // Add 2 numbers
  it("should add 2 and 3", function () {
    var sum = calculator.add(2, 3);
    expect(sum).toBe(5);
  });
 
 
  // Subtract 2 numbers
  it("should Subtract 2 and 3", function () {
    var difference = calculator.subtract(2, 3);
    expect(difference).toBe(-1);
  });
 
  // Multiply 2 numbers
  it("should Multiply 2 and 3", function () {
    var product = calculator.multiply(2, 3);
    expect(product).toBe(6);
  });
 
  // Divide 2 numbers
  it("should Divide 6 and 2", function () {
    var reminder = calculator.divide(6, 2);
    expect(reminder).toBe(3);
  });
 
 
  // Modulo 2 numbers
  it("should Modulo 6 and 2", function () {
    var quot = calculator.modulo(6, 2);
    expect(quot).toBe(0);
  });
 
 
 
 });  