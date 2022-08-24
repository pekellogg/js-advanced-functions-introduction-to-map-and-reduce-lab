const { start } = require("repl");

function mapToNegativize(sourceArray) {
  return sourceArray.map(i => i * -1)
}

function mapToNoChange(sourceArray) {
  if (Array.isArray(sourceArray)) {
    return Object.assign([], sourceArray)
  } else {
    return `Object argument is not array.`
  }
}

function mapToDouble(sourceArray) {
  return sourceArray.map(i => i * 2)
}

function mapToSquare(sourceArray) {
  return sourceArray.map(i => i * i)
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  return sourceArray.reduce((startingPoint, currentValue) => startingPoint + currentValue, startingPoint)
}

function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++ ) {
    if (!sourceArray[i]) return false
  }
  return true
}

function reduceToAnyTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++ ) {
    if (sourceArray[i]) return true
  }
  return false
}