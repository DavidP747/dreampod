document.addEventListener("DOMContentLoaded", function () {
    var imageContainer = document.getElementById("imageContainer");
    var textOverlay = document.getElementById("textOverlay");

    imageContainer.addEventListener("mouseover", function () {
        textOverlay.style.display = "block";
    });

    imageContainer.addEventListener("mouseout", function () {
        textOverlay.style.display = "none";
    });
});
