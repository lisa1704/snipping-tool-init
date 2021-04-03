document.getElementById("cropButton").addListener("click",cropImage);

function cropImage(image, croppingCoords) {
   console.log("cropping.....");
   var cc = croppingCoords;
   var workCan = document.createElement("canvas"); // create a canvas
   workCan.width = Math.floor(cc.width);  // set the canvas resolution to the cropped image size
   workCan.height = Math.floor(cc.height);
   var ctx = workCan.getContext("2d");    // get a 2D rendering interface
   ctx.drawImage(image, -Math.floor(cc.x), -Math.floor(cc.y)); // draw the image offset to place it correctly on the cropped region
   image.src = workCan.toDataURL();       // set the image source to the canvas as a data URL
   return image;
}
var image = new Image();
image.src = "img.jpg"; // load the image
image.onload = function () {  // when loaded
    cropImage(
        this, {
        x : this.width / 4,     // crop keeping the center
        y : this.height / 4,
        width : this.width / 2,
        height : this.height / 2,
    });
    document.body.appendChild(this);  // Add the image to the DOM
};


/**function cropImage (image, area, dpr, preserve, format, done) {
    var top = area.y * dpr
    var left = area.x * dpr
    var width = area.w * dpr
    var height = area.h * dpr
    var w = (dpr !== 1 && preserve) ? width : area.w
    var h = (dpr !== 1 && preserve) ? height : area.h
  
    var canvas = null
    if (!canvas) {
      canvas = document.createElement('canvas')
      document.body.appendChild(canvas)
    }
    canvas.width = w
    canvas.height = h
  
    var img = new Image()
    img.onload = () => {
      var context = canvas.getContext('2d')
      context.drawImage(img,
        left, top,
        width, height,
        0, 0,
        w, h
      )
  
      var cropped = canvas.toDataURL(`image/${format}`)
      done(cropped)
    }
    img.src = image
  }
  **/