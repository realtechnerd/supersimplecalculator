function calculator() {
    const display = document.getElementById("display");
    const firstnum = prompt("First number.");
    const secondnum = prompt("Second number.");
    const operator = prompt("Select operator. Your choices are '+','-','/', and '*'");
    let output;

    if (operator === "+") {
        output = parseInt(firstnum) + parseInt(secondnum);
        display.innerHTML = "The answer is: " + output + ".";
    } else if (operator === '-') {
        output = parseInt(firstnum) - parseInt(secondnum);
        display.innerHTML = "The answer is: " + output + ".";
    } else if (operator === '/') {
        output = parseInt(firstnum) / parseInt(secondnum);
        display.innerHTML = "The answer is: " + output + ".";
    } else if (operator === '*') {
        output = parseInt(firstnum) * parseInt(secondnum);
        display.innerHTML = "The answer is: " + output + ".";
    } else {
        display.innerHTML = "Input missing or wrong input."
    }
}
