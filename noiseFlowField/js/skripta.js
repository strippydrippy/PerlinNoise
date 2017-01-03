// var xoff1  = 0;
// var xoff2  = 10000;

var inc = 0.1;
var scl = 10;
var cols, rows;

var zoff = 0;



function setup() {
createCanvas(600, 600);
cols = floor(width / scl);
rows = floor(height / scl);


}

function draw() {
  background(255);


var yoff = 0;

for (var y = 0; y < rows; y++) {
  var xoff = 0;
for (var x = 0; x < cols; x++) {
      var index = (x+y*width)*4;
      var angle = noise(xoff, yoff,zoff)*TWO_PI;
      var v = p5.Vector.fromAngle(angle);


            xoff += inc;

            stroke(0);
            push();
            translate(x*scl,y*scl);
            rotate(v.heading());
            line(0,0,scl,0);
            pop();
            // rect(x * scl, y * scl, scl, scl);
}
yoff += inc;
zoff += 0.001;
}


}
