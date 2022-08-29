//1.Fruit

function buyingFruit(name, weight, price,) {

      let money = price * weight / 1000;
      weight = weight / 1000;

      console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${name}.`)
}

// buyingFruit('orange', 2500, 1.80);
// buyingFruit('apple', 1563, 2.35);

//2.Greatest Common Divisor - GCD

function gcdTwoInts(x, y) {
      if ((typeof x !== 'number') || (typeof y !== 'number'))
            return false;
      x = Math.abs(x);
      y = Math.abs(y);
      while (y) {
            let t = y;
            y = x % y;
            x = t;
      }
      console.log(x);
}

// gcdTwoInts(15, 5);
// gcdTwoInts(2154, 458);

//3. Same Numbers

function sameNumbers(int) {
      let intToString = String(int);
      let isSame = true;

      let lastChar = intToString[0];

      for (let i = 0; i < intToString.length; i++) {
            const currentChar = intToString[i];

            if (currentChar !== lastChar) {
                  return console.log(isSame = false);
            } else {
                  lastChar == currentChar;
            }

      }

      console.log(isSame);
}

//sameNumbers(1234);


//4. Previous Day

function previousDay(year, month, day) {

      let date = new Date(year, month - 1, day)

      date.setDate(date.getDate() - 1);

      console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);

}

// previousDay(2016, 9, 30);
// previousDay(2016, 10, 1);
// previousDay(2016, 1, 1);
// previousDay(2016, 3, 1);

//5. Time to walk

function timeToWalk(steps, lengthStep, speed) {

      let distanceInMeters = Number(steps * lengthStep);
      let timeInSeconds = Number(distanceInMeters / (speed / 3.6));
      let breakTime = Math.floor(distanceInMeters / 500);

      let hours = Math.floor(timeInSeconds / 3600);
      let minites = Math.floor(timeInSeconds / 60);
      let seconds = Math.round(timeInSeconds - minites * 60);

      minites = minites + breakTime;


      console.log((hours < 10 ? "0" : "") + hours + ":" +
            (minites < 10 ? "0" : "") + minites + ":" +
            (seconds < 10 ? "0" : "") + seconds);



}

// timeToWalk(4000, 0.60, 5);
// timeToWalk(2564, 0.70, 5.5);

//6. Road Radar

function roadRadar(speed, place) {

      let difference;
      let status;

      switch (place) {
            case "motorway": difference = speed - 130;

                  if (difference < 0) {
                        console.log(`Driving ${speed} km/h in a 130 zone`);
                        break;
                  }

                  if (difference < 20) {
                        status = "speeding"
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - ${status}`);
                        break;
                  } else if (difference < 40) {
                        status = "excessive speeding"
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - ${status}`);
                        break;
                  } else {
                        status = " reckless driving"
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - ${status}`);
                        break;
                  };

            case "interstate": difference = speed - 90;

                  if (difference < 0) {
                        console.log(`Driving ${speed} km/h in a 90 zone`);
                        break;
                  }

                  if (difference < 20) {
                        status = "speeding"
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of 90 - ${status}`);
                        break;
                  } else if (difference < 40) {
                        status = "excessive speeding"
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of 90 - ${status}`);
                        break;
                  } else {
                        status = " reckless driving"
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of 90 - ${status}`);
                        break;
                  };

            case "city": difference = speed - 50;

                  if (difference < 0) {
                        console.log(`Driving ${speed} km/h in a 50 zone`);
                        break;
                  }

                  if (difference < 20) {
                        status = "speeding"
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of 50 - ${status}`);
                        break;
                  } else if (difference < 40) {
                        status = "excessive speeding"
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of 50 - ${status}`);
                        break;
                  } else {
                        status = " reckless driving"
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of 50 - ${status}`);
                        break;
                  };

            case "residential": difference = speed - 20;

                  if (difference < 0) {
                        console.log(`Driving ${speed} km/h in a 20 zone`);
                        break;
                  }

                  if (difference < 20) {
                        status = "speeding"
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of 20 - ${status}`);
                        break;
                  } else if (difference < 40) {
                        status = "excessive speeding"
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of 20 - ${status}`);
                        break;
                  } else {
                        status = " reckless driving"
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of 20 - ${status}`);
                        break;
                  };
      }
}

// roadRadar(40, 'city');
// roadRadar(21, 'residential');
// roadRadar(120, 'interstate');
// roadRadar(200, 'motorway');

//7. Cooking by Numbers

function cookingNumbers(int, ...params) {

      let number = Number(int);

      let chop = x => x / 2;
      let dice = x => Math.sqrt(x);
      let spice = x => x += 1;
      let bake = x => x *= 3;
      let fillet = x => x = x * 0.8;

      for (let i = 0; i < params.length; i++) {
            switch (params[i]) {
                  case 'chop': number = chop(number);
                        console.log(number);
                        break;

                  case 'dice': number = dice(number);
                        console.log(number);
                        break;

                  case 'spice': number = spice(number);
                        console.log(number);
                        break;

                  case 'bake': number = bake(number);
                        console.log(number);
                        break;

                  case 'fillet': number = fillet(number);
                        console.log(number.toFixed(1));
                        break;
            }

      }
}

// cookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// cookingNumbers('9', 'dice', 'spice', 'chop', 'bake','fillet');

//8. Validity Check

function validityCheck([x1, y1, x2, y2]) {

      // let x1 = Number(input[0]);

      // let y1 = Number(input[1]);

      // let x2 = Number(input[2]);

      // let y2 = Number(input[3]);

      result(x1, y1, 0, 0);

      result(x2, y2, 0, 0);

      result(x1, y1, x2, y2);

      // console.log(Number.isInteger(result(x1, y1))

      // ? `{${x1}, ${y1}} to {0, 0} is valid`

      // : `{${x1}, ${y1}} to {0, 0} is invalid`);

      // console.log(Number.isInteger(result(x2, y2))

      // ? `{${x2}, ${y2}} to {0, 0} is valid`

      // : `{${x2}, ${y2}} to {0, 0} is invalid`);

      // console.log(Number.isInteger((x1 - x2), (y1 - y2))

      // ? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`

      // : `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);


      function result(x1, y1, x2, y2) {

            const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

            const validString = Number.isInteger(distance) ? 'valid' : 'invalid';

            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validString}`);



            // return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

      }

}

// validityCheck(3, 0, 0, 4);
// validityCheck(2, 1, 1, 1);

//9. Words Uppercase

function wordsUpperCase(input) {

      let sentence = new Array(input.toUpperCase().
            split(/[\W]+/).
            filter(w => w.length > 0).join(", "));

      sentence.forEach(element => {
            console.log(element);
      });

}

// wordsUpperCase('Hi, how are you?');
// wordsUpperCase('hello');

function solve(text) {

      let result = text.toUpperCase()
            .split(/[\W]+/)
            .filter(w => w.length > 0)
            .join(", ");

      console.log(result);
}

// solve('Hi, how are you?');

function test(input) {

      let words = new Array(input.split(/[\s+]/));

      for (let i = 0; i < words.length; i++) {
            const element = words[i];
            console.log(element.toString());
      }

      
}

test('Hi, how are you?');