//1. Echo function

function echo(text) {

      let size = text.length;

      console.log(size)
      console.log(text);
}

//echo('Hello, JavaScript!');
//echo('strings are easy');


//2. String Length
function sumLenght(a, b, c) {
      let total = a.length + b.length + c.length;
      let avg = Math.floor(total / 3);

      console.log(total);
      console.log(avg);
}

//sumLenght('chocolate', 'ice cream', 'cake');
//sumLenght('pasta', '5', '22.3');


//3. Largest Number

function largestNumber(a, b, c) {
      let arr = [a, b, c];

      let largestNumber = a;

      for (const i of arr) {

            if (i > largestNumber) {
                  largestNumber = i;
            }
      }

      console.log(`The largest number is ${largestNumber}.`);
}

//largestNumber(5, -3, 16);
//largestNumber(-3, -5, -22.5);

//4. Circle Area

function circleArea(r) {
      if (typeof r != 'number') {
            console.log(`We can not calculate the circle area, because we receive a ${typeof (r)}.`)
      } else {
            let area = Math.PI * Math.pow(r, 2)
            console.log(area.toFixed(2));
      }


}

//circleArea(5);
//circleArea('name');


//5. Math Operations

function calculate(a, b, operator) {

      let result;

      switch (operator) {
            case '+': result = a + b; break;
            case '-': result = a - b; break;
            case '*': result = a * b; break;
            case '/': result = a / b; break;
            case '%': result = a % b; break;
            case '**': result = a ** b; break;
      }

      console.log(result)
}

//calculate(5, 6, '+');
//calculate(3, 5.5, '*');

//6. Sum of Numbers N…M
function sumNumbersLines(a, b) {

      let start = Number(a);
      let end = Number(b);

      let result = 0;

      for (let i = start; i <= end; i++) {
            result += i;
      }

      console.log(result);
}

//sumNumbersLines('1', '5');
//sumNumbersLines('-8', '20');


//7. Day of Week

function dayOfWeek(name) {

      let result;

      switch (name) {
            case 'Monday': result = 1; break;
            case 'Tuesday': result = 2; break;
            case 'Wednesday': result = 3; break;
            case 'Thursday': result = 4; break;
            case 'Friday': result = 5; break;
            case 'Saturday': result = 6; break;
            case 'Sunday': result = 7; break;

            default: result = 'error';
      }

      console.log(result)
}

//dayOfWeek('Monday');
//dayOfWeek('Someday');


//8. Days in a month

function daysInMonth(month, year) {
      let monthLenght = new Date(year, month, 0).getDate();

      console.log(monthLenght);
}

//daysInMonth(1, 2012);
//daysInMonth(2, 2021);


//9. Square of Stars

function rectangleByStars(size) {

      if (typeof size != "number") {
            size = 5;
      }

      for (let i = 0; i < size; i++) {
            let line = '';
            for (let p = 0; p < size; p++) {
                  line += '* ';
            }
            console.log(line);
      }
}

// rectangleByStars(1);
// rectangleByStars(2);
// rectangleByStars(5);
// rectangleByStars(7);

//10. Aggregate Elements

function aggregateElements(elements) {
      aggregate(elements, 0, (a, b) => a + b);
      aggregate(elements, 0, (a, b) => a + 1 / b);
      aggregate(elements, '', (a, b) => a + b);
      function aggregate(arr, initVal, func) {
            let val = initVal;
            for (let i = 0; i < arr.length; i++)
                  val = func(val, arr[i]);
            console.log(val);
      }
}

// aggregateElements([1, 2, 3]);
// aggregateElements([2, 4, 8, 16]);

