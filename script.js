// FRIDAY AI DOWNLOAD WEBSITE

console.log("FRIDAY AI WEBSITE ONLINE");

const downloadButtons =
document.querySelectorAll(".download");

downloadButtons.forEach(button => {

  button.addEventListener("click", () => {

    button.innerHTML = "↓ DOWNLOADING...";

    setTimeout(() => {
      button.innerHTML = "✓ DOWNLOAD STARTED";
    }, 1200);

  });

});
