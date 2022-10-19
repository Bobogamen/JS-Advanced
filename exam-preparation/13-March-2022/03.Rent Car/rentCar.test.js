describe("Tests", function () {
    describe("Test searchCar(shop, model)", () => {
        let expectText = `Invalid input!`;

        it("Invalid input! (number, number)", () => {
            assert.throw(() => rentCar.searchCar(1, 1), expectText);
        });

        it("Invalid input! (number, string)", () => {
            assert.throw(() => rentCar.searchCar(2, "one"), expectText);
        });

        it("Invalid input! (number, object)", () => {
            assert.throw(() => rentCar.searchCar(3, {}), expectText);
        });

        it("Invalid input! (number, array)", () => {
            assert.throw(() => rentCar.searchCar(11, []), expectText);
        });

        it("Invalid input! (array, number)", () => {
            assert.throw(() => rentCar.searchCar([], 9), expectText);
        });

        it("Invalid input! (array, object)", () => {
            assert.throw(() => rentCar.searchCar([], {}), expectText);
        });

        it("Invalid input! (array, array)", () => {
            assert.throw(() => rentCar.searchCar([], []), expectText);
        });

        it("Model is not in catalogue", () => {
            expectText = `There are no such models in the catalog!`
            assert.throw(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "Seat"), expectText);
        });

        it("Model -> BMW", () => {
            expectText = `There is 1 car of model BMW in the catalog!`
            assert.equal(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "BMW"), expectText);
        });

        it("Model -> Volkswagen", () => {
            expectText = `There is 3 car of model Volkswagen in the catalog!`
            assert.equal(rentCar.
                searchCar(["Volkswagen", "Volkswagen", "Volkswagen", "BMW", "Audi"], "Volkswagen"),
                expectText);
        });

        it("Model -> BMW", () => {
            expectText = `There is 5 car of model Audi in the catalog!`
            assert.equal(rentCar.
                searchCar(["Audi", "Volkswagen", "Audi", "Audi", "BMW", "Audi", "Audi"],
                    "Audi"), expectText);
        });
    });

    describe("Test calculatePriceOfCar(model, days) ", () => {
        let expectText = `Invalid input!`;

        it("Invalid input! (number, string)", () => {
            assert.throw(() => rentCar.calculatePriceOfCar(1, 'nine'), expectText);
        });

        it("Invalid input! (number, array)", () => {
            assert.throw(() => rentCar.calculatePriceOfCar(3, []), expectText);
        });

        it("Invalid input! (number, object)", () => {
            assert.throw(() => rentCar.calculatePriceOfCar(5, {}), expectText);
        });

        it("Invalid input! (string, array)", () => {
            assert.throw(() => rentCar.calculatePriceOfCar("Audi", []), expectText);
        });

        it("Invalid input! (string, object)", () => {
            assert.throw(() => rentCar.calculatePriceOfCar("Volkswagen", {}), expectText);
        });

        it("No such model in the catalog!", () => {
            expectText = `No such model in the catalog!`;
            assert.throw(() => rentCar.calculatePriceOfCar("Seat", 10), expectText);
        });

        it("Volkwagen for 10 day", () => {
            expectText = "You choose Volkswagen and it will cost $200!";
            assert.equal(rentCar.calculatePriceOfCar("Volkswagen", 10), expectText);
        });

        it("Mercedes for 6 day", () => {
            expectText = "You choose Mercedes and it will cost $300!";
            assert.equal(rentCar.calculatePriceOfCar("Mercedes", 6), expectText);
        });

        it("Toyota for 7 day", () => {
            expectText = "You choose Toyota and it will cost $280!";
            assert.equal(rentCar.calculatePriceOfCar("Toyota", 7), expectText);
        });
        
    });

    describe("Test checkBudget(costPerDay, days, budget)", () => {
        let expectText = `Invalid input!`;

        //string

        it("Invalid input (string, string, string)", () => {
            assert.throw(() => rentCar.checkBudget("one", "ten", "three"), expectText);
        });

        it("Invalid input (string, array, string)", () => {
            assert.throw(() => rentCar.checkBudget("two", [], "eleven"), expectText);
        });

        it("Invalid input (string, string, array)", () => {
            assert.throw(() => rentCar.checkBudget("pop", "six", []), expectText);
        });

        it("Invalid input (array, string, array)", () => {
            assert.throw(() => rentCar.checkBudget([], "six", []), expectText);
        });

        it("Invalid input (array, array, string)", () => {
            assert.throw(() => rentCar.checkBudget([], [], "eight"), expectText);
        });

        it("Invalid input (array, string, array)", () => {
            assert.throw(() => rentCar.checkBudget([], "nine", []), expectText);
        });

        //array

        it("Invalid input (array, array, array)", () => {
            assert.throw(() => rentCar.checkBudget([], [], []), expectText);
        });

        it("Invalid input (array, object, object)", () => {
            assert.throw(() => rentCar.checkBudget([], {}, {}), expectText);
        });

        it("Invalid input (array, object, string)", () => {
            assert.throw(() => rentCar.checkBudget([], {}, "hello"), expectText);
        });

        it("Invalid input (array, object, array)", () => {
            assert.throw(() => rentCar.checkBudget([], {}, []), expectText);
        });

        it("Invalid input (array, array, object)", () => {
            assert.throw(() => rentCar.checkBudget([], [], {}), expectText);
        });

        //The is more combinations...
        
        it("Budget is enough", () => {
            expectText = "You rent a car!";
            assert.equal(rentCar.checkBudget(10, 5, 60), expectText);
        });

        it("Budget is equal)", () => {
            expectText = "You rent a car!";
            assert.equal(rentCar.checkBudget(6, 10, 60), expectText);
        });

        it("Budget is less)", () => {
            expectText = 'You need a bigger budget!';
            assert.equal(rentCar.checkBudget(16, 5, 30), expectText);
        });
    });
});