
var icon = document.getElementById("icon");
icon.onclick = function() {
    // Toggle the "dark-theme" class on the document body
    document.body.classList.toggle("dark-theme");

    // Check if the "dark-theme" class is currently present
    var isDarkMode = document.body.classList.contains("dark-theme");

    // Set the icon source based on the dark mode state
    if (isDarkMode) {
        icon.src = "/asset/sun.png";
    } else {
        icon.src = "/asset/moon.png";
    }
}