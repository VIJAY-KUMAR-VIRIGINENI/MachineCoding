export default function makeCounter(initialValue = 0) {
  return function () {
    let returnValue = initialValue;
    initialValue++;

    return returnValue;
  };
}

const counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 0
console.log(counter()); // 0
console.log(counter()); // 0
