describe("Tests", function () {
    describe("Test isItExpensive(issue)", () => {
        let expectText = `The issue with the car is more severe and it will cost more money`;

        it("Engine", () => {
            assert.equal(carService.isItExpensive("Engine"), expectText);
        });

        it("Transmission", () => {
            assert.equal(carService.isItExpensive("Transmission"), expectText);
        });

        it("Lights", () => {
            expectText = `The overall price will be a bit cheaper`;
            assert.equal(carService.isItExpensive("Lights"), expectText);
        });

        it("Left tire", () => {
            expectText = `The overall price will be a bit cheaper`;
            assert.equal(carService.isItExpensive("Left tire"), expectText);
        });

    });

    describe("Test discount(numberOfParts, totalPrice)", () => {
        let expectText = `Invalid input`;

        it("Invalid input (string, string)", () => {
            assert.throw(() => carService.discount("one", "ten"), expectText);
        });

        it("Invalid input (array, array)", () => {
            assert.throw(() => carService.discount([], []), expectText);
        });

        it("Invalid input (object, object)", () => {
            assert.throw(() => carService.discount({}, {}), expectText);
        });

        it("Invalid input (number, string)", () => {
            assert.throw(() => carService.discount(10, "string"), expectText);
        });

        it("Invalid input (string, number)", () => {
            assert.throw(() => carService.discount("eleven", 9), expectText);
        });

        it("Invalid input (array, number)", () => {
            assert.throw(() => carService.discount([], 8), expectText);
        });

        it("Invalid input (number, array)", () => {
            assert.throw(() => carService.discount(23, []), expectText);
        });

        it("Invalid input (object, number)", () => {
            assert.throw(() => carService.discount({}, 16), expectText);
        });

        it("Invalid input (number, object)", () => {
            assert.throw(() => carService.discount(17, {}), expectText);
        });

        it("numberOfParts = 0", () => {
            expectText = `You cannot apply a discount`;
            assert.equal(carService.discount(0, 11), expectText);
        });

        it("numberOfParts = 1", () => {
            expectText = `You cannot apply a discount`;
            assert.equal(carService.discount(1, 18), expectText);
        });

        it("numberOfParts = 2", () => {
            expectText = `You cannot apply a discount`;
            assert.equal(carService.discount(2, 15), expectText);
        });

        it("numberOfParts = 3", () => {
            expectText = `Discount applied! You saved ${(15 / 100) * 20}$`;
            assert.equal(carService.discount(3, 20), expectText);
        });

        it("numberOfParts = 4", () => {
            expectText = `Discount applied! You saved ${(15 / 100) * 30}$`;
            assert.equal(carService.discount(4, 30), expectText);
        });

        it("numberOfParts = 5", () => {
            expectText = `Discount applied! You saved ${(15 / 100) * 42}$`;
            assert.equal(carService.discount(5, 42), expectText);
        });

        it("numberOfParts = 6", () => {
            expectText = `Discount applied! You saved ${(15 / 100) * 58}$`;
            assert.equal(carService.discount(6, 58), expectText);
        });

        it("numberOfParts = 7", () => {
            expectText = `Discount applied! You saved ${(15 / 100) * 76}$`;
            assert.equal(carService.discount(7, 76), expectText);
        });

        it("numberOfParts > 7 (10)", () => {
            expectText = `Discount applied! You saved ${(30 / 100) * 108}$`;
            assert.equal(carService.discount(10, 108), expectText);
        });

        it("numberOfParts > 7 (22)", () => {
            expectText = `Discount applied! You saved ${(30 / 100) * 149}$`;
            assert.equal(carService.discount(22, 149), expectText);
        });
    });

    describe("Test partsToBuy(partsCatalog, neededParts)", () => {
        let expectText = `Invalid input`;

        it("Invalid input (number, number)", () => {
            assert.throw(() => carService.partsToBuy(1, 1), expectText);
        });

        it("Invalid input (number, object)", () => {
            assert.throw(() => carService.partsToBuy(6, {}), expectText);
        });

        it("Invalid input (number, string)", () => {
            assert.throw(() => carService.partsToBuy(9, "nine"), expectText);
        });

        it("Invalid input (number, array)", () => {
            assert.throw(() => carService.partsToBuy(55, []), expectText);
        });

        it("Invalid input (object, object)", () => {
            assert.throw(() => carService.partsToBuy({}, {}), expectText);
        });

        it("Invalid input (object, number)", () => {
            assert.throw(() => carService.partsToBuy({}, 5), expectText);
        });

        it("Invalid input (object, string)", () => {
            assert.throw(() => carService.partsToBuy({}, "six"), expectText);
        });

        it("Invalid input (object, array)", () => {
            assert.throw(() => carService.partsToBuy({}, []), expectText);
        });

        it("Invalid input (string, string)", () => {
            assert.throw(() => carService.partsToBuy("hello", "test"), expectText);
        });

        it("Invalid input (string, number)", () => {
            assert.throw(() => carService.partsToBuy("hello", 11), expectText);
        });

        it("Invalid input (string, object)", () => {
            assert.throw(() => carService.partsToBuy("hello", {}), expectText);
        });

        it("Invalid input (string, array)", () => {
            assert.throw(() => carService.partsToBuy("hello", []), expectText);
        });

        it("Invalid input (array, number)", () => {
            assert.throw(() => carService.partsToBuy([], 66), expectText);
        });

        it("Invalid input (array, object)", () => {
            assert.throw(() => carService.partsToBuy([], {}), expectText);
        });

        it("Invalid input (array, string)", () => {
            assert.throw(() => carService.partsToBuy([], "input"), expectText);
        });

        it("partsCatalog is empty", () => {
            expectText = 0;
            assert.equal(carService.partsToBuy([], ["blowoff valve", "injectors"]), expectText);
        });

        it("totalPrice = 145", () => {
            expectText = 145;
            assert.equal(carService.partsToBuy(
                [{ part: "blowoff valve", price: 145 },
                { part: "coil springs", price: 230 },
                { part: "pressure sensor", price: 80 }],
                ["blowoff valve", "injectors"]), expectText);
        });

        it("totalPrice = 225", () => {
            expectText = 145 + 80;
            assert.equal(carService.partsToBuy(
                [{ part: "blowoff valve", price: 145 },
                { part: "coil springs", price: 230 },
                { part: "pressure sensor", price: 80 }],
                ["blowoff valve", "injectors", "pressure sensor"]), expectText);
        });

        it("totalPrice = 310", () => {
            expectText = 230 + 80;
            assert.equal(carService.partsToBuy(
                [{ part: "blowoff valve", price: 145 },
                { part: "coil springs", price: 230 },
                { part: "pressure sensor", price: 80 }],
                ["coil springs", "injectors", "pressure sensor"]), expectText);
        });

        it("totalPrice = 645", () => {
            expectText = 145 + 230 + 190 + 80;
            assert.equal(carService.partsToBuy(
                [{ part: "blowoff valve", price: 145 },
                { part: "coil springs", price: 230 },
                { part: "injectors", price: 190 },
                { part: "pressure sensor", price: 80 }],
                ["blowoff valve", "coil springs", "injectors", "pressure sensor"]), expectText);
        });
    });
});