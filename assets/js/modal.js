console.log("loaded modal.js");

let modal = document.getElementById("modal");
let overlay = modal.querySelector(".overlay");
let modalContents = modal.querySelectorAll(".modal-content");

// 開く
let openBtns = document.querySelectorAll(".btn-open-modal[data-modal]");

openBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    let target = btn.getAttribute("data-modal");
    let targetContent = modal.querySelector(
      `.modal-content[data-modal="${target}"]`
    );

    if (targetContent) {
      modal.classList.add("is-show");
      targetContent.classList.add("is-active");
      document.body.classList.add("is-modal");
    }
  });
});

// 閉じる
modalContents.forEach((content) => {
  let btnClose = content.querySelectorAll(".btn-close-modal");

  btnClose.forEach((btn) => {
    btn.addEventListener("click", () => {
      content.classList.remove("is-active");
    });
  });
});

overlay.addEventListener("click", () => {
  // すべて閉じる
  modalContents.forEach((content) => {
    content.classList.remove("is-active");
  });
  modal.classList.remove("is-show");
  document.body.classList.remove("is-modal");
});

let closeBtns = modal.querySelectorAll(".btn-close-modal");

closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let length = modal.querySelectorAll(".modal-content.is-active").length;

    console.log(length);

    if (length === 0) {
      modal.classList.remove("is-show");
      document.body.classList.remove("is-modal");
    }
  });
});
