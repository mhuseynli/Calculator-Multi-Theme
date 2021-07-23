var calcDisplay = document.getElementById("calc-display")
var equal = document.getElementById("equal")
var del = document.getElementById("delete")
var reset = document.getElementById("reset")
var numbers = document.querySelectorAll(".num")
var operations = document.querySelectorAll(".operation")
var process = null

var a = null

calcDisplay.addEventListener("keypress", (e) => {
  e.preventDefault()
  return false
})

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (calcDisplay.value == 0) {
      calcDisplay.value = number.value
    } else {
      calcDisplay.value += number.value
    }
  })
})

operations.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (process === null) {
      process = operation.value
      a = calcDisplay.value
      calcDisplay.value = 0
    } else {
      console.log("Operation already defined")
    }
  })
})

equal.addEventListener("click", (e) => {
  if (process != null) {
    if (process == "+") {
      calcDisplay.value = parseFloat(a) + parseFloat(calcDisplay.value)
    } else if (process == "-") {
      calcDisplay.value = parseFloat(a) - parseFloat(calcDisplay.value)
    } else if (process == "/") {
      calcDisplay.value = parseFloat(a) / parseFloat(calcDisplay.value)
      if (calcDisplay.value == Infinity) {
        calcDisplay.value = "Cannot divide by zero"
      }
    } else if (process == "*") {
      calcDisplay.value = parseFloat(a) * parseFloat(calcDisplay.value)
    }
  }
  process = null
})

del.addEventListener("click", (e) => {
  if (calcDisplay.value == "Cannot divide by zero") {
    calcDisplay.value = 0
  } else {
    calcDisplay.value = calcDisplay.value.slice(0, -1)
  }
})

reset.addEventListener("click", (e) => {
  calcDisplay.value = 0
  process = null
})
