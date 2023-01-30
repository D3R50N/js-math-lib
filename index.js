const debug = require("./config");

/**
 * Linear extrapolation
 */
function extrapolateLinear(xValues, yValues, x) {
  let n = xValues.length;
  let a =
    (n * sumXY(xValues, yValues) - sum(xValues) * sum(yValues)) /
    (n * sumSquared(xValues) - sum(xValues) ** 2);
  let b = (sum(yValues) - a * sum(xValues)) / n;
  return a * x + b;
}

/**
 * Sum of array elements
 */
function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

/**
 * Sum of products of corresponding elements of two arrays
 */
function sumXY(xValues, yValues) {
  let result = 0;
  for (let i = 0; i < xValues.length; i++) {
    result += xValues[i] * yValues[i];
  }
  return result;
}

/**
 * Sum of squares of array elements
 */
function sumSquared(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i] ** 2;
  }
  return result;
}

debug.log(extrapolateLinear([2, 3], [4, 6], 7)); // 14

/**
 * Solve linear equation
 */
function solveLinearEquation(a, b) {
  return -b / a;
}

debug.log(solveLinearEquation(2, 4)); // -2

/**
 * Solve quadratic equation
 */
function solveQuadraticEquation(a, b, c) {
  let d = b ** 2 - 4 * a * c;
  if (d < 0) return [];
  else if (d === 0) return [-b / (2 * a)];

  let x1 = (-b + Math.sqrt(d)) / (2 * a);
  let x2 = (-b - Math.sqrt(d)) / (2 * a);
  return [x1, x2];
}

debug.log(solveQuadraticEquation(1, 2, 1)); // [-1]

/**
 * Solve cubic equation
 */
function solveCubicEquation(a, b, c, d) {
  let p = (3 * a * c - b ** 2) / (3 * a ** 2);
  let q = (2 * b ** 3 - 9 * a * b * c + 27 * a ** 2 * d) / (27 * a ** 3);
  let D = q ** 2 / 4 + p ** 3 / 27;
  if (D > 0) {
    let u = -q / 2 + Math.sqrt(D);
    let v = -q / 2 - Math.sqrt(D);
    let x1 =
      (u < 0 ? -1 * (-u) ** (1 / 3) : u ** (1 / 3)) +
      (v < 0 ? -1 * (-v) ** (1 / 3) : v ** (1 / 3)) -
      b / (3 * a);
    return [x1];
  } else if (D === 0) {
    let u = -q / 2 + Math.sqrt(D);
    let x1 = (u < 0 ? -1 * (-u) ** (1 / 3) : u ** (1 / 3)) * 2 - b / (3 * a);
    let x2 = -(u < 0 ? -1 * (-u) ** (1 / 3) : u ** (1 / 3)) - b / (3 * a);
    return [x1, x2];
  } else {
    let u = Math.sqrt(-p / 3);
    let v = Math.acos(-q / 2 / u ** 3);
    let x1 = 2 * u * Math.cos(v / 3) - b / (3 * a);
    let x2 = 2 * u * Math.cos((v + 2 * Math.PI) / 3) - b / (3 * a);
    let x3 = 2 * u * Math.cos((v + 4 * Math.PI) / 3) - b / (3 * a);
    return [x1, x2, x3];
  }
}

debug.log(solveCubicEquation(1, 2, 3, 4)); // [-1.0000000000000002]

/**
 * Radian to degree
 */
function radToDeg(rad) {
  return (rad * 180) / Math.PI;
}

debug.log(radToDeg(Math.PI)); // 180

/**
 * Degree to radian
 */
function degToRad(deg) {
  return (deg * Math.PI) / 180;
}

debug.log(degToRad(180)); // 3.141592653589793

/**
 * Calculate distance between two points
 */
function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

debug.log(distance(1, 1, 2, 2)); // 1.4142135623730951

/**
 * Calculate angle between two points on a circle
 */
function c_angle(x1, y1, x2, y2) {
  return Math.atan2(y2 - y1, x2 - x1); // in radians
}

debug.log(c_angle(1, 1, 2, 2)); // 0.7853981633974483

/**
 * Calculate arc length between two points on a circle
 */
function c_arcLength(x1, y1, x2, y2, r) {
  return c_angle(x1, y1, x2, y2) * r;
}

debug.log(c_arcLength(1, 1, 2, 2, 1)); // 0.7853981633974483

/**
 * Cosine of angle in degrees
 */
function cosDeg(deg) {
  return Math.cos(degToRad(deg));
}

debug.log(cosDeg(45)); // 0.7071067811865476

/**
 * Sine of angle in degrees
 */
function sinDeg(deg) {
  return Math.sin(degToRad(deg));
}

debug.log(sinDeg(45)); // 0.7071067811865476

/**
 * Tangent of angle in degrees
 */
