// var a = 100; // number
var a = 0;
document.write(`Type: ${typeof a} | ${a}<br/>`);

var a = null; // Empty variable
document.write(`Type: ${typeof a} | ${a}<br/>`);

var b; // a contains undefined
// var a = undefined;
document.write(`Type: ${typeof b} | ${b}<br/>`);

var a = 100 * "abc"; // a contains NaN
// var a = NaN;
document.write(`Type: ${typeof a} | ${a}<br/>`);

var a = ""; // Empty string
document.write(`Type: ${typeof a} | ${a}<br/>`);
