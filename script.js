document.getElementById("navbarToggle").addEventListener("click", function() {
    var menu = document.getElementById("navbarMenu");
    var icon = this.querySelector("i");

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-x");
    } else {
        icon.classList.remove("fa-x");
        icon.classList.add("fa-bars");
    }
});