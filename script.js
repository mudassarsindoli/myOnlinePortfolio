document.querySelector(".cross").style.display = "none";
document.querySelector(".hamburger").addEventListener("click", ()=> {
document.querySelector(".sidebar").classList.toggle("noSidebar")
if(document.querySelector(".sidebar").classList.contains("noSidebar")) {
    setTimeout(() => {
    document.querySelector(".ham").style.display = "inline";
    }, 500);
    document.querySelector(".cross").style.display = "none";
}
else {
    document.querySelector(".ham").style.display = "none";
    setTimeout(() => {
    document.querySelector(".cross").style.display = "inline";
    }, 500);
}
});