var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Composites = Matter.Composites,
    Common = Matter.Common,
    Vertices = Matter.Vertices,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

  var engine;
  var world;
  var cells = [];
  var flask = [];
  var sun = [];
  var showText = false;

  var mouseConstraint;

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  engine = Engine.create();
  world = engine.world;

  var b = new Boundary(width/2, height + 50, width, 102);

  drawSun();
  newCell();
  cells.push();

  var mouse = Mouse.create(canvas.elt);
  var mouseParams = {
    mouse : mouse,
    constraint : {
      stiffness: 0.1,
    }
  }

  mouseConstraint = MouseConstraint.create(engine, mouseParams);
  mouseConstraint.mouse.pixelRatio = pixelDensity();
  World.add(world, mouseConstraint);
}

function drawFlask() {
  var w = new Flask((width/2 + width/6) + (width/8), height - 100, 20, width/4);
  flask.push(w);
  var w = new Flask((width/2 + width/6) - (width/8), height - 100, 20, width/4);
  flask.push(w);
  var w = new Flask(width/2 + width/6, height + 30, width/4, 100);
  flask.push(w);
}

function newCell() {
  var p = new Cell(width/2 + width/6, height/2 + height/3, 10);
  cells.push(p);
}

function drawSun() {
  var s = new Sun(width/2 - width/4 + width/6, height/2, 60);
  sun.push(s);
}

function draw() {
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  //make new cell every 5 frames

  if (flask.length == 0) {
    drawFlask();
  }

  //set background
  background(236, 240, 241);

  //updates engine repeatedly
  Engine.update(engine);

  for (var i = 0; i < flask.length; i++) {
    flask[i].show();
  }

  for (var i = 0; i < sun.length; i++) {
    sun[i].show();
  }

  if (sun[0].isPlaced()) {
    console.log("Sun is above algae");
    if (cells.length < 300) {
      newCell();
    } else {
      showText = true;
    }
  }

  if (showText) {
    textSize(width/10);
    noStroke();
    fill(0);
    textStyle(BOLD);
    textFont("Helvetica");
    text("Yay, algae.", width/2, height/2);
  } else {
    textSize(width/50);
    noStroke();
    fill(0);
    textStyle(NORMAL);
    textFont("Courier New");
    text("One thing algae needs to grow is light, place the sun over the algae cell.", width/2, height/2 - height/3);
  }

  for (var i = 0; i < cells.length; i++) {
    cells[i].show();
    if (cells[i].isOffScreen()) {
      //removes cell from matter.js
      World.remove(world, cells[i].body);
      //removes cell form array
      cells.splice(i, 1);
      i--;
    }
  }

  var a = mouseConstraint.constraint.pointA;
  var bodyB = mouseConstraint.constraint.bodyB;

}
