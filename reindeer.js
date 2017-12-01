var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var deerColor = "";
var hohohoElement = document.getElementById("reindeer");

hohohoElement.innerHTML = "";
for(var i = 0; i < 8; i++){
    deerColor = hohohoElement.innerHTML += `<div> ${colors[i]} ${reindeer[i]} </div>`;
}    














