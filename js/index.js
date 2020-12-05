document.addEventListener('DOMContentLoaded', () => {
  // code 
  let hamburger = document.getElementById('hamburger');
  let menu_link = document.querySelectorAll(".menu_item-link, .login");
  let body = document.querySelector("body");
  let mobileMenu = document.querySelector(".nav-wrapper-mobile");

  hamburger.onclick = function () {
    this.classList.toggle("is-active");

    if(this.classList.contains('is-active')){
      showMenu ();
    }else{
      hideMenu ();
    }
  };

  toggleClass(menu_link);

  document.querySelector('.get-started').onclick = hideMenu;

  function showMenu (){
    body.classList.add("no__scroll");
    mobileMenu.classList.add("open");
  }

  function hideMenu (){
    body.classList.remove("no__scroll");
    mobileMenu.classList.remove("open");
    hamburger.classList.remove("is-active");
  }

  function toggleClass(elements) {
    elements.forEach(function (el) {
      el.onclick = function () {
        elements.forEach(function (el) {
          el.classList.remove("is-active");
        });
        this.classList.add("is-active");
        hideMenu();
      };
    });
  }
});