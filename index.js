let body = document.body;
let aboutdark = document.getElementById("about");
let textDiv = document.getElementById("textDivId");
let skillsDiv = document.getElementById("skills");
let educationDiv = document.getElementById("education");
let experienceDiv = document.getElementById("work");
let projects = document.getElementById("projects");
let logoImg = document.getElementById("logo");
let modeBtn = document.getElementById("modeBtn");
let navbar = document.getElementById("navbar");

body.classList.toggle("dark-mode");
aboutdark.classList.toggle("aboutparaDivDark");
textDiv.classList.toggle("textDivDark");
skillsDiv.classList.toggle("skillsParaDivDark");
educationDiv.classList.toggle("educationDivDark");
experienceDiv.classList.toggle("workDivDark");
projects.classList.toggle("skillsParaDivDark");

if (body.classList.contains("dark-mode")) {
    modeBtn.innerHTML = ".light";
    logoImg.setAttribute("src", "img/logo_white.png");
} else {
    modeBtn.innerHTML = ".dark";
    logoImg.setAttribute("src", "img/logo_black.png");
}
    let darkMode = document.body.classList.toggle("dark-mode");

navbar.classList.toggle("navbar-dark");
    let aboutdark = document.getElementById("about");

let pinButton = document.getElementById("pinBtn");
pinButton.addEventListener("click", text);
    let textDiv = document.getElementById("textDivId")

function text() {
    document.getElementById("messege").innerHTML = "mudassarsindoli@gmail.com : Send a quick mail to me!";
}
    let skillsDiv = document.getElementById("skills")

    let educationDiv = document.getElementById("education")

    let experienceDiv = document.getElementById("work")

    let projects = document.getElementById("projects")

    let logoImg = document.getElementById("logo")

    aboutdark.classList.toggle("aboutparaDivDark")

    textDiv.classList.toggle("textDivDark")

    skillsDiv.classList.toggle("skillsParaDivDark")

    educationDiv.classList.toggle("educationDivDark")

    experienceDiv.classList.toggle("workDivDark")

    projects.classList.toggle("skillsParaDivDark")

    document.body.style = ("");

    if (darkMode == true) {

        document.getElementById("modeBtn").innerHTML = ".light"

        logoImg.setAttribute("src", "img/logo_white.png")

    }

    else {

        document.getElementById("modeBtn").innerHTML = ".dark"

        logoImg.setAttribute("src", "img/logo_black.png")

    }

    document.getElementById("navbar").classList.toggle("navbar-dark");

}

let pinButton = document.getElementById("pinBtn")

pinButton.addEventListener("click", text)

function text() {

    document.getElementById("messege").innerHTML = "mudassarsindoli@gmail.com : Send a quick mail to me!"

}
