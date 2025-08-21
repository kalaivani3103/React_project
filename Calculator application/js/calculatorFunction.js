


function addOperation() {
    var FirstNum = Number(document.getElementById("firstNumber").value);
    var SecondNum = Number(document.getElementById("secondNumber").value);
    var result = FirstNum + SecondNum;
    document.getElementById("result").value = result;
}
function subOperation() {
    FirstNum = Number(document.getElementById("firstNumber").value);
    SecondNum = Number(document.getElementById("secondNumber").value);
    result.value = FirstNum - SecondNum;
}
function mulOperation() {
    FirstNum = Number(document.getElementById("firstNumber").value);
    SecondNum = Number(document.getElementById("secondNumber").value);
    result.value = FirstNum * SecondNum;
}
function divOperation() {
    FirstNum = Number(document.getElementById("firstNumber").value);
    SecondNum = Number(document.getElementById("secondNumber").value);
    if (SecondNum !== 0) {
        result.value = FirstNum / SecondNum;
    } else {
        return alert("Cannot divide by zero...");
    }
}

document.getElementById("result").value = result;