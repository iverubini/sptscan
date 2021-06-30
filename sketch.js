var cam;
var x=0;
var y=0;

function setup() {
  
  
  createCanvas(wC=windowWidth, hC=windowHeight);
    
  pixelDensity(1);
  
  cam = createCapture(VIDEO);
  //cam.size(wC/3, hC/3);
  
  background(245, 120, 147);
  
  button = createButton("start");
  button.size(150, 80);
  button.position(wC/2, hC/2);
  button.mouseClicked(startMIC);
  button.style("font-family", "Helvetica");
  button.style("font-size", "48px");
  
  mic = new p5.AudioIn();
  
  
  
}

function draw() {
  
  cam.loadPixels();
  cam.hide();
  
  var w = cam.width;
  var h = cam.height;
  
  var voz = mic.getLevel();
  
  copy(cam, w/2, 0, w, h, x, y, wC/3, hC/3);
  
  
  if (voz > 0.01) {x = x+5;};
    
  if (x > wC) { x = 0; y = y + 150} ;
  
  if (y > hC) { x = 0; y = 0};
  
 
  
  print(voz);
  
}



function startMIC() {
  
  getAudioContext();
  userStartAudio();
  button.hide();
  mic.start();
  
}
