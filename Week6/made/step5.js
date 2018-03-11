bonus();

function exercise1() {
  function createBase(addition) {
    const adder = base => base + addition;
    return adder;
  }

  const addSix = createBase(6);
  console.log('16? ', addSix(10));
  console.log('27? ', addSix(21));
}

function bonus() {
  function removeDuplicates(arr) {
    const uniqueArr = arr.reduce((soFar, val) => {
      if (soFar.indexOf(val) === -1) {
        soFar.push(val);
      }

      return soFar;
    }, []);

    return uniqueArr;
  }

  console.log(removeDuplicates(['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c']), ['a', 'b','c','d','e','f']);
}
