const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

menuToggle.addEventListener("click", function () {

    console.log("Menu button clicked!");

    siteNav.classList.toggle("active");

    console.log(siteNav.classList);

});