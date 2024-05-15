var str = "Ali"
console.log(str.toLowerCase( ))
console.log(str.toUpperCase( ))
let titlCase = str.replace(/\b\w/g, c=> c.toUpperCase())
console.log(titlCase)