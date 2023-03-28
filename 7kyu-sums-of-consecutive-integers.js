// https://www.codewars.com/kata/55b54be931e9ce28bc0000d6/solutions

// y/x = average, (x-1)/2 = halfrange, y/x - (x-1)/2 = first number, finally return first number + n.

function position(x, y, n) {
    return y / x - (x - 1) / 2 + n;
  }

// or 

function position(x, y, n) {
  const middleNumber = y/ x
  // or average 
  const firstNumber = middleNumber - (x/2) + 0.5
  // first number is middle minus half-range or (x - 1) / 2
  return firstNumber + n
}

// this is good too:

function position(x, y, n) {
    const startValue = Math.ceil(y / x) - Math.floor(x / 2);  
    return startValue + n;
  }

