// Get all the slowWriter classes
var swElements = document.getElementsByClassName("slowWriter");

const delay = (ms) => new Promise(r => setTimeout(r, ms));

// Waits until the checked element does not have the flickering property anymore
function waitUntil(checkedElementid, callback)
{
    const interval = setInterval(() => {    
        var element = document.getElementById(checkedElementid);
        if(element.dataset.flickering !== "true"){
            clearInterval(interval);
            callback();
        }
    }, 500);
}


for(let element of swElements)
{
    var wholeText = element.textContent;
    element.textContent = ""

    var checkedElement = element;
    var elementContainsClass = false;

    // Grabs the nearest parent class that has the flickerIn class
    while(!elementContainsClass)
    {
        if(!checkedElement.classList.contains("flickerIn"))
        {
            // This assumes you assigned the slowWriter class to something that will flicker in eventually!!
            checkedElement = checkedElement.parentElement;
        }
        else{
            checkedElement.id
            elementContainsClass = true;
        }
    }
    
    // Wait until the element flickered in and then start writing
    waitUntil(checkedElement.id, async () => {
        for (let i = 0; i < wholeText.length; i++) {     
            await delay(200);
            var letter = wholeText.charAt(i);
            element.textContent += letter;
        }
    });
}

