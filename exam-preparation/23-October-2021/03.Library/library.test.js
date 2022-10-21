describe("Tests", function () {
    describe("Test calcPriceOfBook(nameOfBook, year)", () => {
        let expectText = "Invalid input";

        it("Invalid input (number, string)", () => {
            assert.throw(() => library.calcPriceOfBook(1, "book"), expectText);
        });

        it("Invalid input (array, string)", () => {
            assert.throw(() => library.calcPriceOfBook([], "book1"), expectText);
        });

        it("Invalid input (object, string)", () => {
            assert.throw(() => library.calcPriceOfBook({}, "book2"), expectText);
        });

        it("Invalid input (string, string)", () => {
            assert.throw(() => library.calcPriceOfBook("Book", "string"), expectText);
        });

        it("Invalid input (string, array)", () => {
            assert.throw(() => library.calcPriceOfBook("Book", []), expectText);
        });

        it("Invalid input (string, object)", () => {
            assert.throw(() => library.calcPriceOfBook("Book", {}), expectText);
        });

        it("Invalid input (number, number)", () => {
            assert.throw(() => library.calcPriceOfBook(1, 1), expectText);
        });

        it("Invalid input (array, number)", () => {
            assert.throw(() => library.calcPriceOfBook([], 22), expectText);
        });

        it("Invalid input (object, number)", () => {
            assert.throw(() => library.calcPriceOfBook({}, 12), expectText);
        });

        it("calcPriceOfBook(Book, 1900)", () => {
            expectText = `Price of Book is 10.00`
            assert.equal(library.calcPriceOfBook("Book", 1900), expectText);
        });

        it("calcPriceOfBook(Name, 1980)", () => {
            expectText = `Price of Name is 10.00`
            assert.equal(library.calcPriceOfBook("Name", 1980), expectText);
        });


        it("calcPriceOfBook(Another Name, 1999)", () => {
            expectText = `Price of Another Name is 20.00`
            assert.equal(library.calcPriceOfBook("Another Name", 1999), expectText);
        });

        it("calcPriceOfBook(One Name, 2005)", () => {
            expectText = `Price of One Name is 20.00`
            assert.equal(library.calcPriceOfBook("One Name", 2005), expectText);
        });
    });

    describe("Test findBook: function(booksArr, desiredBook)", () => {
        let expectText = "No books currently available";

        it("Array zero lenght", () => {
            assert.throw(() => library.findBook([], "Troy"), expectText);
        });

        it("Book Troy found!", () => {
            expectText = `We found the book you want.`
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], "Troy"), expectText);
        });

        it("Book Torronto found!", () => {
            expectText = `We found the book you want.`
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], "Torronto"), expectText);
        });

        it("Book Life Style found!", () => {
            expectText = `We found the book you want.`
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], "Life Style"), expectText);
        });

        it("MyBook not found!", () => {
            expectText = `The book you are looking for is not here!`
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], "My book"), expectText);
        });

        it("Next Book not found!", () => {
            expectText = `The book you are looking for is not here!`

            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], "Next Book"), expectText);
        });

        it("Test Book Life Style found!", () => {
            expectText = `The book you are looking for is not here!`;
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], "Test Book"), expectText);
        });
    });
    
    describe("Test arrangeTheBooks(countBooks)", () => {
        let expectText = "Invalid input";

        it("countBooks == string", () => {
            assert.throw(() => library.arrangeTheBooks("Troy"), expectText);
        });

        it("countBooks == object", () => {
            assert.throw(() => library.arrangeTheBooks({}), expectText);
        });

        it("countBooks == array", () => {
            assert.throw(() => library.arrangeTheBooks([]), expectText);
        });

        it("countBooks == negative number", () => {
            assert.throw(() => library.arrangeTheBooks(-5), expectText);
        });

        it("Full shelves", () => {
            expectText = `Great job, the books are arranged.`;
            assert.equal(library.arrangeTheBooks(40), expectText);
        });

        it("Shelves with less books", () => {
            expectText = `Great job, the books are arranged.`;
            assert.equal(library.arrangeTheBooks(35), expectText);
        });

        it("Insufficient space", () => {
            expectText = `Insufficient space, more shelves need to be purchased.`;
            assert.equal(library.arrangeTheBooks(155), expectText);
        });
    });
});