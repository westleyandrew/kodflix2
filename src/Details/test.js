
function createCards(suits) {
    const cards = [];
    // Create an array with objects containing the value and the suit of each card
    cards.forEach((suit) => {
        for (let i = 1; i <= 13; i += 1) {
            const cardObject = {
                value: i,
                suit,
            };
            cards.push(cardObject);
        };
    });
}