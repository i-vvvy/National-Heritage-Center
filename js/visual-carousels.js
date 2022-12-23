$(function () {
  $('.slider-list').slick({
    arrows: false,
    fade: true,
    dots: true,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplaySpeed: 5000,
    customPaging: function (slider, i) {
      let tit = $(slider.$slides[i]).find('.dot').html();
      return '<div class="pager-tit" class= "+ i +">' + tit + '</div>';
    },
  });
});
