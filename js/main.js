$(document).ready(function () {
  var menuButton = document.querySelector(".header-button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".header-nav")
      .classList.toggle("header-nav--visible");
  });
  var CloseMenuButton = $(".header-close");
  CloseMenuButton.on("click", closeMenu);

  function closeMenu(event) {
    event.preventDefault();
    var dropdown = $(".header-nav");
    dropdown.removeClass("header-nav--visible");
  }
  var dropdown = $(".header-nav");
  $(document).on("keydown", function (e) {
    if (e.keyCode === 27) {
      dropdown.removeClass("header-nav--visible");
    }
  });
  $(document).click(function (e) {
    if ($(e.target).is(".header-nav")) {
      closeModal();
    }
  });
  var modalButton = $("[data-toggle=modal]");
  var closemodalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closemodalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  $(document).on("keydown", function (e) {
    if (e.keyCode === 27) {
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
    }
  });
  $(document).click(function (e) {
    if ($(e.target).is(".modal__overlay", ".modal__dialog")) {
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    }
  });
  var tabsItem = $(".trends-tabs__item");
  var contentItem = $(".content__item");
  tabsItem.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("trends-tabs__item--active");
    contentItem.removeClass("content__item--active");
    $(activeContent).addClass("content__item--active");
    $(this).addClass("trends-tabs__item--active");
  });
  var mySwiper = new Swiper(".reviews-container", {
    // Optional parameters
    loop: true,
    keyboard: {
      enabled: true,
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: false,
  });
  $(".modal__form").validate({
    errorClass: "invalid",
    messages: {
      password: {
        required: "Введите ваш пароль",
        minlength: "Пароль больше 9 символов",
      },
      login: {
        required: "Введите ваш логин",
      },
    },
  });
  var historySlider = new Swiper(".fashun-slider", {
    // Optional parameters
    keyboard: {
      enabled: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".history__button--next",
      prevEl: ".history__button--prev",
    },
  });
  
  $(".subscribe__form").validate({
    errorClass: "notright",
    messages: {
      email: {
        required: "Введите вашу почту",
        email: "Формат name@domain.com ",
      },
    },
  });
  $('.history__button--next').on({
    click: function() {
      $('.history__button--prev').addClass('new__button-prev').removeClass('old-prev')
      $('.history__button--next').addClass('new__button-next').removeClass('old-next')
    }
  })
  $('.history__button--prev').on({
    click: function() {
      $('.history__button--prev').addClass('old-prev').removeClass('new__button-prev')
      $('.history__button--next').addClass('old-next').removeClass('new__button-next')
    }
  })
});
