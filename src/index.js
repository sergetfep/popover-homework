import "./css/style.css";
import Popover from "./js/popover";

const btn = document.getElementById("popover-btn");

const popover = new Popover(btn, "Popover title", "And here’s some content");

btn.addEventListener("click", () => popover.toggle());
