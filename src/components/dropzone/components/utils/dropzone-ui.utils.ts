import { asureColor, colourNameToHex, hexColorToRGB } from "@unlimited-react-components/kernel";

export function createRipple<
  T extends HTMLButtonElement | HTMLAnchorElement | HTMLDivElement
>(event: React.MouseEvent<T, MouseEvent>, color: string) {
  const buttonAnchorDiv = event.currentTarget;

  const circle: HTMLSpanElement = document.createElement("span");
  const diameter = Math.max(
    buttonAnchorDiv.clientWidth,
    buttonAnchorDiv.clientHeight
  );
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${
    event.clientX - buttonAnchorDiv.offsetLeft - radius
  }px`;
  circle.style.top = `${event.clientY - buttonAnchorDiv.offsetTop - radius}px`;
  circle.classList.add("ripple");

  circle.style.backgroundColor = hexColorToRGB(
    asureColor(colourNameToHex(color)),
    0.4
  );

  const ripple = buttonAnchorDiv.getElementsByClassName("ripple")[0];
  if (ripple) {
    ripple.remove();
  }
  buttonAnchorDiv.appendChild(circle);
}