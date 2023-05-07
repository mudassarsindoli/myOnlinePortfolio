function mode() {
    let darkMode = document.body.classList.toggle("dark-mode");
    let aboutdark = document.getElementById("about");
    let textDiv = document.getElementById("textDivId")
    let skillsDiv = document.getElementById("skills")
    let educationDiv = document.getElementById("education")
    let experienceDiv = document.getElementById("work")
    let logoImg = document.getElementById("logo")

    aboutdark.classList.toggle("aboutparaDivDark")
    textDiv.classList.toggle("textDivDark")
    skillsDiv.classList.toggle("skillsParaDivDark")
    educationDiv.classList.toggle("educationDivDark")
    experienceDiv.classList.toggle("workDivDark")

    document.body.classList.toggle("aboutparaDivDark");
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
    document.getElementById("messege").innerHTML = "Thank You for your Feedback!"
}