function tanDeg(deg) {
  return Math.tan(degToRad(deg));
}

debug.log(tanDeg(45)); // 1

/**
 * Is prime number
 */
function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  let m = Math.sqrt(n);
  for (let i = 3; i <= m; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

debug.log(isPrime(7)); // true

/**
 * Circles intersection
 */
function circlesIntersection(x1, y1, r1, x2, y2, r2) {
  let d = distance(x1, y1, x2, y2);
  if (d > r1 + r2 || d < Math.abs(r1 - r2)) return [];
  let a = (r1 ** 2 - r2 ** 2 + d ** 2) / (2 * d);
  let h = Math.sqrt(r1 ** 2 - a ** 2);
  let x3 = x1 + ((x2 - x1) * a) / d;
  let y3 = y1 + ((y2 - y1) * a) / d;
  let x4 = x3 + ((y2 - y1) * h) / d;
  let y4 = y3 - ((x2 - x1) * h) / d;
  let x5 = x3 - ((y2 - y1) * h) / d;
  let y5 = y3 + ((x2 - x1) * h) / d;
  return [
    [x4, y4],
    [x5, y5],
  ];
}

debug.log(circlesIntersection(1, 1, 1, 2, 2, 1)); // [ [ 1.5, 1.5 ], [ 1.5, 0.5 ] ]

/**
 * Has circles collided
 */
function hasCirclesCollided(x1, y1, r1, x2, y2, r2) {
  return distance(x1, y1, x2, y2) < r1 + r2;
}

debug.log(hasCirclesCollided(1, 1, 1, 2, 2, 1)); // true

/**
 * Has point collided with circle
 */
function hasPointCollidedWithCircle(x1, y1, r1, x2, y2) {
  return distance(x1, y1, x2, y2) < r1;
}

debug.log(hasPointCollidedWithCircle(1, 1, 1, 2, 2)); // true

/**
 * Has point collided with rectangle
 */
function hasPointCollidedWithRectangle(x1, y1, x2, y2, w, h) {
  return x1 >= x2 && x1 <= x2 + w && y1 >= y2 && y1 <= y2 + h;
}

debug.log(hasPointCollidedWithRectangle(1, 1, 2, 2, 1, 1)); // true

/**
 * Has rectangle collided with rectangle
 */
function hasRectanglesCollided(x1, y1, w1, h1, x2, y2, w2, h2) {
  return x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2;
}

debug.log(hasRectanglesCollided(1, 1, 1, 1, 2, 2, 1, 1)); // false

/**
 * Has rectangle collided with circle
 */
function hasRectangleCollidedWithCircle(x1, y1, w1, h1, x2, y2, r2) {
  let dx = Math.abs(x2 - x1 - w1 / 2);
  let dy = Math.abs(y2 - y1 - h1 / 2);
  if (dx > w1 / 2 + r2 || dy > h1 / 2 + r2) return false;
  if (dx <= w1 / 2 || dy <= h1 / 2) return true;
  return dx ** 2 + dy ** 2 <= r2 ** 2;
}

debug.log(hasRectangleCollidedWithCircle(1, 1, 1, 1, 2, 2, 1)); // true

/**
 *  Lines intersection
 */

function linesIntersection(x1, y1, x2, y2, x3, y3, x4, y4) {
  let x = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4);
  let y = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4);
  let d = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
  if (d === 0) return null;
  return [x / d, y / d];
}

debug.log(linesIntersection(1, 1, 2, 2, 2, 1, 1, 2)); // [ 1.5, 1.5 ]

/**
 * Has lines collided
 */
function hasLinesCollided(x1, y1, x2, y2, x3, y3, x4, y4) {
  return linesIntersection(x1, y1, x2, y2, x3, y3, x4, y4) !== null;
}

debug.log(hasLinesCollided(1, 1, 2, 2, 2, 1, 1, 2)); // true

/**
 * Golden number
 */
const GOLDEN_NUMBER = (1 + Math.sqrt(5)) / 2;

debug.log(GOLDEN_NUMBER); // 1.618033988749895

/**
 * Golden ratio
 */
const GOLDEN_RATIO = 1 / GOLDEN_NUMBER;

debug.log(GOLDEN_RATIO); // 0.6180339887498949

const exported = {
  extrapolateLinear,
  solveLinearEquation,
  solveQuadraticEquation,
  solveCubicEquation,
  distance,
  isPrime,
  circlesIntersection,
  hasCirclesCollided,
  hasPointCollidedWithCircle,
  hasPointCollidedWithRectangle,
  hasRectanglesCollided,
  hasRectangleCollidedWithCircle,
  linesIntersection,
  hasLinesCollided,
  GOLDEN_NUMBER,
  GOLDEN_RATIO,
};

function help() {
  console.log(exported);
}

help();

module.exports = exported;
