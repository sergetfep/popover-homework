export default class Popover {
  constructor(element, title, content) {
    this.element = element;
    this.title = title;
    this.content = content;
    this.popover = null;
  }

  show() {
    if (this.popover) return;

    const pop = document.createElement("div");
    pop.className = "popover";

    const titleEl = document.createElement("div");
    titleEl.className = "popover-title";
    titleEl.textContent = this.title;

    const contentEl = document.createElement("div");
    contentEl.className = "popover-content";
    contentEl.textContent = this.content;

    pop.append(titleEl, contentEl);
    document.body.append(pop);

    const el = this.element.getBoundingClientRect();
    const pr = pop.getBoundingClientRect();

    pop.style.top = `${el.top - pr.height - 10}px`;
    pop.style.left = `${el.left + el.width / 2 - pr.width / 2}px`;

    this.popover = pop;
  }

  hide() {
    if (!this.popover) return;
    this.popover.remove();
    this.popover = null;
  }

  toggle() {
    this.popover ? this.hide() : this.show();
  }
}
