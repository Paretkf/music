  /* Demo purposes only */
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );

var favIcon = document.querySelector('.trash')
function handletrash() {
favIcon.classList.toggle('active');
}