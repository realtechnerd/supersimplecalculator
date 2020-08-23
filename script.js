function calculator() {
    const display = document.getElementById("display");
    const firstnum = prompt("First number.");
    const secondnum = prompt("Second number.");
    const operator = prompt("Select operator. Your choices are '+','-','/', and '*'");

    if (operator === "+") { 
        display.innerHTML = "The answer is: " + parseInt(firstnum) + parseInt(secondnum) + ".";
    } else if (operator === '-') {
        display.innerHTML = "The answer is: " + parseInt(firstnum) - parseInt(secondnum) + ".";
    } else if (operator === '/') {
        display.innerHTML = "The answer is: " + parseInt(firstnum) / parseInt(secondnum) + ".";
    } else if (operator === '*') {
        display.innerHTML = "The answer is: " + parseInt(firstnum) * parseInt(secondnum) + ".";
    } else {
        display.innerHTML = "Input missing or wrong input."
    }
}