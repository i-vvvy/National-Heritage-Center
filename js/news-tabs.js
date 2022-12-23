$(function () {
  $('.news-tabs li').click(function () {
    let tab_id = $(this).attr('data-tab');

    $('.news-tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $('#' + tab_id).addClass('current');
  });
});
