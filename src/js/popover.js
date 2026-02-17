
export default class Popover {
  constructor(element, title, content) {
    this.element = element;
    this.title = title;
    this.content = content;
    this.popover = null;
  }

  show() {
    if (this.popover) return;

    const pop = document.createElement('div');
    pop.className = 'popover';
    pop.innerHTML = `
      <div class="popover-title">${this.title}</div>
      <div class="popover-content">${this.content}</div>
    `;

    document.body.appendChild(pop);

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
