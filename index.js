function extrapolateLinear(xValues, yValues, x) {
  let n = xValues.length;
  let a = (n * sumXY(xValues, yValues) - sum(xValues) * sum(yValues)) / (n * sumSquared(xValues) - sum(xValues) ** 2);
  let b = (sum(yValues) - a * sum(xValues)) / n;
  return a * x + b;
}

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function sumXY(xValues, yValues) {
  let result = 0;
  for (let i = 0; i < xValues.length; i++) {
    result += xValues[i] * yValues[i];
  }
  return result;
}

function sumSquared(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i] ** 2;
  }
  return result;
}

console.log(extrapolateLinear([2,3,5,7,4],[1,0,0,0,1],process.argv[2]))
