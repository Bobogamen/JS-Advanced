//1. City Record

function cityData(name, population, treasury) {

    const result = {
        name: name,
        population: population,
        treasury: treasury
    }

    return result;
}

// console.log(cityData('Tortuga',7000,15000));
// console.log(cityData('Santo Domingo',12000,23500));


//2. Town Population

function cityPopulation(input) {

    const city = {};

    for (const town of input) {
        const tokens = town.split(' <-> ');
        const name = tokens[0];
        let pop = Number(tokens[1]);

        if (city[name] != undefined) {
            pop += city[name];
        }

        city[name] = pop;


        // if (city[name] == undefined) {
        //     city[name] = pop;
        // } else {
        //     city[name] += pop;
        // }
    }

    for (const key in city) {
        console.log(key + ' : ' + city[key]);
    }
}

// cityPopulation(['Sofia <-> 1200000','Montana <-> 20000','New York <-> 10000000','Washington <-> 2345000','Las Vegas <-> 1000000']);
// cityPopulation(['Istanbul <-> 100000','Honk Kong <-> 2100004','Jerusalem <-> 2352344','Mexico City <-> 23401925','Istanbul <-> 1000']);


//3. City taxes

function cityTaxes(name, population, treasury) {

    const result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },

        applyGrowth(percent) {
            this.population += Math.floor(this.population * percent / 100);
        },

        applyRecession(percent) {
            this.treasury -= Math.floor(this.treasury * percent / 100);
        }
    }

    return result;
}


// const city = cityTaxes('Tortuga',7000,15000);
// city.collectTaxes();
// console.log(city.treasury);
// city.applyGrowth(5);
// console.log(city.population);
// city.applyRecession(9);
// console.log(city.treasury)


//5. Object Factory

