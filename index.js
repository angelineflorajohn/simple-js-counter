//simple counter

//initialize
let counter = 0;
let displayCounterElement = document.getElementById("display-count");

//function declaration
function performCount (type) {
    //based on the button clicked, the count will either increase or decrease
    if (type == "increment") {
        counter = counter + 1;
        displayCounterElement.innerText = counter;
    } else if (type == "decrement") {
        if (counter <= 0) {
            alert("Cannot decrease below 0!");
        } else {
            counter = counter - 1;
            displayCounterElement.innerText = counter;
        }
    }
    return displayCounterElement.innerText;
}

