class Background {
  constructor() {
    this.scrollSpeed = speed
    this.x1 = 0
    this.x2 = width
  }

  show() {
    image(bImg, this.x1, 0, width, height)
    image(bImg, this.x2, 0, width, height)
    this.x1 -= speed
    this.x2 -= speed

    if (this.x1 < -width){
      this.x1 = width
    }
    if (this.x2 < -width){
      this. x2 = width
    }
  }
}