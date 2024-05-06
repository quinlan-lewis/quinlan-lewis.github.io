/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function updateSize() {
    newPositionValue = document.querySelector(".profile").offsetHeight + "px";
    document.documentElement.style.setProperty("--bg-position-x", newPositionValue);
}

window.addEventListener('load', function (event) {
    updateSize();
});

window.addEventListener('resize', function (event) {
    updateSize();
});