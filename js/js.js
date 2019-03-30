var arreyButtons = document.getElementsByClassName('buttonOperation');

for (var i = 0; i < arreyButtons.length; i++) {
    arreyButtons[i].addEventListener('click', onButtonClickOperations);
    }

function maceOperation(sign) {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    if (sign === '+') {
        var result = number1 + number2;
    } else if (sign === '-') {
        var result = number1 - number2;
    } else if (sign === '*') {
        var result = number1 * number2;
    } else if (sign === '/') {
        var result = number1 / number2;
    } else {
        alert('Unknow operation');
    }
    alert(result);
}

function onButtonClickOperations(event) {
    var operationClick = event.currentTarget;
    var operation = operationClick.innerHTML;
    maceOperation(operation);
}
