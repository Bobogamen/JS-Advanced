describe("Tests", function () {
    describe("Test hiringEmployee (name, position, yearsExperience)", () => {
        let expectText = `We are not looking for workers for this position.`;

        it("Position: Janitor", () => {
            assert.throw(() => companyAdministration.hiringEmployee("Boris", "Janitor", 99), expectText);
        });

        it("Melany, Programmer, 3 years", () => {
            expectText = `Melany was successfully hired for the position Programmer.`;
            assert.equal(companyAdministration.hiringEmployee("Melany", "Programmer", 3), expectText);
        });

        it("Boris, Programmer, 5 years", () => {
            expectText = `Boris was successfully hired for the position Programmer.`;
            assert.equal(companyAdministration.hiringEmployee("Boris", "Programmer", 5), expectText);
        });

        it("Ivan, Programmer, 15 years", () => {
            expectText = `Ivan was successfully hired for the position Programmer.`;
            assert.equal(companyAdministration.hiringEmployee("Ivan", "Programmer", 15), expectText);
        });

        it("Experience = 1 year", () => {
            expectText = `Konny is not approved for this position.`;
            assert.equal(companyAdministration.hiringEmployee("Konny", "Programmer", 1), expectText);
        });

        it("Experience = 2 year", () => {
            expectText = `Hoewy is not approved for this position.`;
            assert.equal(companyAdministration.hiringEmployee("Hoewy", "Programmer", 2), expectText);
        });
    });

    describe("Test calculateSalary (hours)", () => {
        let expectText = `Invalid hours`;

        it("Invalid hours (string)", () => {
            assert.throw(() => companyAdministration.calculateSalary("Boris"), expectText);
        });

        it("Invalid hours (array)", () => {
            assert.throw(() => companyAdministration.calculateSalary([]), expectText);
        });

        it("Invalid hours (object)", () => {
            assert.throw(() => companyAdministration.calculateSalary({}), expectText);
        });

        it("Invalid hours (negative number)", () => {
            assert.throw(() => companyAdministration.calculateSalary(-5), expectText);
        });

        it("Hours < 160 -> 156", () => {
            expectText = 156 * 15;
            assert.equal(companyAdministration.calculateSalary(156), expectText);
        });

        it("Hours = 160", () => {
            expectText = 160 * 15;
            assert.equal(companyAdministration.calculateSalary(160), expectText);
        });

        it("Hours > 160 -> 170", () => {
            expectText = 170 * 15 + 1000;
            assert.equal(companyAdministration.calculateSalary(170), expectText);
        });
    });

    describe("Test firedEmployee (employees, index)", () => {
        let expectText = `Invalid input`;

        it("Negative index", () => {
            assert.throw(() =>
                companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1), expectText);
        });

        it("Index outside array", () => {
            assert.throw(() =>
                companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 13), expectText);
        });

        it("Index is string", () => {
            assert.throw(() =>
                companyAdministration.firedEmployee(["Petar", "Ivan", "George"], "eleven"), expectText);
        });

        it("Index is object", () => {
            assert.throw(() =>
                companyAdministration.firedEmployee(["Petar", "Ivan", "George"], {}), expectText);
        });

        it("Index is array", () => {
            assert.throw(() =>
                companyAdministration.firedEmployee(["Petar", "Ivan", "George"], []), expectText);
        });

        it("Index and array is with swapped positions", () => {
            assert.throw(() =>
                companyAdministration.firedEmployee(2, ["Petar", "Ivan", "George"]), expectText);
        });

        it("Remove Petar", () => {
            expectText = `Ivan, George`;
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 0), expectText);
        });

        it("Remove George", () => {
            expectText = `Petar, Ivan`;
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 2), expectText);
        });

        it("Remove at index 4", () => {
            expectText = `Petar, Ivan, George, Boris`;
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan", "George", "Boris", "John"], 4), expectText);
        });
    });
});