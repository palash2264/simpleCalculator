var total = null;
var enteredValues = null;
var keys = [];
var specialKeys = ["undo", "delete", "equal"]
var number = "";
window.onload = () => {
    var btn = document.getElementsByClassName('numberBtn');
    total = document.getElementById('result');
    enteredValues = document.getElementById('enteredValues');
    for (var i = 0; i < btn.length; i++) {
        var button = btn[i];
        button.onclick = execute;
    }
};


function execute(event) {
    var key = event.currentTarget.value;
    var lastDigit = enteredValues.innerHTML.slice(enteredValues.innerHTML.length - 1);
    if (isNaN(key) && enteredValues.innerHTML.length == 0) {
        alert('Enter number');
        return;
    }
    if (isNaN(key) && lastDigit && isNaN(lastDigit)) {
        undo();
        specialKeys.indexOf(key) == -1 ? keys.push(key) : '';
        specialKeys.indexOf(key) == -1 ? enteredValues.innerHTML += key : '';
        return;
    }

    if (!isNaN(key) || key == ".") {
        number += key;
    } else {
        keys.push(number);
        specialKeys.indexOf(key) == -1 ? keys.push(key) : '';
        number = "";
    }

    specialKeys.indexOf(key) == -1 ? enteredValues.innerHTML += key : "";

    switch (key) {
        case "undo":
            undo();
            return;
        case "delete":
            reset();
            return;
        case "equal":
            equals();
            return;
    }

}


function equals() {
    console.log(eval(keys.join('')));
    total.innerHTML = eval(keys.join(''));
}

function reset() {
    total.innerHTML = "";
    enteredValues.innerHTML = "";
    keys = [];
    number = "";
}

function undo() {
    if (enteredValues.innerHTML.length > 0) {
        enteredValues.innerHTML = enteredValues.innerHTML.slice(0, -1);
        keys.pop();
    }
}

