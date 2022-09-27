//1. Calorie Object 

function calorieObject(input) {

      let result = {};

      for (let i = 0; i < input.length; i += 2) {
            result[input[i]] = Number(input[i + 1]);
      }

      console.log(result);
}

// calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);

//2. Construction Crew

function constructionCrew(worker) {

      let hydratedWorker = worker;

      if (worker.dizziness == false) {
            return worker;
      }

      hydratedWorker.levelOfHydrated += 0.1 * worker.weight * worker.experience;
      hydratedWorker.dizziness = false;

      return hydratedWorker;
}

// console.log(constructionCrew({ weight: 80,
//       experience: 1,
//       levelOfHydrated: 0,
//       dizziness: true }));

// console.log(constructionCrew({weight: 120,
//       experience: 20,
//       levelOfHydrated: 200,
//       dizziness: true}));

// console.log(constructionCrew({ weight: 95,
//       experience: 3,
//       levelOfHydrated: 0,
//       dizziness: false}));


//03. Car Factory

function carFactory(order) {

      let car = {};

      car.model = order.model;

      let engineType = {
            "Small engine": { power: 90, volume: 1800 },
            "Normal engine": { power: 120, volume: 2400 },
            "Monster engine": { power: 200, volume: 3500 }
      }

      let carriageType = {
            hatchback: function (color) {
                  return {
                        type: "hatchback",
                        color: color
                  }
            },
            coupe: function (color) {
                  return {
                        type: "coupe",
                        color: color
                  }
            }
      }

      if (order.power <= 90) {
            car.engine = engineType["Small engine"];
      } else if (order.power <= 120) {
            car.engine = engineType["Normal engine"];
      } else if (order.power <= 200) {
            car.engine = engineType["Monster engine"];
      }

      car["carriage"] = carriageType[order.carriage](order.color);

      let size = order.wheelsize % 2 !== 0 ? order.wheelsize : order.wheelsize - 1;
      car.wheels = new Array(4).fill(size);

      return car;
};

// console.log(carFactory({
//       model: 'VW Golf II',
//       power: 90,
//       color: 'blue',
//       carriage: 'hatchback',
//       wheelsize: 14
// }));

// carFactory({
//       model: 'Opel Vectra',
//       power: 110,
//       color: 'grey',
//       carriage: 'coupe',
//       wheelsize: 17
// });


//04. Heroic Inventory 

function heroicInventory(heroes) {

      let result = [];

      for (const hero of heroes) {
            let [name, level, items] = hero.split(' / ');
            level = Number(level);
            items = items ? items.split(', ') : [];

            result.push({ name, level, items })
      }
      console.log(JSON.stringify(result));
};

// heroicInventory(['Isacc / 25 / Apple, GravityGun',
//       'Derek / 12 / BarrelVest, DestructionSword',
//       'Hes / 1 / Desolator, Sentinel, Antara']);

// heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);


//5. Lowest Prices in Cities

function lowestPriceInCities(input) {

      let result = {};

      for (const element of input) {
            let [town, product, price] = element.split(' | ');
            price = Number(price);

            if (!result.hasOwnProperty(product)) {
                  result[product] = {};
                  result[product][town] = price;
            } else {
                  if (price < Object.values(result[product])) {
                        let oldTown = Object.keys(result[product]);
                        result[product][town] = price;

                        delete result[product][oldTown];
                  }
            }
      };

      // console.log(Object.entries(result));

      for (const element in result) {
            console.log(`${element} -> ${Object.values(result[element])} (${Object.keys(result[element])})`);
      }
}


// lowestPriceInCities(['Sample Town | Sample Product | 1000',
//       'Sample Town | Orange | 2',
//       'Sample Town | Peach | 1',
//       'Sofia | Orange | 3',
//       'Sofia | Peach | 2',
//       'New York | Sample Product | 1000.1',
//       'New York | Burger | 10']);

// lowestPriceInCities(['Sofia City | Audi | 100000',
//       'Sofia City | BMW | 100000',
//       'Sofia City | Mitsubishi | 10000',
//       'Sofia City | Mercedes | 10000',
//       'Sofia City | NoOffenseToCarLovers | 0',
//       'Mexico City | Audi | 1000',
//       'Mexico City | BMW | 99999',
//       'Mexico City | Mitsubishi | 10000',
//       'New York City | Mitsubishi | 1000',
//       'Washington City | Mercedes | 1000']);


//6. Store Catalogue 

function storeCatalogue(input) {

      let result = {};

      for (const element of input) {
            let [product, price] = element.split(' : ');
            price = Number(price);

            let letter = product[0];

            if (!result.hasOwnProperty(letter)) {
                  result[letter] = {};
            }
            
            result[letter][product] = price;
      }

      let sortedLetters = Object.keys(result).sort((a, b) => a.localeCompare(b));

      for (const letter of sortedLetters) {
            console.log(letter);
            let sortedProducts = Object.keys(result[letter]).sort((a,b) => a.localeCompare(b));
            
            for (const product of sortedProducts) {
                  console.log(`  ${product}: ${result[letter][product]}`);
            }
      }
}

// storeCatalogue(['Appricot : 20.4',
//       'Fridge : 1500',
//       'TV : 1499',
//       'Deodorant : 10',
//       'Boiler : 300',
//       'Apple : 1.25',
//       'Anti-Bug Spray : 15',
//       'T-Shirt : 10']);

// storeCatalogue(['Banana : 2',
// 'Rubic \'s Cube : 5',
// 'Raspberry P : 4999',
// 'Rolex : 100000',
// 'Rollon : 10',
// 'Rali Car : 2000000',
// 'Pesho : 0.000001',
// 'Barrel : 10']);


//7. Towns ot JSON

function townsToJSON(input) {

      let result = [];

      for (let i = 1; i < input.length; i++) {
            let towns = {};
            let [town, latitude, longitude] = input[i].split('|').map(e => e.trim()).filter(e => e.length > 0);

            latitude = Number(Number(latitude).toFixed(2));
            longitude = Number(Number(longitude).toFixed(2));

            towns['Town'] = town;
            towns['Latitude'] = latitude;
            towns['Longitude'] = longitude;

            result.push(towns);
            
      }
      console.log(JSON.stringify(result));
};

// townsToJSON(['| Town | Latitude | Longitude |',
// '| Sofia | 42.696552 | 23.32601 |',
// '| Beijing | 39.913818 | 116.363625 |']
// );

// townsToJSON(['| Town | Latitude | Longitude |',
// '| Veliko Turnovo | 43.0757 | 25.6172 |',
// '| Monatevideo | 34.50 | 56.11 |']
// );


//7. Rectangle

function rectangle(width, height, color) {

      return {
            width: width,
            height: height,
            color: color.charAt(0).toUpperCase() + color.slice(1),
            calcArea() {return width * height;}
      }
};

// let rect = rectangle(4, 5, 'red');
// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.color);
// console.log(rect.calcArea());


//8. Heroes

function solve() {

      const canCast = (state) => ({
            cast: (spell) => {
                  console.log(`${state.name} cast ${spell}`);
                  state.mana--;
            }
      });

      const canFight = (state) => ({
            fight: () => {
                  console.log(`${state.name} slashes at the foe!`);
                  state.stamina--;
            }
      });

      const fighter = (name) => {
            let state = {
                  name,
                  health: 100,
                  stamina: 100
            }

            return Object.assign(state, canFight(state));
      }

      const mage = (name) => {
            let state = {
                  name,
                  health: 100,
                  mana: 100
            }

            return Object.assign(state, canCast(state));
      }

      return {mage: mage, fighter: fighter}
};





let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);

