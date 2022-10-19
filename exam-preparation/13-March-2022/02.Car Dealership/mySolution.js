class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model === "" || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error("Invalid input!");
        }

        let car = {
            model,
            horsepower,
            price,
            mileage
        }

        this.availableCars.push(car);

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        let foundedCar = this.availableCars.find(car => car.model === model);

        if (foundedCar == undefined) {
            throw new Error(`${model} was not found!`);
        }

        let carMileage = foundedCar.mileage;
        let carHorsepower = foundedCar.horsepower;
        let carPrice = foundedCar.price;


        if (carMileage > desiredMileage && carMileage - desiredMileage <= 40000) {
            carPrice = carPrice * 0.95;
        } else if (carMileage - desiredMileage > 40000) {
            carPrice = carPrice * 0.9;
        }

        this.soldCars.push({
            model,
            horsepower: carHorsepower,
            price: carPrice
        });

        this.availableCars = this.availableCars.filter(car => car.model != model);
        this.totalIncome += Math.round(carPrice);

        return `${model} was sold for ${carPrice.toFixed(2)}$`;
    }

    currentCar() {
        if (this.availableCars.length == 0) {
            return `There are no available cars`;
        }

        let message = ["-Available cars:"];

        this.availableCars.forEach(car =>
            message.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`));

        return message.join("\n");
    }

    salesReport(criteria) {
        let report = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`];
        report.push(`-${this.soldCars.length} cars sold:`)

        if (criteria == "horsepower") {
            this.soldCars = this.soldCars.
                sort((a, b) => b.horsepower - a.horsepower);

        } else if (criteria == "model") {
            this.soldCars = this.soldCars.
                sort((a, b) => a.model.localeCompare(b.model));
        } else {
            throw new Error(`Invalid criteria!`);
        }

        this.soldCars.
            forEach(car =>
                report.push(`---${car.model} - ${car.horsepower} HP - ${car.price.toFixed(2)}$`));

        return report.join("\n");
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));





