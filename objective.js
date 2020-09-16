class Objective {
  constructor() {
    this.r = 50
    this.x = width - 100
    this.y = ( height - this.r ) - 80 
  }

  show() {
    image(fImg, this.x, this.y, this.r, this.r)
    // fill(255, 50)
    // fill(color(255, 204, 0));
    // rect(this.x, this.y, this.r, this.r)
  }
}