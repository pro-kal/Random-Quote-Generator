const quotes = [
    "Dream big. Start small. Act now.",
    "You become what you believe.",
    "Stay soft. The world needs your light.",
    "Progress, not perfection.",
    "The best views come after the hardest climbs.",
    "Your only limit is your mind.",
    "Be the energy you want to attract."
]

const usedIndexes = new Set();
const quoteTag = document.getElementById("quote");

function generateQuote() {
    if (usedIndexes.size == quotes.length) usedIndexes.clear();
    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length);
        if (usedIndexes.has(randomIdx)) continue;
        const quote = quotes[randomIdx];
        quoteTag.innerHTML = quote;
        usedIndexes.add(randomIdx);
        break;
    }
}
