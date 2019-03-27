var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var rollingsuitcase;
var airplanetakeoff;
var airportambiance;
var seatbeltsound;
var seatbeltclick;
var eating;
var water;
var airplaneland;
var toiletflush;

function preload() {
  soundFormats('mp3');
  rollingsuitcase = loadSound('RollingSuitcase.mp3');
  airportambiance = loadSound('Airportambiance.mp3');
  seatbeltsound = loadSound('SeatbeltSound.mp3');
  seatbeltclick = loadSound('SeatbeltClick.mp3');
  airplanetakeoff = loadSound('AirplaneTakeoff.mp3');
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
  for (var x = 50; x < width; x = x + 180) {
    for (var y = 50; y < 500; y = y + 180) {
      ellipse(x, y, 25, 25);
      text(numbers[i], x, y);
      i++;
    }
  }
}

function mousePressed() {
  airplaneland.stop();
  airportambiance.stop();
  rollingsuitcase.stop();
  airplanetakeoff.stop();
  seatbeltsound.stop();
  seatbeltclick.stop();
  eating.stop();
  toiletflush.stop();
  water.stop();
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 50, 50);
  if (d < 10) {
    // Play corresponding sound
    rollingsuitcase.play();
  }
  d = dist(mouseX, mouseY, 50, 230);
  if (d < 10) {
    // Play corresponding sound
    toiletflush.play();
  }
  d = dist(mouseX, mouseY, 50, 410);
  if (d < 10) {
    // Play corresponding sound
    eating.play();
  }
  d = dist(mouseX, mouseY, 230, 50);
  if (d < 10) {
    // Play corresponding sound
    airplanetakeoff.play();
  }
  d = dist(mouseX, mouseY, 410, 50);
  if (d < 10) {
    // Play corresponding sound
    water.play();
  }
  d = dist(mouseX, mouseY, 230, 410);
  if (d < 10) {
    // Play corresponding sound
    seatbeltclick.play();
  }
  d = dist(mouseX, mouseY, 230, 230);
  if (d < 10) {
    // Play corresponding sound
    seatbeltsound.play();
  }
  d = dist(mouseX, mouseY, 410, 230);
  if (d < 10) {
    // Play corresponding sound
    airportambiance.play();
  }
  d = dist(mouseX, mouseY, 410, 410);
  if (d < 10) {
    // Play corresponding sound
    airplaneland.play();
  }
  
}
