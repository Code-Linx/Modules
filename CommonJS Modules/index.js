const math = require("./math");
const calculator = require("./calculator");

const sum = math.add(5, 10);
console.log(`Sum: ${sum}`);

const result = calculator.calculate(5, 10, "multiply");
console.log(`Multiplication Result: ${result}`);
