function calculator() {
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);

    var arr = document.getElementsByName("operation");

    var op;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].checked) {
            op = arr[i].value;
            break;
        }
    }

    switch (op) {
        case "add":
            var result = "Addition :" + (n1 + n2);
            break;

        case "sub":
            var result = "Substraction :" + (n1 - n2);
            break;
        case "multi":
            var result = "Multiplication :" + (n1 * n2);
            break;

        case "division":
            var result = "Division :" + (n1 / n2);
            break;
}

//to disply the value of result in textbox

document.getElementById("result").value=result;
document.getElementById("n1").value="";
document.getElementById("n2").value="";
document.getElementById("n1").focus();



}