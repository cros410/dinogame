class Enemy {
  constructor() {
    this.r = 50
    this.x = width
    this.y = (height - this.r) - 80 
    this.active= true
  }

  move() {
    this.x -= speed
  }

  show() {
    image(eImg, this.x, this.y, this.r, this.r)
    // fill(255, 50)
    // fill(color(255, 204, 0));
    // rect(this.x, this.y, this.r, this.r)
  }
}