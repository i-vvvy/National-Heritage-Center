$(function () {
  setGnb();
  function setGnb() {
    $('.gnb-wrapper .gnb-nav-list > li > a ').on(
      'mouseenter focus',
      function () {
        $('.gnb-wrapper ').addClass('on');
        $('.gnb-wrapper .gnb-nav-list > li > .inner').addClass('on');
      },
    );
    $('header').on('mouseleave', function () {
      $('.gnb-wrapper ').removeClass('on');
      $('.gnb-wrapper .gnb-nav-list > li > .inner').removeClass('on');
    });
  }
});
