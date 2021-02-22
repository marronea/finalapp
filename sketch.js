var gui

function setup() {
   gui = new Gui();
  let gui_setup = new dat.GUI();
  createCanvas(windowWidth, windowHeight);
  d = select('.div-block');
  d.position(0,0);
  gui_setup.add(gui, "radius1", 10, 200).step(1);
  gui_setup.add(gui, "radius2", 20, 200).step(1);
  gui_setup.add(gui, "points", 5, 50);
  gui_setup.add(gui, "backgroundColor")
  gui_setup.add(gui, "starColor")
  gui_setup.add(gui,"showDescription").onChange(description);
}

function draw() {
  background(gui.backgroundColor);
  
  strokeWeight(gui.starColor)
  
  for (let i = windowWidth * .25; i <= windowWidth * .75; i += windowWidth * .25) {
    for (let y = windowHeight / 2 - windowHeight / 4; y <= windowHeight / 2 + windowHeight / 4; y += windowHeight / 4) {
  star(random(10,windowWidth) ,random(10,windowHeight),random(gui.radius1),random(gui.radius2),random(gui.points))
  noLoop()
  
  text("Your an Star!", windowWidth / 2, windowHeight / 2);
  
}

      
  
    }
  }

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);

  }

function Gui() {
  this.radius1 = 25;
  this.radius2 = 100;
  this.points = 5;
  this.backgroundColor = ('#fffff');
  this.starColor = '#fffff';
  this.showDescription = true;
}

function description(){
  if(gui.showDescription){
    d.style('display','block');
  } else {
    d.style('display','none');
  }
}

function mousePressed() {
  redraw();
}
