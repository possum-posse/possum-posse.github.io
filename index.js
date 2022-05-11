// Get the button that opens the modal
const openModalBtns = document.getElementsByClassName("open-modal");

console.log(openModalBtns)
Array.from(openModalBtns).forEach(btn => {
  // When the user clicks the button, open the modal
  btn.onclick = function() {
    // Get the modal
    const modal = this.nextElementSibling;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  }
});

// Get the <span> element that closes the modal
const closeModalBtns = document.getElementsByClassName("close-modal");

Array.from(closeModalBtns).forEach(btn => {
  // When the user clicks on <span> (x), close the modal
  btn.onclick = function() {
    this.parentElement.parentElement.setAttribute("aria-hidden", "true");
  }

})
