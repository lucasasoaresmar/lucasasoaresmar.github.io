const canvas = document.getElementById("canvas-touch");
const context = canvas.getContext("2d");
const rect = canvas.getBoundingClientRect();

getMousePos = (canvas, evt) => {
    return {
      x: evt.clientX - rect.right/4,
      y: evt.clientY - rect.bottom/4,
      xSize: rect.right,
      ySize: rect.bottom
    }
}

touch = (e) => {
    let pos = getMousePos(canvas, e);
    posx = pos.x;
    posy = -pos.y;
   
    document.querySelector(".spin-x").style.transform = "rotateY(" + (90 + 35*posx/pos.xSize) + "deg)";
    document.querySelector(".spin-y").style.transform = "rotateX(" + 35*posy/pos.ySize + "deg)";
}

window.addEventListener('mousemove', touch, false);