// Animation for the header transition and background color

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  let windowRelativeBottom =
    document.documentElement.getBoundingClientRect().top;

  if (windowRelativeBottom > -600) {
    header.style.transition = "ease-in-out 0.4s";
    header.style.backgroundColor = "hsla(0, 0%, 77%, 40%)";
  } else {
    header.style.transition = "ease-in-out 0.4s";
    header.style.backgroundColor = "var(--baltic-sea)";
  }
});
