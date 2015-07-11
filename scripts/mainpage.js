// Varibles

var aArrays = document.getElementsByClassName('hoverChange');
var account = document.getElementById('menuDiv')

for (i = 0; i < aArrays.length; i++) {
  aArrays[i].addEventListener("mouseover", bigHover);
  aArrays[i].addEventListener("mouseout", smallHover);
}

function bigHover() {
  var innerHover = this.innerHTML;
  this.style.fontSize = "35px";
  this.style.fontWeight = "bolder";
  account.style.left = "32.5%";
}

function smallHover() {
  this.style.fontSize = "30px";
  this.style.fontWeight = "normal";
  account.style.left = "35%";
}
