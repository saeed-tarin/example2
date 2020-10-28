
  var lis: HTMLElement = document.createElement("UL");
  var btn: HTMLElement = document.createElement("BUTTON");
  var inp: HTMLElement = document.createElement("INPUT");
 
function myFunc(): void{
	if(inp.value != "")
    {
    	var newItem: HTMLElement = document.createElement("LI");
    	var textnode: Text = document.createTextNode(inp.value);
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
    inp.addEventListener("keyup", function(event: any): void {
					  if (event.keyCode === 13) {
   							 event.preventDefault();
   							 btn.click();}}); 