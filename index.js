var a= 10
var b=5
var n=7
function add(a, b) {
    return a += b
}

function subtract(a, b) {
    return a -= b
}

function multiply(a, b) {
    return a *= b
}

function divide(a, b) {
    return a /= b
}

function inc(n) {
  return ++n
}

function dec(n) {
  return --n
}

function makeInt(n) {
  return (n, 10)
}

function makeInt(n) {
  return ('nonsense!', n)
}

function preserveDecimal(n) {
  return ('2.222', n)
}
