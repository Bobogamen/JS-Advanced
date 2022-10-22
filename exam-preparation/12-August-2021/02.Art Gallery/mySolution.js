class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();

        if (articleModel != "picture" && articleModel != "photo" && articleModel != "item") {
            throw new Error(`This article model is not included in this gallery!`);
        }

        let article = this.listOfArticles.find(x => x.articleName === articleName);

        if (article && article.articleModel === articleModel) {
            article.quantity += quantity;
        }
        if (!article) {
            this.listOfArticles.push({ articleModel, articleName, quantity });
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }


    inviteGuest(guestName, personality) {
        let points = {
            "Vip": 500,
            "Middle": 250,
        }

        let guest = this.guests.find(x => x.guestName === guestName);
        if (guest) {
            throw new Error(`${guestName} has already been invited.`);
        }
        this.guests.push({ guestName, points: points[personality] || 50, purchaseArticle: 0 });
        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {
        let article = this.listOfArticles.find(x => x.articleName === articleName);
        let guest = this.guests.find(x => x.guestName === guestName);

        if (!article || article.articleModel != articleModel) {
            throw new Error("This article is not found.");
        }
        if (article.quantity <= 0) {
            return `The ${articleName} is not available.`;
        }
        if (!guest) {
            return 'This guest is not invited.';
        }

        if (guest.points < this.possibleArticles[article.articleModel]) {
            return 'You need to more points to purchase the article.';
        }

        guest.points -= this.possibleArticles[article.articleModel];
        article.quantity--;
        guest.purchaseArticle++;

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[article.articleModel]} points.`;
    }

    showGalleryInfo(criteria) {
        let message;
        if (criteria == "article") {
            message = ["Articles information:"];
            this.listOfArticles.forEach(a => {
                message.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`)
            })

            return message.join("\n");

        } else if (criteria == "guest") {
            message = ["Guests information:"];
            this.guests.forEach(g => {
                message.push(`${g.guestName} - ${g.purchaseArticle}`)
            })

            return message.join("\n");
        }
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));


