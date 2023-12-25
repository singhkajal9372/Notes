function check(){
    var a = document.getElementById("first").value;
    var b = document.getElementById("second").value;
    var c = document.getElementById("third").value;

    if(a>b && a>c){
        document.getElementById("ans").innerHTML = "a is greater number";
    }
    else if(b>a && b>c){
        document.getElementById("ans").innerHTML = "b is greater number";
    }
    else{
        document.getElementById("ans").innerHTML = "c is greater number";
    }
}