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

      let result = [

      ];

      for (const hero of heroes) {
            let current = {};
            current.name = hero.split(' / ')[0];
            current.level = hero.split(' / ')[1];

            let currentItems = [];
            for (const item of hero.split(', ')[2]) {
                  currentItems.push(item);
            }

            current.items = currentItems

            result.push(current);
      }

      console.log(result);

};

heroicInventory(['Isacc / 25 / Apple, GravityGun',
      'Derek / 12 / BarrelVest, DestructionSword',
      'Hes / 1 / Desolator, Sentinel, Antara'])