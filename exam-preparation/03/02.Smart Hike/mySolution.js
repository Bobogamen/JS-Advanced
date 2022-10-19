class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    };

    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        }

        this.goals[peak] = Number(altitude);

        return `You have successfully added a new goal - ${peak}`;
    };

    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }

        if (this.resources <= 0) {
            throw new Error(`You don't have enough resources to start the hike`);
        }

        let difference = this.resources - Number(time) * 10;

        if (difference < 0) {
            return `You don't have enough resources to complete the hike`;
        }

        this.resources = difference;

        let hikedPeak = {
            peak: peak,
            time: time,
            difficultyLevel: difficultyLevel
        }

        this.listOfHikes.push(hikedPeak);

        return `You hiked ${peak} peak for ${time} hours and you have ${difference}% resources left`
    };

    rest(time) {
        this.resources += Number(time) * 10;

        if (this.resources > 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        };

        return `You have rested for ${time} hours and gained ${time * 10}% resources`
    };

    showRecord(criteria) {
        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`;
        };


        if (criteria === 'hard' || criteria === 'easy') {
            let filteredHikes = this.listOfHikes.
                filter(peak => peak.difficultyLevel === criteria);

            let sortedFilteredHikes = filteredHikes.sort((a, b) => a.time - b.time);

            let bestHike = sortedFilteredHikes[0];

            if (bestHike === undefined) {
                return `${this.username} has not done any ${criteria} hiking yet`;
            }

            return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;

        } else if (criteria === 'all') {
            let message = ["All hiking records:"];

            this.listOfHikes.forEach(pk => {
                message.push(`${this.username} hiked ${pk.peak} for ${pk.time} hours`);
            });

            return message.join("\n");
        }
    };
}

const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.addGoal('Vihren', 2914));
console.log(user.addGoal('Rui', 1706));
console.log(user.hike('Musala', 8, 'hard'));
console.log(user.rest(4));
console.log(user.hike('Vihren', 4, 'hard'));
console.log(user.rest(5));
// console.log(user.hike('Rui', 3, 'easy'));
console.log(user.showRecord('easy'));
console.log(user.showRecord('all'));






