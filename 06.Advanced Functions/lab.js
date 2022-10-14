//1. Area and Volume Calculator

function solve(area, vol, input) {
      return JSON.parse(input).map(entry => {
            return {
                  area: area.call(entry),
                  volune: vol.call(entry)
            }
      });
};

let area = function area() {
      return Math.abs(this.x * this.y);
}

let vol = function vol() {
      return Math.abs(this.x * this.y * this.z);
}

// let result = solve(area, vol, `[
//       {"x":"1","y":"2","z":"10"},
//       {"x":"7","y":"7","z":"10"},
//       {"x":"5","y":"2","z":"10"}
//       ]`);

// console.log(JSON.stringify(result));


//2. Add

function result(num) {
      return function newNum (newNum) {
            return newNum += num;
      }
}

// let add5 = result(5);
// console.log(add5(2));
// console.log(add5(3));

// 03. Currency Format 

function createFormatter(separator, symbol, symbolFirst, formatter) {
      return formatter.bind(this, separator, symbol, symbolFirst);
}


// 04. Filter Employees

function solve(input, chriteria) {
      let data = JSON.parse(input);
      let[property, value] = chriteria.split('-');
      return data.filter(x => x[property] == value)
      .map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
      .forEach(x => console.log(x));
  }

solve(`[{
      "id": "1",
      "first_name": "Kaylee",
      "last_name": "Johnson",
      "email": "k0@cnn.com",
      "gender": "Female"
    }, {
      "id": "2",
      "first_name": "Kizzee",
      "last_name": "Johnson",
      "email": "kjost1@forbes.com",
      "gender": "Female"
    }, {
      "id": "3",
      "first_name": "Evanne",
      "last_name": "Maldin",
      "email": "emaldin2@hostgator.com",
      "gender": "Male"
    }, {
      "id": "4",
      "first_name": "Evanne",
      "last_name": "Johnson",
      "email": "ev2@hostgator.com",
      "gender": "Male"
    }]`,
   'all');


//05. Command Processor

function createrCommander() {
      let content = '';

      return {
            append: (str) => content += str,
            removeStart: (index) => content = content.substring(index),
            removeEnd: (index) => content = content.substring(0, content.length - index),
            print: () => console.log(content)
      }
}




