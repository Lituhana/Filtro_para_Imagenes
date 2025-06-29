var image;
var originalImage;

function upload() {
  var imgcanvas = document.getElementById ("can");
  var fileinput = document.getElementById ("finput");
  image = new SimpleImage (fileinput);
  originalImage = new SimpleImage (fileinput);
  image.drawTo (imgcanvas);
}

function makeGrey() {
  for (var pixel of image.values ()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var imgcanvas = document.getElementById ("can");
  image.drawTo (imgcanvas);
}

function makeRed() {
  for (var pixel of image.values ()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(0);
    pixel.setBlue(0);
  }
  var imgcanvas = document.getElementById ("can");
  image.drawTo (imgcanvas);
}

function resetImage() {
  image = new SimpleImage (originalImage);
  var imgcanvas = document.getElementById("can");
  image.drawTo(imgcanvas);
}