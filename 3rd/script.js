
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

const ClickToViewAll2019 = document.querySelector(".ClickToViewAll2019");
// const ClickToViewAll2020 = document.querySelector(".ClickToViewAll2020");
const ClickToViewAll2021 = document.querySelector(".ClickToViewAll2021");
const ClickToViewAll2022 = document.querySelector(".ClickToViewAll2022");
const ClickToViewAll2023 = document.querySelector(".ClickToViewAll2023");
const hiddenText2019 = document.querySelector("#hiddenText2019")
// const hiddenText2020 = document.querySelector("#hiddenText2020")
const hiddenText2021 = document.querySelector("#hiddenText2021")
const hiddenText2022 = document.querySelector("#hiddenText2022")
const hiddenText2023 = document.querySelector("#hiddenText2023")

ClickToViewAll2019.addEventListener("click", function () { hiddenText2019.classList.toggle("toggleText"); });
// ClickToViewAll2020.addEventListener("click", function () { hiddenText2020.classList.toggle("toggleText"); });
ClickToViewAll2021.addEventListener("click", function () { hiddenText2021.classList.toggle("toggleText"); });
ClickToViewAll2022.addEventListener("click", function () { hiddenText2022.classList.toggle("toggleText"); });
ClickToViewAll2023.addEventListener("click", function () { hiddenText2023.classList.toggle("toggleText"); });

