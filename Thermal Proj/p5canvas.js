function setup() {
    var cnv = createCanvas(100,100);
    cnv.parent('pixelP5Chart')
   
  }
  
  function draw() {
    background('green')
    let pink = color(255, 102, 204);
    loadPixels();
    let d = pixelDensity();
    let halfImage = 4 * (width * d) * (height / 2 * d);
    for (let i = 0; i < halfImage; i += 4) {
      pixels[i] = red(pink);
      pixels[i + 1] = green(pink);
      pixels[i + 2] = blue(pink);
      pixels[i + 3] = alpha(pink);
    }
    updatePixels();
  }