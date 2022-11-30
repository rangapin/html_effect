var screenWidth = screen.width - 100;
var face1 = document.getElementById("face1");
var face2 = document.getElementById("face2");
face1.style.width = screenWidth / 4;
face2.style.width = screenWidth / 4;
var bodyElement = document.querySelector("body");
bodyElement.addEventListener("mousemove", changeFace, false);
var prevX = 0;
var maxWidth = screenWidth / 2;

function changeFace(e) {
  var xDirection = getMouseDirection(e);
  var face1width = face1.offsetWidth;
  var face2width = face2.offsetWidth;
  if (xDirection == "left") {
    moveLeft(face1width, face2width);
  } else {
    moveRight(face1width, face2width);
  }
}

function moveLeft(face1width, face2width) {
  if (face2width < maxWidth) {
    face2.style.width = face2width + 10 + "px";
    face1.style.width = face1width - 10 + "px";
  }
}

function moveLeft(face1width, face2width) {
  if (face1width < maxWidth) {
    face2.style.width = face1width + 10 + "px";
    face1.style.width = face2width + 10 + "px";
  }
}

function getMouseDirection(e) {
  var dir;
  currentX = e.pageX;
  if (prevX < currentX) {
    dir = "right";
  } else {
    dir = "left";
  }
  prevX = currentX;
  return dir;
}
