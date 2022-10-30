class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        for (const veg of vegetables) {
            let [type, quantity, price] = veg.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            let currentVeg = this.availableProducts.find(v => v.type === type);

            if (!currentVeg) {
                this.availableProducts.push({
                    type,
                    quantity: quantity,
                    price: price
                })
            } else {
                currentVeg.quantity += quantity;

                if (price > currentVeg.price) {
                    currentVeg.price = price;
                }
            }
        }

        let message = [];

        this.availableProducts.forEach(pr => message.push(pr.type));

        return `Successfully added ${message.join(', ')}`;
    };

    buyingVegetables(selectedProducts) {
        let bill = 0.00;

        selectedProducts.forEach(product => {
            let [type, quantity] = product.split(" ");
            quantity = Number(quantity);

            let currentVeg = this.availableProducts.find(v => v.type === type);

            if (!currentVeg) {
                throw new Error(`${type} is not available in the store, your current bill is $${bill.toFixed(2)}.`)
            } else if (quantity > currentVeg.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${bill.toFixed(2)}.`)
            }

            let priceForCurrentProduct = quantity * currentVeg.price;
            bill += priceForCurrentProduct;

            currentVeg.quantity -= quantity;
        });

        return `Great choice! You must pay the following amount $${bill.toFixed(2)}.`
    };

    rottingVegetable(type, quantity) {
        let currentVeg = this.availableProducts.find(v => v.type === type);

        if (!currentVeg) {
            throw new Error(`${type} is not available in the store.`)
        }

        if (quantity > currentVeg.quantity) {
            currentVeg.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }

        currentVeg.quantity -= quantity;

        return `Some quantity of the ${type} has been removed.`
    };

    revision() {
        let message = `Available vegetables:\n`;

        this.availableProducts.
            sort((a, b) => a.price - b.price).
            forEach(pr => {
                message += `${pr.type}-${pr.quantity}-$${pr.price}\n`;
            });

        message += `The owner of the store is ${this.owner}, and the location is ${this.location}.`

        return message;
    };
};

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");

console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8",
    "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision())

