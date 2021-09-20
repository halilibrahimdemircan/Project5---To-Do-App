let button = document.getElementById("button");
let inputField = document.getElementById("input");
let container = document.getElementById("text-body");

button.addEventListener("click", function(){
    var text= document.createElement("p");
    text.innerText = inputField.value;
    container.appendChild(text);
    inputField.value = ""
})