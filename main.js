var open = document.getElementById("open");
var navbar = document.getElementById("navBar");
var navlink = document.getElementsByClassName("navlink");
var bar1 = document.getElementById("bar1");
var bar2 = document.getElementById("bar2");
var bar3 = document.getElementById("bar3");

open.addEventListener("click", function () {
    if (navbar.style.height == "0px") {
        navbar.style.height = "100vh";
        bar2.style.display = "none";
        bar1.style.transform = "rotate(90deg)";
        bar3.style.marginTop = "-9px";
        open.style.marginTop = "10px";
        open.style.transform = "rotate(45deg)";
        open.style.backgroundColor = "transparent";
    } else {
        navbar.style.height = "0px";
        bar2.style.display = "block";
        bar1.style.transform = "rotate(0deg)";
        bar3.style.marginTop = "0px";
        open.style.marginTop = "0px";
        open.style.transform = "rotate(0deg)";
        open.style.backgroundColor = "#343F33";
    }
});

for (let i = 0; i < navlink.length; i++) {
    navlink[i].addEventListener("click", function () {
        navbar.style.height = "0px";
        open.style.marginTop = "0px";
        open.style.transform = "rotate(0deg)";
        bar2.style.display = "block";
        bar1.style.transform = "rotate(0deg)";
        bar3.style.marginTop = "0px";
        open.style.backgroundColor = "black";
    });
};