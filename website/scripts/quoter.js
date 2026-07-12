// Select the quoteText element
var quoteText = document.getElementById("quoteText");



fetch(`https://ori.ivorylotus.dev/zin/all`)
.then(response => response.json())
.then(data => {
    var quotes = data.sentences;
    var index = Math.floor(Math.random() * quotes.length);

    quoteText.textContent = ">" + quotes[index].sentence;
})
.catch(error => {
    quoteText.textContent = ">And i watched the water unfold~";
})

