function sum() {


    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);

    document.getElementById("result").value = (n1 + n2);
    document.getElementById("div1").innerHTML = "Sum :" + (n1 + n2)



}

function substraction(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    document.getElementById("result").value = (n1 - n2);
    document.getElementById("div1").innerHTML = "Sum :" + (n1 - n2)
}
function multiplication(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    document.getElementById("result").value = (n1 * n2);
    document.getElementById("div1").innerHTML = "Sum :" + (n1 * n2)
}
function division(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    document.getElementById("result").value = (n1 / n2);
    document.getElementById("div1").innerHTML = "Sum :" + (n1 / n2)
}

function reminder(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    document.getElementById("result").value = (n1 % n2);
    document.getElementById("div1").innerHTML = "Sum :" + (n1 % n2)
}