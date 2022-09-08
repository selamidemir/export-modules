const { circleArea, circleCircumference } = require('./circle');

const alan = circleArea(5);

console.log("Alan : ", alan.toFixed(2));

const cevre = circleCircumference(5);

console.log("Çevre : ", cevre.toFixed(2));