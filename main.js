'use strict';
let posX = 0;
let posY = 0;
let moveLeft = false;
let moveUp = false;

let rposition = 0;
let cposition = 0;
let moveUp1 = false;
let moveLeft1 = false;

const app = document.querySelector('.app');

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');

let startAnime;

class Figure {
  constructor() {
    this.positionX = 0;
    this.positionY = 0;
  }
  draw() {}
  move() {}
}
class Rect extends Figure {
  draw() {
    app.innerHTML += `
            <div style="
                position: absolute;
                width: 50px;
                height: 50px;
                border-radius: 6px;
                background-color: cornflowerblue;
                border: 1px solid #ccc;
                box-shadow: 1px 1px 1px #333;
                left: ${this.positionX}px;
                top: ${this.positionY}px;
                "></div>
            `;
  }
  move() {
    switch (this.positionX) {
      case 450:
        moveUp = true;
        break;
      case 0:
        moveUp = false;
        break;
    }
    moveLeft ? this.positionY -= 1 : this.positionY += 1;
    rposition = this.position;

    switch (this.positionY) {
      case 450:
        moveLeft = true;
        break;
      case 0:
        moveLeft = false;
        break;
    }
    moveUp ? this.positionX -= 1 : this.positionX += 2;
  }
}
class Circle extends Figure {
  draw() {
    app.innerHTML += `
            <div style="
                position: absolute;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: orangered;
                border: 1px solid #ccc;
                box-shadow: 1px 1px 1px #333;
                top: ${this.positionY}px;
                left: ${this.positionX}px;
                "></div>
            `;
  }
  move() {
    switch (this.positionX) {
      case 450:
        moveLeft1 = true;
        break;
      case 451:
        moveLeft1 = true;
        break;
      case 0:
        moveLeft1 = false;
        break;
      case -1:
        moveLeft1 = false;
        break;
      case -2:
        moveLeft1 = false;
        break;

    }
    moveLeft1 ? this.positionX -= 2 : this.positionX += 1;
    cposition = this.positionX;
    switch (this.positionY) {
      case 450:
        moveUp1 = true;
        break;
      case 0:
        moveUp1 = false;
        break;
      case -1:
        moveUp1 = false;
        break;
      case -2:
        moveUp1 = false;
        break;
    }
    moveUp1 ? this.positionY -= 1 : this.positionY += 1;
  }
}
const figures = [new Rect(), new Circle()];
startBtn.addEventListener('click', () => {
  startAnime =
    setInterval(() => {
      app.innerHTML = '';
      for (let figure of figures) {
        figure.move();
        figure.draw();
        console.log(Rect.position);
      }
    }, 5);
});
stopBtn.addEventListener('click', () => {
  clearTimeout(startAnime);
});