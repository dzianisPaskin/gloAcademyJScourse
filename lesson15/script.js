const DomElement = function (selector) {
  this.selector = selector;
  this.height = "100px";
  this.width = "100px";
  this.bg = "yellow";
  this.fontSize = "24px";
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

const newP = new DomElement(".block");

newP.createElem();
