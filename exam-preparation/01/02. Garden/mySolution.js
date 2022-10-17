class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw Error("Not enough space in the garden.");
        }

        let currnetPlant = {
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        }

        this.plants.push(currnetPlant);
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        if (quantity <= 0) {
            throw Error(`The quantity cannot be zero or negative.`);
        }

        let currnetPlant = this.plants.find(plant => plant.plantName === plantName);

        if (!currnetPlant) {
            throw Error(`There is no ${plantName} in the garden.`);
        }

        if (currnetPlant.ripe) {
            throw Error(`The ${plantName} is already ripe.`)
        }

        currnetPlant.ripe = true;
        currnetPlant.quantity = quantity;

        let returnMessage = quantity === 1 ?
            `${quantity} ${plantName} has successfully ripened.` :
            `${quantity} ${plantName}s have successfully ripened.`;

        return returnMessage;
    }

    harvestPlant(plantName) {
        let currnetPlant = this.plants.find(plant => plant.plantName === plantName);

        if (!currnetPlant) {
            throw Error(`There is no ${plantName} in the garden.`);
        }

        if (!currnetPlant.ripe) {
            throw Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }

        this.plants = this.plants.filter(plant => plant.plantName !== plantName);

        this.storage.push({
            plantName: currnetPlant.plantName,
            quantity: currnetPlant.quantity
        });

        this.spaceAvailable += currnetPlant.spaceRequired;

        return `The ${plantName} has been successfully harvested.`;

    }

    generateReport() {

        let message = "";
        message += `The garden has ${this.spaceAvailable} free space left.\n`;
        message += `Plants in the garden: `;

        let plantsInGarden = [];

        this.plants.sort((a, b) =>
            a.plantName.localeCompare(b.plantName)).
            forEach(plant => plantsInGarden.push(plant.plantName));

        message += `${plantsInGarden.join(', ')}\n`;

        let printStorage = [];

        this.storage.
            forEach(plant => printStorage.push(`${plant.plantName} (${plant.quantity})`));


        message += this.storage.length === 0 ?
            `Plants in storage: The storage is empty.` :
            `Plants in storage: ${printStorage.join(", ")}`;

        return message;
    }
}

const myGarden = new Garden(250)

console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());

