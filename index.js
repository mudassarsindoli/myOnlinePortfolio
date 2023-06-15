const body = document.body;
const aboutdark = document.getElementById("about");
const textDiv = document.getElementById("textDivId");
const skillsDiv = document.getElementById("skills");
const educationDiv = document.getElementById("education");
const experienceDiv = document.getElementById("work");
const projects = document.getElementById("projects");
const logoImg = document.getElementById("logo");
const modeBtn = document.getElementById("modeBtn");
const navbar = document.getElementById("navbar");

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

navbar.classList.toggle("navbar-dark");

const pinButton = document.getElementById("pinBtn");
pinButton.addEventListener("click", text);

function text() {
    document.getElementById("messege").innerHTML = "mudassarsindoli@gmail.com : Send a quick mail to me!";
}







