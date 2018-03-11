exercise3();

function exercise1() {
  function foo(func) {
    func();
  }
  function bar() {
    console.log("Hello, I am bar!");
  }
  foo(bar);
}

function exercise2() {
  function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const values = [];
    for (let i = startIndex; i <= stopIndex; i++) {
      values.push(i);
    }

    values.forEach(val => {
      if (val % 3 === 0) {
        threeCallback();
      }
      if (val % 5 === 0) {
        fiveCallback();
      }
    });
  }

  const sayThree = () => console.log('sayThree');
  const sayFive = () => console.log('sayFive');

  threeFive(10, 15, sayThree, sayFive);
}

function exercise3() {
  console.log(`"${repeatDo('thrice', 3)}"`);
  console.log(`"${repeatDo('never', -3)}"`);

  function repeatFor(string, num) {
    let output = '';
    for(let i = 0; i < num; i++){
      output += string;
    }

    return output;
  }

  function repeatWhile(string, num) {
    let output = '';
    let i = 0;
    while (i < num) { output += string; i++; }

    return output;
  }

  function repeatDo(string, num) {
    let output = '';
    let i = 0;
    do {
      if (i >= num) { return output; }

      output += string;
      i++;
    } while(true);
  }
}
