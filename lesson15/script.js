const DomElement = function (selector) {
  this.selector = selector;
  this.height = "100px";
  this.width = "100px";
  this.bg = "yellow";
  this.fontSize = "24px";
  this.top = '';
  this.right = '';
  this.bottom = '';
  this.left = '';
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
      right: ${this.right};
      bottom: ${this.bottom};
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
const square = new DomElement('.square');

// newP.createElem();

document.addEventListener('DOMContentLoaded', function() {
 
  let left = 0;
  let right = 0;
  let top = 0;
  let bottom = 0;
 
window.addEventListener('keydown', function(event) {
  square.createElem()

  if (event.key == 'ArrowUp') {
    bottom += 20;
    square.bottom = bottom + 'px'
    console.log('up')
  } else if (event.key == 'ArrowDown') {
    top += 20;
    square.top = top + 'px'
    console.log('down')
  } else if(event.key == 'ArrowRight') {
    left += 20;
    square.left = left + 'px'
    console.log('right')
  
  } else if(event.key == 'ArrowLeft') {
    right += 20;
    square.right = right + 'px'
    console.log('left')
  }

});
}, false);

