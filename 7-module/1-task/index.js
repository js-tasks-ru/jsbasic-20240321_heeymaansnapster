import createElement from "../../assets/lib/create-element.js";

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.render();
  }

  templateBody() {
    return `
    <div class="ribbon">
      <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
      <nav class="ribbon__inner">
      </nav>
      <button class="ribbon__arrow ribbon__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    /div>`;
  }

  productLink() {
    const navLink = this.elem.querySelector(".ribbon__inner");
    this.categories.forEach((element) => {
      let htmlStr = createElement(
        `<a href="#" class="ribbon__item" data-id="${element.id}">${element.name}</a>`
      );
      navLink.append(htmlStr);
    });
  }

  menuScroll = () => {
    const arrowL = this.elem.querySelector(".ribbon__arrow_left");
    const arrowR = this.elem.querySelector(".ribbon__arrow_right");
    const menu = this.elem.querySelector(".ribbon__inner");
    let scrollWidth = menu.scrollWidth;
    let scrollLeft = menu.scrollLeft;
    let clientWidth = menu.clientWidth;
    let scrollRight = scrollWidth - scrollLeft - clientWidth;

    if (scrollLeft == 0) {
      arrowL.classList.remove("ribbon__arrow_visible");
    } else arrowL.classList.add("ribbon__arrow_visible");
    arrowL.addEventListener("click", () => {
      menu.scrollBy(-350, 0);
    });
    arrowR.addEventListener("click", () => {
      menu.scrollBy(350, 0);
      if (0 < scrollRight < 1) {
        arrowR.classList.remove("ribbon__arrow_visible");
      } else arrowR.classList.add("ribbon__arrow_visible");
    });
  };

  firstActive() {
    this.elem
      .querySelector(".ribbon__item")
      .classList.add("ribbon__item_active");
  }

  linkClick = () => {
    const links = this.elem.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", (eventClick) => {
        eventClick.preventDefault();
        this.elem
          .querySelector(".ribbon__item_active")
          .classList.remove("ribbon__item_active");
        let dataId = link.getAttribute("data-id");
        const event = new CustomEvent("ribbon-select", {
          detail: dataId,
          bubbles: true,
        });
        this.elem.dispatchEvent(event);
        link.classList.add("ribbon__item_active");
      });
    });
  };

  render() {
    this.elem = createElement(this.templateBody());
    this.productLink();
    this.firstActive();
    this.menuScroll();
    this.linkClick();
    return this.elem;
  }
}
