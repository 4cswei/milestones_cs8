function fizzBuzz(num) {
  if (isNaN(num)) {
    return num + " is not a number";
  } else if (num % 15 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}

function fizzBuzzCounter(n) {
  for (let i = 1; i <= n; i++) {
    console.log(fizzBuzz(i));
  }
}

let ans = fizzBuzzCounter(15);
