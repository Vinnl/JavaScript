console.log('1. Strings!');
strings();
console.log('2. Arrays!');
arrays();
console.log('3. More Javascript');
moreJavascript();

function strings() {
  const myString = 'hello,this,is,a,difficult,to,read,sentence';

  console.log(myString);

  const readableString = myString.replace(/,/g, ' ');

  console.log(readableString);

  const alternateReadableString = myString.split(',').join(' ');

  console.log(readableString);
}

function arrays() {
  const favouriteAnimals = [ 'blowfish', 'capricorn', 'giraffe' ];

  favouriteAnimals.push('turtle');

  console.log(favouriteAnimals);
  
  favouriteAnimals.splice(1, 0, 'meerkat');

  console.log([ 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle' ]);
  console.log(favouriteAnimals);
  console.log('The array has a length of:', favouriteAnimals.length);
  
  favouriteAnimals.splice(3, 1);

  console.log(favouriteAnimals);

  const meerkatIndex = favouriteAnimals.indexOf('meerkat');

  console.log('The item you are looking for is at index:', meerkatIndex);
}

function moreJavascript() {
  function sum3 (first, second, third) {
    return first + second + third;
  }

  function colorCar(colour) {
    return `A ${colour} car`;
  }

  const anObject = {
    wow: 'such object',
  };

  function printNamesAndValues(someObject) {
    console.log(Object.entries(someObject));
  }

  function vehicleType(color, code) {
    const vehicle = (code === 1) ? 'car' : 'motorbike';

    console.log(`A ${color} ${vehicle}`);
  }

  console.log(3 === 3);

  const vehicles = [ 'motorbike', 'car', 'caravan', 'bike', 'skateboard' ];

  function vehicle(color, code, age) {
    const vehicle = vehicles[code - 1];
    const state = (age <= 1) ? 'new' : 'used';

    console.log(`A ${color} ${state} ${vehicle}`);
  }

  vehicle('green', 3, 1);

  let advertisement = `Amazin Joe's Garage, we service ${vehicles[0]}s`;

  for (let i = 1; i < vehicles.length; i++) {
    if (i === (vehicles.length - 1)) {
      advertisement += ` and ${vehicles[i]}s.`;
      continue;
    }

    advertisement += `, ${vehicles[i]}s`;
  }

  console.log(advertisement);

  const emptyObject = {};
  const previousTeachers = {
    teachers: [ 'Jim' ],
    languages: [ 'Javascript' ],
  };

  const x = [ 1, 2, 3 ];
  const y = [ 1, 2, 3 ];
  const z = y;

  console.log('Will be false:', x == y);
  console.log('Will be false:', x === y);
  console.log('Will be false:', x == z);
  console.log('Will be true:', y == z);

  function same(a,b){
		return a.length === b.length
    	&& a.reduce(
      	(equalSoFar, newElement, index) => (equalSoFar && newElement === b[index]),
      	true
      );
  }

  console.log('Will return `string` (which is the type of a type name):', typeof typeof 42);
}
