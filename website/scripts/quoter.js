// Select the quoteText element
var quoteText = document.getElementById("quoteText");

var qoutes = [
    "And i watched the water unfold~",
    "Test test!",
    "Wishing with closed eyes~",
    `It is tempting to linger in this moment, while every possibility still exists.\n 
    But unless they are collapsed by an observer, they will never be more than possibilities.`,
    "And for the first time in a million fears, i remember your smile <3",
    "And the universe said i love you because you are love ♥",
    "Can't talk, gotta catch the next stoplight cycle",
    "Everything will be ok in the end!\nIf it's not ok, it is not the end",
    "To be gentle, to be kind~",
    "How lucky i am to have someone that makes saying goodbye so hard",
    "Heya! stranger :3",
    "also try oldmartijntje.nl!",
    "The typerrrrrrr",
    "Crazy? i was crazy once.\nThey locked me in a room. A rubber Room. A rubber room with rats.\nAnd rats make me crazy!"
]

var index = Math.floor(Math.random() * qoutes.length);

quoteText.textContent = ">" + qoutes[index];