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
  var bounds = [];
  var svgs = ['DarkBulbImg'];

  var mouseConstraint;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  newCell();

  var b = new Boundary(width/2, height + 50, width, 102);

  //var f = new Flask(width/2, height/2);

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

function newCell() {
  var p = new Cell(windowWidth/2, 50, 10);
  cells.push(p);
}

function draw() {

  //make new cell every 5 frames
  if (frameCount % 5 == 0 && cells.length < 100) {
    newCell();
  }

  background(236, 240, 241);
  Engine.update(engine);
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
  if (bodyB) {
    strokeWeight(2);
    stroke(255);
    line(a.x, a.y, bodyB.position.x, bodyB.position.y);

}
}
