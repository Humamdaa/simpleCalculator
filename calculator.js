const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

const specialChars = ["+", "-", "*", "/", "%"];
let outPut = "";
let point;

// console.log(display,buttons);

//action afer event
// function handleClick(e) {
//     console.log(e.target.dataset.value);
// }

//to handle click event
// buttons.forEach((btn) => {
//     btn.addEventListener('click', handleClick);
// });

//short way 
buttons.forEach((btn) => {

    btn.addEventListener("click", (e) => claculate(e.target.dataset.value));//console.log(e.target.dataset.value));
});

const claculate = (btnValue) => {
    if (btnValue == "=" && btnValue != "") {
        // Evaluate the expression and handle percentage
        outPut = eval(outPut.replace("%", "/100"));
    }
    else if (btnValue == "AC") {
        // Clear the output
        outPut = "";
    }
    else if (btnValue == "DEL") {
        // Remove the last character
        outPut = outPut.toString().slice(0, -1);
    }
    //two specials consecutive characters
    else if (specialChars.includes(btnValue) && specialChars.includes(outPut.charAt(outPut.length - 1))) {
        return;
    }
    // double 0 in the beggining or after operator
    else if (btnValue == "0" && checkValueAfterOperator() == "0") {//outPut[outPut.length - 1]
        console.log("the checker :" + checkValueAfterOperator());
        return;
    }
    else if (btnValue == "00" && (checkValueAfterOperator() == "0" || checkValueAfterOperator() == undefined)) {//|| specialChars.includes(outPut[outPut.length - 1])
        console.log("the checker :" + checkValueAfterOperator());
        return;
    }

    // outPut conatis . and user click .
    else if ((specialChars.includes(btnValue) && point == 1) || (btnValue == "." && outPut.length == 0)) {
        point = 0;
        return;
    }
    else if (btnValue == "." && point == 0) {
        outPut += btnValue;
        point++;
    }

    else {
        // Avoid starting with special characters
        if (outPut == "" && specialChars.includes(btnValue))
            return;
        // Append the button value to the output
        outPut += btnValue;
    }
    // Update the display
    display.value = outPut;

}

function checkValueAfterOperator(){
    let i = outPut.length - 1;
    let temp;
    console.log("the temp: " + temp);
    while(!specialChars.includes(outPut[i]) && i >= 0){
        console.log("i is :" + i);
        temp = outPut[i];
        console.log("the temp: " + temp);
        i--;
    }
    return temp;
}

function countSpecialCharacters(output) {
    let count = 0;
    for (let char of output) {
        if (specialChars.includes(char)) {
            count++;
        }
    }
    return count;
}

function countPoint(output) {
    let count = 0;
    for (let char of output) {
        if ("." == char) {
            count++;
        }
    }
    return count;
}