class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let returnMessage = [];

        footballPlayers.forEach(p => {
            let [name, age, playerValue] = p.split("/");

            let player = this.invitedPlayers.find(p => p.name == name);

            if (!player) {
                this.invitedPlayers.push({ name, age, playerValue });
                returnMessage.push(name);
            } else if (playerValue > player.playerValue) {
                player.playerValue = playerValue;
            }
        })

        return `You successfully invite ${returnMessage.join(", ")}.`;
    }

    signContract(selectedPlayer) {
        let [name, offer] = selectedPlayer.split("/");
        offer = Number(offer);

        let player = this.invitedPlayers.find(p => p.name === name);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`)
        }

        if (player.playerValue === "Bought") {
            return;
        }

        let playerPrice = Number(player.playerValue);

        if (offer < playerPrice) {
            let priceDifference = playerPrice - offer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
        }

        player.playerValue = "Bought";

        return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`
    }

    ageLimit(name, age) {
        let player = this.invitedPlayers.find(p => p.name == name);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`)
        }

        let playerAge = Number(player.age);
        age = Number(age);

        if (playerAge < age) {
            let ageDifference = age - playerAge;

            if (ageDifference < 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
            } else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }
        } else {
            return `${name} is above age limit!`
        }
    }

    transferWindowResult() {
        let message = ["Players list:"];

        this.invitedPlayers.
            sort((a, b) => a.name.localeCompare(b.name)).
            forEach(p => {
                message.push(`${p.name}-${p.playerValue}`)
            })

        return message.join("\n");
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());


