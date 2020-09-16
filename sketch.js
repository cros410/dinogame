let character
let cash
let bImg
let cImg
let eImg
let fImg
let song
let enemies = []
let score
let button
let activeEnemiesCount
let speed
let acceleration

function preload() {
  bImg = loadImage('assets/background.jpeg')
  cImg = loadImage('assets/rpig.png')
  eImg = loadImage('assets/covid.png')
  fImg = loadImage('assets/money.png')
  song = loadSound('assets/coin.mp3')
  jump = loadSound('assets/jump.mp3')
  lose = loadSound('assets/lose.mp3')
}

function setup() {
  speed = 10
  activeEnemiesCount = 0
  score = 0
  acceleration = 0.005
  createCanvas(600, 450)
  character = new Character()
  background = new Background()
  cash = new Objective()
}

function keyPressed() {
  if (key === ' ') {
    character.jump()
  }
}

function touchStarted() {
  character.jump()
}

function draw() {
  speed+=acceleration
  if (random(1) < 0.009 && activeEnemiesCount < 1) {
    enemies.push(new Enemy())
  }
  background.show()
  cash.show()
  activeEnemiesCount = 0
  for (let e of enemies) {
    if ( e.x > 0 ) activeEnemiesCount++
    e.move()
    e.show()
    if (character.hits(e)) {
      button = createButton('Reiniciar');
      button.position(height/2 + 20, width/2 - 60);
      button.mousePressed(function () {
        location.reload()
      })
      textSize(40);
      fill(color(0, 0, 0));
      text('PERDISTE', height / 2 - 40, width / 2 - 80);
      lose.play()
      noLoop()
    }
    if (e.active && character.x > e.x + e.r) {
      e.active = false
      song.play()
      score+=10
    }
  }
  character.show()
  character.move()
  textSize(32);
  fill(color(0, 0, 0));
  text(`Puntaje: ${score}`, 10, 50)
  cash.show()
}