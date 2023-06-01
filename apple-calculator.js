function appendToResult(value) {
    document.getElementById("result").value += value;
}

function appendOperator(operator) {
    let currentResult = document.getElementById("result").value;
    if (currentResult.length > 0 && !isNaN(currentResult[currentResult.length - 1])) {
        document.getElementById("result").value += operator;
    }
}

function calculateResult() {
    let result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function clearLastCharacter() {
    let currentResult = document.getElementById("result").value;
    document.getElementById("result").value = currentResult.slice(0, -1);
}
