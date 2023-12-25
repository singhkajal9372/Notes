function add() {
    var f = parseInt(document.getElementById("first").value);
    var s = parseInt(document.getElementById("second").value);

    var add = f+s;
    document.getElementById("ans").value = add;
}