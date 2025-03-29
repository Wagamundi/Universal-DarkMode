const darkModeSwitcher = false; //Defines if it Switches DarkMode or LightMode || !!! This does not change said thing in line 3 !!!

// You have to Put your Main Color in the light variables and the Color you wanna switch it for in the same Indexed dark

// ** Color Conigs **
const lightPatch1 = "rgb(40, 40, 40)";
const lightPatch2 = "rgb(20, 20, 20)";
const lightPatch3 = "";
const lightPatch4 = "";

const fntLightPatch1 = "rgb(255, 255, 255)";
const fntLightPatch2 = "";

const darkpatch1 = "rgb(245, 237, 202)";
const darkpatch2 = "rgb(195, 188, 152)";
const darkpatch3 = "";
const darkpatch4 = "";

const fntDarkpatch1 = "rgb(0, 0, 0)";
const fntDarkpatch2 = "";

// ** Configs End **

let theme1 = [];
let theme2 = [];
let theme3 = [];
let theme4 = [];

let fntTheme1 = [];
let fntTheme2 = [];

const loopVec = [lightPatch1, lightPatch2, lightPatch3, lightPatch4];
const changeVec = [darkpatch1, darkpatch2, darkpatch3, darkpatch4];
const fntVec = [fntLightPatch1, fntLightPatch2];
const fntChangeVec = [fntDarkpatch1, fntDarkpatch2];
const themeVec = [theme1, theme2, theme3, theme4];
const fntThemeVec = [fntTheme1, fntTheme2];

const doc = Array.from(document.querySelectorAll("*"));
const darkModeButton = document.getElementById("js-darkMode");
const darkModeImg = document.querySelectorAll(".toggleDarkImg");

let stateAtLoad = "false";
document.cookie.split("; ").forEach((element) => {
  if (element.startsWith("darkMode=")) {
    stateAtLoad = element.split("=")[1];
  }
});

doc.forEach((element) => {
  const computedStyle = getComputedStyle(element);

  loopVec.forEach((color, index) => {
    if (computedStyle.backgroundColor === color) {
      themeVec[index].push(element);
    }
  });

  fntVec.forEach((color, index) => {
    if (computedStyle.color === color) {
      fntThemeVec[index].push(element);
    }
  });

  if (!element.style.transition.includes("background-color")) {
    element.style.transition += ", background-color 0.5s ease-in-out";
  }
});

console.log(fntTheme1);

if (darkModeSwitcher === false) {
  darkModeImg.forEach((element) => {
    element.classList.toggle("objDisabled");
  });
}

if (stateAtLoad === "true") {
  darkModeImg.forEach((element) => {
    element.classList.toggle("objDisabled");
  });

  themeVec.forEach((elements, index) => {
    elements.forEach((element) => {
      element.style.backgroundColor = changeVec[index];
    });
  });

  fntThemeVec.forEach((elements, index) => {
    elements.forEach((element) => {
      element.style.color = fntChangeVec[index];
    });
  });
}

darkModeButton.addEventListener("click", () => {
  let crtState = "false";
  document.cookie.split("; ").forEach((element) => {
    if (element.startsWith("darkMode=")) {
      crtState = element.split("=")[1];
    }
  });

  if (crtState === "false") {
    document.cookie = "darkMode=true; path=/; max-age=31536000";

    darkModeImg.forEach((element) => {
      element.classList.toggle("objDisabled");
    });

    themeVec.forEach((elements, index) => {
      elements.forEach((element) => {
        element.style.backgroundColor = changeVec[index];
      });
    });

    fntThemeVec.forEach((elements, index) => {
      elements.forEach((element) => {
        element.style.color = fntChangeVec[index];
      });
    });
  } else {
    document.cookie = "darkMode=false; path=/; max-age=31536000";

    darkModeImg.forEach((element) => {
      element.classList.toggle("objDisabled");
    });

    themeVec.forEach((elements, index) => {
      elements.forEach((element) => {
        element.style.backgroundColor = loopVec[index];
      });
    });

    fntThemeVec.forEach((elements, index) => {
      elements.forEach((element) => {
        element.style.color = fntVec[index];
      });
    });
  }
});

/*
 *
 * Written and Designed by:
 *   Wagamundi[mail@wagamundi.de]
 *
 *   Repository:
 *   https://github.com/Wagamundi/Universal-DarkMode
 *
 */
