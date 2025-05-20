class Calculator {
  constructor(a, b, operation) {
    this.a = a;
    this.b = b;
    this.operation = operation.toLowerCase()
  }

  calculate() {
    switch (this.operation) {
      case 'add':
        return this.a + this.b;
      case 'subtract':
        return this.a - this.b;
      case 'multiply':
        return this.a * this.b;
      case 'divide':
        if (this.b === 0) {
          return 'Error: Division by zero';
        }
        return this.a / this.b;
      default:
        return 'Invalid operation. Use: add, subtract, multiply, divide';
    }
  }
}

const calc1 = new Calculator(10.5, 5.5, 'add');
console.log('Addition:', calc1.calculate());

const calc2 = new Calculator(10.5, 5.5, 'subtract');
console.log('Subtraction:', calc2.calculate());

const calc3 = new Calculator(10.5, 5.5, 'multiply');
console.log('Multiplication:', calc3.calculate());

const calc4 = new Calculator(10.5, 0, 'divide');
console.log('Division:', calc4.calculate());
