function myfun(){
    var a = document.getElementById("num").value;

    if(a == ""){
        document.getElementById("error").innerHTML = "*Please Enter the number";
    }
    if(isNaN(a)){
        document.getElementById("error").innerHTML = "*Please Enter numbers only";
    }
    if(a.length < 10 || a.length > 10){
        document.getElementById("error").innerHTML = "*mobile number must be 10 digit";
    }
    if((a.charAt(0) == 9) || (a.charAt(0) == 8) || (a.charAt(0) == 7)){
        document.getElementById("error").innerHTML = "*mobile number must be starts with 9,8 or 7e";
    }
}