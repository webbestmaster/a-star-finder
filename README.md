# a-star-finder
Generic synchronous/asynchronous A* search algorithm.

### How to use

```javascript
// sync version
const {getPath} = require('a-star-finder');

const map = [
    '··S·###···',   // S and E - Start and End, not required, here is for example only
    '····#·····',   // · - available to across square, not required, here is for example only
    '····#E##··',   // # - NOT AVAILABLE to across square, REQUIRED
    '····###···',
    '··········'
];

const start = [2, 0]; // x and y coordinates, start of path
const end = [5, 2]; // x and y coordinates, end of path
const path = getPath(map, start, end);

console.log(path); // array of square's coordinates [start, [3, 0], [3, 1], ..., [6, 1], [5, 1], end]

// getPath support options
getPath(map, start, end, {noPath: '#'}); // noPath will used instead of default not across square


// async version
const {getPathAsync} = require('a-star-finder');

// getPathAsync support options: getPathAsync(map, start, end, callback, options)
getPathAsync(map, start, end, path => {
    // here your path
    console.log(path);
});
```

If end point is unreachable, return null.
