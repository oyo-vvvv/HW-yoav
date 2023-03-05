import { Header } from "./header";

Header

export class Section {
  constructor() {
    const section = document.querySelector("section");
    this.data = document.createElement("div");
    this.board = document.createElement("div");
    this.settings = document.createElement("div");
    this.iconArrow = document.createElement("i");
    this.x = 1;
    this.y = 1;

    section.append(this.data, this.board, this.settings);
    this.settings.append(this.iconArrow);
    this.data.id = "data";
    this.board.id = "board";
    this.settings.id = "settings";
    this.iconArrow.className = "fa-solid fa-arrow-trend-up";
    this.iconArrow.id = "arrow";

    this.iconArrow.addEventListener("click", () => {
      if (this.y == 1) {
        this.settings.style.right = "0px";

        this.iconArrow.style.transform = "scaleX(1) rotate(45deg)";
        this.y++;
      } else {
        this.settings.style.right = "-212px";
        this.iconArrow.style.transform = "scaleX(-1) rotate(0deg)";
        this.y--;
      }
    });
    this.iconArrow.addEventListener("mouseover", () => {
      if (this.x == 1) {
        this.iconArrow.style.left = "-47px";
        this.x++;
      } else {
        this.iconArrow.style.left = "-20px";
        this.x--;
      }
    });
    this.iconArrow.addEventListener("mouseout", () => {
      if (this.x == 2) {
        this.iconArrow.style.left = "-47px";
        this.x--;
      } else {
        this.iconArrow.style.left = "-20px";
        this.x++;
      }
    });
  }
}