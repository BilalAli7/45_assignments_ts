var A = "Ali";
console.log(A.toLowerCase);
console.log(A.toUpperCase);
var titlCase = A.replace(/\b\w/g, function (c) { return c.toUpperCase(); });
console.log(titlCase);
