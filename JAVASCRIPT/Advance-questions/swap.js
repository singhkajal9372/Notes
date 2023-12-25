function swap(){
    var a = document.getElementById("num").value;

    let rev = 0;
    while(a != 0){
        let rem = a%10;
        rev = rev*10 + rem;
        a = Math.floor(a/10);
    }
    document.getElementById("ans").value = rev;
}