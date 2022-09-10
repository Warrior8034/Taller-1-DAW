function calcular(){
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    var n3 = parseInt(document.getElementById("num3").value);
    var n4 = parseInt(document.getElementById("num4").value);
    var n5 = parseInt(document.getElementById("num5").value);

    var mayor = Math.max(n1,n2,n3,n4,n5);
    var menor = Math.min(n1,n2,n3,n4,n5);
    alert ("El numero mayor es:   " +mayor+   "  y el numero menor es: "+menor);
 }