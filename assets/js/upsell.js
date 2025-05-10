console.log("loaded upsell.js");

let upsell = document.getElementById("upsell");
let upsellContents = upsell.querySelectorAll(".upsell-content");

upsellContents.forEach((content) => {
  let contentCloseBtn = content.querySelector(".btn-close");

  contentCloseBtn.addEventListener("click", () => {
    content.classList.remove("is-active");
  });
})