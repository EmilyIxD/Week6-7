var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function preload() {
  soundFormats('mp3');
  rollingsuitcase = loadSound('RollingSuitcase.mp3');
  airportambiance = loadSound('Airportambiance.mp3');
  seatbeltsound = loadSound('SeatbeltSound.mp3');
  seatbeltclick = loadSound('SeatbeltClick.mp3');
  airplanetakeoff = loadSound('AirplaneTakeOff.mp3');
  eating = loadSound('Eating.mp3');
  water = loadSound('Water.mp3');
  toiletflush = loadSound('AirplaneToilet.mp3');
  airplaneland = loadSound('AirplaneLanding.mp3');
  
}

function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
}

function draw() {
  background(0);
	strokeWeight(1);
	stroke(255);
	
	i = 0;
	for (var x = 50; x < width; x = x + 180)
	for (var y = 50; y < 500; y = y + 180) {
	ellipse(x, y, 25, 25);
	text(numbers[ i ], x, y);
	i++;
	}
}
  
 function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 50, 50);
  if (d < 10) {
    // Pick new random color values
  rollingsuitcase.play();
  }
}
