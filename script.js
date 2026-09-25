// ========================================
// FRIDAY AI WEBSITE
// ========================================

console.log("FRIDAY AI WEBSITE ONLINE");


// DOWNLOAD BUTTON EFFECT

const downloadButtons =
document.querySelectorAll(".download");

downloadButtons.forEach(button => {

  button.addEventListener("click", () => {

    const original =
      button.innerHTML;

    button.innerHTML =
      "<span>✓</span> DOWNLOADING...";

    setTimeout(() => {

      button.innerHTML =
        "<span>✓</span> DOWNLOAD STARTED";

    },1200);

    setTimeout(() => {

      button.innerHTML =
        original;

    },3500);

  });

});


// EXPLORE AI

const explore =
document.querySelector(".explore-ai");

if(explore){

  explore.addEventListener("click", () => {

    console.log(
      "Opening FRIDAY AI..."
    );

  });

}
