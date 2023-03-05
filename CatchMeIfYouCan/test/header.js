export class Header {
    constructor() {
      this.head = document.querySelector("header");
      this.spanHead = document.createElement("span");
      this.h1 = document.createElement("h1");
      this.h1Hover = document.createElement("h1");
      this.arabe = document.createElement("img");
      this.chapeau = document.createElement("img");
     
      this.initializeElements();
    }
  
    initializeElements() {
      this.frange = document.createElement("img");
      this.frange.src = "../assets/img/frange.png";
      this.frange.id = "frange";
      this.chapeau.src = "../assets/img/chapeau.png";
      this.chapeau.id = "chapeau";
      this.arabe.src = "../assets/img/arabe.png";
      this.arabe.id = "arabe";
      this.h1.id = "CatchMe";
      this.h1Hover.id = "CatchHover";
      this.spanHead.id = "spanHead";
      this.head.append(this.spanHead, this.frange);
      this.spanHead.append(this.h1, this.h1Hover, this.arabe, this.chapeau);
      this.h1.innerText = "CATCH ME if YOU CAN !";
      this.h1Hover.innerText = "WIll YOU Start the GaMe ?";
    }
  }