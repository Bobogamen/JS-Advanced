describe("Tests", function() {
    describe("Test isGenreSuitable", () => {
        let expectText = `Books with Thriller genre are not suitable for kids at 12 age`;

        it("Genre Thriller, age 12", () => {
            assert.equal(bookSelection.isGenreSuitable("Thriller", 12), expectText);
        });

        it("Genre Horror, age 12", () => {
            expectText = `Books with Horror genre are not suitable for kids at 12 age`;
            assert.equal(bookSelection.isGenreSuitable("Horror", 12), expectText);
        });

        it("Genre Thriller, age 22", () => {
            expectText = `Those books are suitable`;
            assert.equal(bookSelection.isGenreSuitable("Thriller", 22), expectText);
        });

        it("Genre Horror, age 16", () => {
            expectText = `Those books are suitable`;
            assert.equal(bookSelection.isGenreSuitable("Horror", 16), expectText);
        });
            
        it("Genre Comedy, age 9", () => {
            expectText = `Those books are suitable`;
            assert.equal(bookSelection.isGenreSuitable("Comedy", 9), expectText);
        });
    });

    describe("Test isItAffordable", () => {
        it("Price 10, budget 9", () => {
            assert.equal(bookSelection.isItAffordable(10, 9), "You don't have enough money");
        });

        it("Price 100, budget 10", () => {
            assert.equal(bookSelection.isItAffordable(100, 10), "You don't have enough money");
        });

        it("1$ left", () => {
            assert.equal(bookSelection.isItAffordable(1, 2), `Book bought. You have 1$ left`);
        });

        it("0$ left", () => {
            assert.equal(bookSelection.isItAffordable(1, 1), `Book bought. You have 0$ left`);
        });

        it("100$ left", () => {
            assert.equal(bookSelection.isItAffordable(1, 101), `Book bought. You have 100$ left`);
        });

        it("Wrong input price", () => {
            assert.throw(() => bookSelection.isItAffordable("10", 11), "Invalid input");
        });

        it("Wrong input budget", () => {
            assert.throw(() => bookSelection.isItAffordable(9, "13"), "Invalid input");
        });
        
        it("Wrong input both", () => {
            assert.throw(() => bookSelection.isItAffordable("16", "26"), "Invalid input");
        });
    });

    describe("Test suitableTitles", () => {
        let input = [
            {title: "The Da Vinci Code", genre: "Thriller"},
            {title: "To Kill a Mockingbird", genre: "Drama"},
            {title: "The Little Prince", genre: "Fable"},
        ];

        let output = [];

        it("Invalid input: books (string)", () => {
            assert.throw(() =>  bookSelection.suitableTitles("string", "String", "Invalid input"));
        });

        it("Invalid input: books (object)", () => {
            assert.throw(() =>  bookSelection.suitableTitles({}, "String", "Invalid input"));
        });

        it("Invalid input: wantedGenre (number)", () => {
            assert.throw(() =>  bookSelection.suitableTitles(input, 10, "Invalid input"));
        });

        it("Finding title by genre (Thriller)", () => {
            output = ["The Da Vinci Code"];
            assert.equal(bookSelection.suitableTitles(input, "Thriller").join(","), output.join(","));
        });

        it("Finding title by genre (Drama)", () => {
            output = ["To Kill a Mockingbird"];
            assert.equal(bookSelection.suitableTitles(input, "Drama").join(","), output.join(","));
        });

        it("Finding title by genre (Fable)", () => {
            output = ["The Little Prince"];
            assert.equal(bookSelection.suitableTitles(input, "Fable").join(","), output.join(","));
        });

        it("Finding title by empty genre", () => {
            output = [];
            assert.equal(bookSelection.suitableTitles(input, "").join(","), output.join(","));
        });
    })
});