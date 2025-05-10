console.log("loaded modal.js");

let modal = document.getElementById("modal");
let overlay = modal.querySelector(".overlay");
let modalContents = modal.querySelectorAll(".modal-content");

modalContents.forEach((content) => {
  let btnClose = content.querySelectorAll(".btn-close-modal");

  btnClose.forEach((btn) => {
    btn.addEventListener("click", () => {
      content.classList.remove("is-active");
    });
  });
});

let closeBtns = modal.querySelectorAll(".btn-close-modal");

closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let length = modal.querySelectorAll(".modal-content.is-active").length;

    console.log(length)

    if (length === 0) {
      modal.classList.remove("is-show");
    }
  });
});
