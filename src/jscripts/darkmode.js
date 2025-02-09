const lightpatch1 = "rgb(245, 237, 202)";
const lightpatch2 = "rgb(205, 197, 162)";
const darkpatch1 = "rgb(40, 40, 40)";
const darkpatch2 = "rgb(20, 20, 20)";

const doc = Array.from(document.querySelectorAll("*"));
let theme1 = [];
let theme2 = [];
let wrTheme1 = [];

doc.forEach((element) => {
  const computedStyle = getComputedStyle(element);
  element.style.transition = `${element.style.transition}, background-color 0.5s ease-in-out`;
  if (computedStyle.backgroundColor === lightpatch1) {
    theme1.push(element);
  } else if (computedStyle.backgroundColor === lightpatch2) {
    theme2.push(element);
  } else if (computedStyle.color === "rgb(0, 0, 0)") {
    wrTheme1.push(element);
  }
});

const crtState = localStorage.getItem("darkMode");
if (crtState === "true") {
  const darkModeImg = document.querySelectorAll(".toggleDarkImg");
  darkModeImg.forEach((element) => {
    element.classList.toggle("objDisabled");
  });
  theme1.forEach((element) => {
    element.style.backgroundColor = darkpatch1;
    element.style.color = "rgb(255, 255, 255)";
  });
  theme2.forEach((element) => {
    element.style.backgroundColor = darkpatch2;
    element.style.color = "rgb(255, 255, 255)";
  });
  wrTheme1.forEach((element) => {
    element.style.color = "rgb(255, 255, 255)";
  });
}

const darkModeButton = document.getElementById("js-darkMode");

darkModeButton.addEventListener("click", () => {
  const currentState = localStorage.getItem("darkMode");
  const darkModeImg = document.querySelectorAll(".toggleDarkImg");
  darkModeImg.forEach((element) => {
    element.classList.toggle("objDisabled");
  });

  if (currentState === "true") {
    localStorage.setItem("darkMode", "false");
    theme1.forEach((element) => {
      element.style.backgroundColor = lightpatch1;
      element.style.color = "rgb(0, 0, 0)";
    });
    theme2.forEach((element) => {
      element.style.backgroundColor = lightpatch2;
      element.style.color = "rgb(0, 0, 0)";
    });
    wrTheme1.forEach((element) => {
      element.style.color = "rgb(0, 0, 0)";
    });
  } else {
    localStorage.setItem("darkMode", "true");
    theme1.forEach((element) => {
      element.style.backgroundColor = darkpatch1;
      element.style.color = "rgb(255, 255, 255)";
    });
    theme2.forEach((element) => {
      element.style.backgroundColor = darkpatch2;
      element.style.color = "rgb(255, 255, 255)";
    });
    wrTheme1.forEach((element) => {
      element.style.color = "rgb(255, 255, 255)";
    });
  }
});
