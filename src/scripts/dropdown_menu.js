import arrow from "../assets/icons/angle-left-solid.svg";
import SVGInjector from "svg-injector";

export class DropdownMenu {
  static appendArrows() {
    let menus = document.querySelectorAll(".nl-dropdown-title-wrapper");
    if (menus) {
      menus.forEach((element) => {
        let img = document.createElement("img");
        img.classList.add("nl-arrow-icon");
        img.src = arrow;
        element.append(img);
        SVGInjector(img);
      });
    }
  }
}
