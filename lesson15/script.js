const DomElement = function (selector) {
  this.selector = selector;
  this.height = "100px";
  this.width = "100px";
  this.bg = "yellow";
  this.fontSize = "24px";
  this.top = 0;
  this.left = 0;
  this.createElem = function () {
    if (this.selector.slice(0, 1) === ".") {
      this.div = document.createElement("div");
      this.div.id = selector;
      this.div.textContent = "Hello, I`m a div";
      this.div.style.cssText = `
      height: ${this.height};
      background: ${this.bg};
      width: ${this.width};
      font-size: ${this.fontSize};
      position: absolute;
      top: ${this.top};
      left: ${this.left};
      `;
      document.body.append(this.div);
    } else if (this.selector.slice(0, 1) === "#") {
      console.log("p");
      this.p = document.createElement("p");
      this.p.id = selector;
      this.p.textContent = "Hello, I`m a paragraph";
      this.p.style.cssText = `
      height: ${this.height};
      background: ${this.bg};
      width: ${this.width};
      font-size: ${this.fontSize};
      `;
      document.body.append(this.p);
    }
  };
};

// const newP = new DomElement("#block");
const square = new DomElement(".square");
// newP.createElem();

document.addEventListener(
  "DOMContentLoaded",
  function () {
    square.createElem();
    window.addEventListener("load", () => {
      square.left = 0;
      square.top = 0;
    });

    window.addEventListener("keydown", function (event) {
      square.createElem();
      switch (event.key) {
        case "ArrowLeft":
          square.left = parseInt(square.left) - 5 + "px";
          break;
        case "ArrowRight":
          square.left = parseInt(square.left) + 5 + "px";
          console.log("arrow rught");
          break;
        case "ArrowUp":
          square.top = parseInt(square.top) - 5 + "px";
          break;
        case "ArrowDown":
          square.top = parseInt(square.top) + 5 + "px";
          break;
        default:
          console.log("Only Arrow Keys Are Allowed!");
      }

   
    });
  },
  false
);

