
var buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
buttons[i].addEventListener("click", handleClick);
}
function handleClick(){
var buttonInnerHTML = this.innerHTML;
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
}
var sone = Math.floor()
document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound (key){
  switch (key) {
    case "w":
    var top1 = new Audio("sounds/tom-1.mp3");
    top1.play();
      break;

    case "a":
    var top2 = new Audio("sounds/tom-2.mp3");
    top2.play();
      break;

    case "s":
    var top3 = new Audio("sounds/tom-3.mp3");
    top3.play();
      break;

    case "d":
    var top4 = new Audio("sounds/tom-4.mp3");
    top4.play();
      break;

    case "j":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
      break;

    case "k":
    var bass = new Audio("sounds/kick-bass.mp3");
    bass.play();
      break;

    case "l":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
      break;

        default: console.log(buttonInnerHTML);

  }
}
  
function buttonAnimation (currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
  activeButton.classList.remove("pressed")
}, 100)
}
