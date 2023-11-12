document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector(".NavbarBody_itemsContainer__Jvm3k");

  navbar.addEventListener("click", function () {
    window.location.href = "index.html";
  });
  var linkElement = document.createElement("link");
  linkElement.rel = "icon";
  linkElement.href = "images/icon.png";
  linkElement.type = "image/x-icon";
  document.head.appendChild(linkElement);

  // Get a reference to the element with the specific class
  var elementToDelete = document.querySelector("");

  // Check if the element exists
  if (elementToDelete) {
    // Remove the element and its contents
    elementToDelete.parentNode.removeChild(elementToDelete);
  }

});
(function () {
  // Get all audio elements on the page.
  const audioElements = document.querySelectorAll("audio");

  // Mute all audio elements.
  audioElements.forEach((element) => (element.muted = true));
})();
