let smallCursor = document.querySelector(".smallCursor");
let shadowCursor = document.querySelector(".shadowCursor");

let mouseX;
let mouseY;
let animationId=null
document.addEventListener("mousemove", function (eventObj) {
  mouseX = eventObj.clientX;
  mouseY = eventObj.clientY;
  smallCursor.style.left = mouseX + "px";
  smallCursor.style.top = mouseY + "px";

  //   shadowCursor.style.left = mouseX + "px";
  //   shadowCursor.style.top = mouseY + "px";

  
});

function animateShadowCursor() {
  let currentX = parseFloat(shadowCursor.style.left || 0); //clientX
  let currentY = parseFloat(shadowCursor.style.top || 0); // client Y

  let distanceX = mouseX - currentX;
  let distanceY = mouseY - currentY;


  shadowCursor.style.left = currentX + distanceX * 0.05 + "px";
  shadowCursor.style.top = currentY + distanceY * 0.05 + "px";



  animationId=requestAnimationFrame(animateShadowCursor)
//   console.log(animationId)
}

animateShadowCursor();