function printHelloWorld() {
    console.log("Hello, World!");
    console.log("Hello, World!");
    console.log("Hello, World!");
}

function isEqual(num1, num2) {
    if (num1 === num2) {
      return true;
    } else {
      return false;
    }
}

function circleArea(radius) {
    const PI = 3.14;
    const area = PI * radius * radius;
    return area;
}

printHelloWorld()
let isEqualVariable = isEqual(3, 6);
console.log(isEqualVariable);
let circleAreaVariable = circleArea(15);
console.log(circleAreaVariable);