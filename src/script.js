const backgroundContainer = document.getElementById("background-container");
const backgroundSelector = document.getElementById("background-selector");

backgroundSelector.addEventListener("change", function() {
    const selectedValue = backgroundSelector.value;

    if (selectedValue === "1") {
        backgroundContainer.style.backgroundImage = "url('./images/japan.jpg')";
    } else if (selectedValue === "2") {
        backgroundContainer.style.backgroundImage = "url('./images/sweden.jpg')";
    } else if (selectedValue === "3") {
        backgroundContainer.style.backgroundImage = "url('./images/new-york.jpg')";
    }
});
