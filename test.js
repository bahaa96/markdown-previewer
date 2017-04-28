let expect = require("expect")

function add(a, b) {
    return a+b
}

function sub(a, b) {
    return a-b
}
console.log("Starting Test ")
let a =3
let b =4
let c = 7
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
}
expect(add(a, b)).toBe(c)
expect(add(a, b)).toBeA("number")
expect(capitalize("ahmed")).toBe("Ahmed")
expect(capitalize("ahmed")).toBeA("string")
console.log("All tests have done ")
