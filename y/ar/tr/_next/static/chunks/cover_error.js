const errorCover = document.querySelector(".error-cover");

// Show the error cover for 1 second.
setTimeout(() => {
  errorCover.classList.remove("hidden");
}, 1000);

// Hide the error cover after 1 second.
setTimeout(() => {
  errorCover.classList.add("hidden");
}, 2000);
