const togglers = document.querySelectorAll(".mob_info_toggler");

togglers.forEach((button) => {
  button.addEventListener("click", function () {
    const casinoItem = this.closest(".casino_item");

    casinoItem.classList.toggle("casino_item_active");
  });
});
