// ================================
// FRIDAY AI DOWNLOAD WEBSITE
// ================================

console.log("FRIDAY AI WEBSITE ONLINE");


// DOWNLOAD BUTTON EFFECT

const downloadButtons =
document.querySelectorAll(".download");


downloadButtons.forEach(button => {

  button.addEventListener("click", () => {

    const oldText =
      button.innerHTML;

    button.innerHTML =
      "<span>✓</span> DOWNLOADING...";


    setTimeout(() => {

      button.innerHTML =
        "<span>✓</span> DOWNLOAD STARTED";

    }, 1200);


    setTimeout(() => {

      button.innerHTML =
        oldText;

    }, 3500);

  });

});
