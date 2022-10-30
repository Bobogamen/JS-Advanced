describe("Tests", function () {
    describe("Test calcPriceOfFlowers(flower, price, quantity)", () => {
        let expectText = `Invalid input!`;
        let flower;
        let price;
        let quantity;

        it("Invalid input! (string, string, string)", () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers("string", "string", "string"), expectText);
        });

        it("Invalid input! (array, array, array)", () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers([], [], []), expectText);
        });

        it("Invalid input! (object, object, object)", () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers({}, {}, {}), expectText);
        });

        it("Invalid input! (string, number, string)", () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers("six", 10, "ten"), expectText);
        });

        it("Invalid input! (string, string, number)", () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers("eleven", "twelve", 9), expectText);
        });

        it("Invalid input! (string, number, array)", () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers("hello", 2, []), expectText);
        });

        it("Invalid input! (string, number, object)", () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers("Kilo", 33, {}), expectText);
        });

        it("Invalid input! (string, array, number)", () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers("Test", [], 66), expectText);
        });

        it("Invalid input! (string, object, number)", () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers("Chai", {}, 8), expectText);
        });


        it("calcPriceOfFlowers(Chai, 2, 8)", () => {
            flower = "Chai"
            price = 2;
            quantity = 8
            expectText = `You need $${(price * quantity).toFixed(2)} to buy ${flower}!`
            assert.equal(flowerShop.calcPriceOfFlowers(flower, price, quantity), expectText);
        });

        it("calcPriceOfFlowers(Rose, 5, 10)", () => {
            flower = "Rose"
            price = 5;
            quantity = 10;
            expectText = `You need $${(price * quantity).toFixed(2)} to buy ${flower}!`
            assert.equal(flowerShop.calcPriceOfFlowers(flower, price, quantity), expectText);
        });

        it("calcPriceOfFlowers(Lily, 3, 11)", () => {
            flower = "Lily"
            price = 3;
            quantity = 11
            expectText = `You need $${(price * quantity).toFixed(2)} to buy ${flower}!`
            assert.equal(flowerShop.calcPriceOfFlowers(flower, price, quantity), expectText);
        });

        it("calcPriceOfFlowers(Orchid , -2, 6)", () => {
            flower = "Orchid"
            price = -2;
            quantity = 6
            expectText = `You need $${(price * quantity).toFixed(2)} to buy ${flower}!`
            assert.equal(flowerShop.calcPriceOfFlowers(flower, price, quantity), expectText);
        });

        it("calcPriceOfFlowers(Tulip, 3, -10)", () => {
            flower = "Tulip "
            price = 3;
            quantity = -10;
            expectText = `You need $${(price * quantity).toFixed(2)} to buy ${flower}!`
            assert.equal(flowerShop.calcPriceOfFlowers(flower, price, quantity), expectText);
        });

        it("calcPriceOfFlowers(Hyacinth  , -1, -8)", () => {
            flower = "Lily"
            price = -1;
            quantity = -8
            expectText = `You need $${(price * quantity).toFixed(2)} to buy ${flower}!`
            assert.equal(flowerShop.calcPriceOfFlowers(flower, price, quantity), expectText);
        });
    });

    describe("Test checkFlowersAvailable(flower, gardenArr)", () => {
        let expectText = `The Rose are available!`;

        it("Rose", () => {
            assert.equal(flowerShop.checkFlowersAvailable("Rose", ["Rose", "Lily", "Orchid"]), expectText);
        });

        it("Orchid", () => {
            expectText = `The Orchid are available!`;
            assert.equal(flowerShop.checkFlowersAvailable("Orchid", ["Rose", "Lily", "Orchid"]), expectText);
        });

        it("Tulip not found", () => {
            expectText = `The Tulip are sold! You need to purchase more!`;
            assert.equal(flowerShop.checkFlowersAvailable("Tulip", ["Rose", "Lily", "Orchid"]), expectText);
        });

        it("Hyacinth  not found", () => {
            expectText = `The Hyacinth  are sold! You need to purchase more!`;
            assert.equal(flowerShop.checkFlowersAvailable("Hyacinth ", ["Rose", "Lily", "Orchid"]), expectText);
        });
        
    });

    describe("Test sellFlowers(gardenArr, space)", () => {
        let expectText = `Invalid input!`;

        it("Invalid input -> negative index", () => {
            assert.throw(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1), expectText);
        });

        it("Invalid input -> index outside array", () => {
            assert.throw(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 6), expectText);
        });

        it("Rose removed!", () => {
            expectText = ["Lily", "Orchid"].join(" / ");
            assert.equal(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0), expectText);
        });

        it("Lily removed!", () => {
            expectText = ["Rose", "Orchid"].join(" / ");
            assert.equal(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1), expectText);
        });

        it("Orchid removed!", () => {
            expectText = ["Rose", "Lily"].join(" / ");
            assert.equal(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2), expectText);
        });
    });
});