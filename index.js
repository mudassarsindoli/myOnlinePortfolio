function mode(){
    let darkMode = document.body.classList.toggle("dark-mode");
    if(darkMode == true){
        document.getElementById("modeBtn").innerHTML = "light."
    }
    else{
        document.getElementById("modeBtn").innerHTML = "dark."
    }
    document.getElementById("navbar").classList.toggle("navbar-dark");
    
}

