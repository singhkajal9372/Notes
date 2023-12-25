function check(){
    var a = document.getElementById("num").value;

    if(a > 0){
        document.getElementById("check").innerHTML = "The number is positive";
    }
    if(a < 0){
        document.getElementById("check").innerHTML = "The number is negative";
    }
    if(a == 0){
        document.getElementById("check").innerHTML = "The number is zero";
    }
}