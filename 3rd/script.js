
const togSwitch = document.querySelector(".slider");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
    document.body.classList.toggle("dark-theme");
}

else if (currentTheme == "light") {
    document.body.classList.toggle("light-theme");
}

togSwitch.addEventListener("click", function () {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        var theme = document.body.classList.contains("light-theme") ? "light"
            : "dark";
    }

    else {
        document.body.classList.toggle("dark-theme");
        var theme = document.body.classList.contains("dark-theme") ? "dark"
            : "light";
    }

    localStorage.setItem("theme", theme);
});

const ClickToViewAll2022 = document.querySelector(".ClickToViewAll2022");
const hiddenText = document.querySelector("#hiddenText")

ClickToViewAll2022.addEventListener("click", function () { hiddenText.classList.toggle("toggleText"); });