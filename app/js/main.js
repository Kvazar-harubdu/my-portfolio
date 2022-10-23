$(function () {

  $(' .menu__list a, .first-page__link').on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $('.burger-menu, .menu__link').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.burger-menu').toggleClass('burger-menu--open');
  });


  var mixer = mixitup('.portfolio__works');
});

const tabs = document.querySelectorAll('[data-tab]');
const tabsContent = document.querySelectorAll('[data-tab-content]');

tabs.forEach(function (item) {

  item.addEventListener('click', function () {
    let curentBtn = item;

    tabs.forEach(function (item) {
      item.classList.remove('tab-active');
    });

    curentBtn.classList.add('tab-active');

    tabsContent.forEach(function (e) {
      e.classList.add('hidden');
    });

    const contentBox = document.querySelector('#' + this.dataset.tab);
    contentBox.classList.remove('hidden');
  });
});