// circle
const circle = (color) => `
<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
  <circle r="45" cx="50" cy="50" fill="red" />
</svg>`;


// square
const square = (color) => `
<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="blue" />
</svg>`;

// triangle
const triangle = (color) => `
<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,0 100,100 0,100" fill="green" />
  </svg>`;
  
  
//   <polygon points="50 15, 100 100, 0 100"/>

module.exports = { circle, square, triangle };