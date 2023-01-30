# js-math-lib
Math library in js
## Install first ⚙️
```bash
npm install js-math-lib
```

## Usage 
```js
const math_lib = require("js-math-lib");

var extrapolated = math_lib.extrapolateLinear([2, 3], [4, 6], 7);

console.log(extrapolated); // 14
```

To view all functions and globals, call the `help` method

```js
math_lib.help(); // log all usable func in the console
```
