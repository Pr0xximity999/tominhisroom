// Select the quoteText element
var quoteText = document.getElementById("quoteText");

var qoutes = [
    "And i watched the water unfold~",
    "Test test!",
    "Wishing with closed eyes~",
    `It is tempting to linger in this moment, while every possibility still exists.\n 
    But unless they are collapsed by an observer, they will never be more than possibilities.`,
    "And for the first time in a million fears, i remember your smile <3",
    "And the universe said i love you because you are love ♥"
]

var index = Math.floor(Math.random() * qoutes.length);

quoteText.textContent = ">" + qoutes[index];