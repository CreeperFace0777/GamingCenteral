//Variabes
var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");
var creeper = document.getElementById('creeper');
var creeperPic = document.getElementById('creeper-pic');

//Script
numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

 function add() {
   var one = parseFloat(numOne.value) || 0;
   var two = parseFloat(numTwo.value) || 0;
   addSum.innerHTML = "your sum is: "+ (one+two);
 }


creeper.addEventListener("click", function() {
  if (creeperPic.className == "hide") {
     creeperPic.className = "";
  } else {
    creeperPic.className = "hide";
  }
});
