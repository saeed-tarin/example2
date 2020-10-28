var lis = document.createElement("UL");
var btn = document.createElement("BUTTON");
var inp = document.createElement("INPUT");
function myFunc() {
    if (inp.value != "") {
        var newItem = document.createElement("LI");
        var textnode = document.createTextNode(inp.value);
        newItem.appendChild(textnode);
        lis.insertBefore(newItem, lis.childNodes[0]);
        inp.value = "";
    }
}
document.body.appendChild(lis);
btn.innerHTML = "ارسال";
document.body.appendChild(btn);
document.body.appendChild(inp);
btn.addEventListener("click", myFunc);
inp.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btn.click();
    }
});
