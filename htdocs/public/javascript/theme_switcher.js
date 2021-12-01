let darkHeader = document.querySelector(`h1`);
const themeSwitcher = document.getElementById("theme-switch");

themeSwitcher.checked = false;
// checks the color and add/removes and saves 
function clickHandler() {
    if (this.checked) {
        document.body.classList.remove("light");
        darkHeader.classList.remove(`h1-light`);
        document.body.classList.add("dark");
        darkHeader.classList.add(`h1-dark`);
        localStorage.setItem("theme", "dark");
        localStorage.setItem("theme-h1", "h1-dark");
    } else {
        document.body.classList.add("light");
        darkHeader.classList.add(`h1-light`);
        document.body.classList.remove("dark");
        darkHeader.classList.remove(`h1-dark`);
        localStorage.setItem("theme", "light");
        localStorage.setItem("theme-h1", "h1-light");
    }
}
themeSwitcher.addEventListener("click", (clickHandler));
// check local storage to set it for the next page
window.onload = checkTheme();
function checkTheme() {
    const localStorageTheme = localStorage.getItem("theme");
    const localStorageThemeH1 = localStorage.getItem("theme-h1");


    if (localStorageTheme !== null && localStorageTheme === "dark" && localStorageThemeH1 !== null && localStorageThemeH1 === "h1-dark") {
        // set the theme of body and h1
        document.body.className = localStorageTheme;
        darkHeader.className = localStorageThemeH1;
        
        // adjust the slider position
        const themeSwitch = document.getElementById("theme-switch");
        themeSwitch.checked = true;
    }
}
