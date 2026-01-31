//Get all elements with the cardbox class
let elements = document.getElementsByClassName("flickerIn");

//Make everything invisible and put it in a list
let elementOrdered= [];
for(let element of elements)
{
    element.style.opacity = 0;
    elementOrdered.push(element)
}

//Shuffle the list
shuffle(elementOrdered);

let stagger_ms = 200;

for (let i = 0; i < elementOrdered.length; i++) {
    let offset_ms = (Math.random()-0.5) * 100 // -50 to 50 ms random offset
    
    //Fade in the element in order
    setTimeout(() => {
        flickerIn(elementOrdered[i]);
    }, (stagger_ms * i) + offset_ms)
}

//Method for fading in the element
function flickerIn(element){
    let duration_ms = 1000 + (Math.random() * 500) //between 1000 and 1500 ms
    let progress = 0;
    let tick = 0;
    let steps = 30;
    let delay_ms = duration_ms / steps;
    let flickered = false;
    
    //Choppy-ness of the fade; lower is more choppy
    let rounding = 5;

    //Flicker happens between 10% and 30% into the transition
    const stopFlickerAt = Math.random() * 0.2 + 0.1;
    let flickercount = 0;

    element.dataset.flickering = "true"

    let interval = setInterval(() => {

        // 60% chance to increase in brightness, otherwise decrease
        // This will create a flickering effect
        if(Math.random() < 0.6)
        {
            progress += (1 / steps);
        }
        else {
            progress -= (1 / steps)
        }

        // Tick always goes up
        tick += (1 / steps);
        
        // Apply new progress opacity
        element.style.opacity = Math.round(progress * rounding) / rounding;
        
        if(tick >= 1)
        {
            progress = 1;
            tick = 1;
            element.style.opacity = Math.round(progress * rounding) / rounding;
            delete element.dataset.flickering;
            clearInterval(interval);
            return
        }

    }, delay_ms);
}

//Stack overflow :P
function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}
