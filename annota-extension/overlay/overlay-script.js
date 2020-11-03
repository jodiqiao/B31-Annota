var modal;
var span;

// Wait for page to load
window.onload = function() {
  // Get the modal
  modal = document.getElementById("myModal");

  // Get the <span> element that closes the modal
  span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
    parent.window.postMessage("remove", "*");
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      parent.window.postMessage("remove", "*");
    }
  }

}