document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector(".NavbarBody_itemsContainer__Jvm3k");

    navbar.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
;


var linkElement = document.createElement("link");
linkElement.rel = "icon";
linkElement.href = "images/icon.png";
linkElement.type = "image/x-icon";
document.head.appendChild(linkElement);


});