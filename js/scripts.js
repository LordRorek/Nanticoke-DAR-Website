function caspioPatriots() {
  $(document).ready(() => {
    $('a:contains(Cloud Database)').parent().css({
      display: 'none',
    });
    $('td:contains(Records)').parent().parent().css({
      display: 'inline-block',
      float: 'none',
      'text-align': 'center',
    });
    $('td:contains(Records)').parent().parent().parent().parent().addClass('text-center');
  });
  $(document).ready(() => {
    setInterval(test, 1);

    function test() {
      $('a:contains(Cloud Database)').parent().css({
        display: 'none',
      });
      $('td:contains(Records)').parent().parent().css({
        display: 'inline-block',
        float: 'none',
        'text-align': 'center',
      });
      $('td:contains(Records)').parent().parent().parent().parent().addClass('text-center');
    }
  });
}

function navClose() {
  $(document).click((event) => {
    const clickover = $(event.target);
    const $navbar = $('.navbar-collapse');
    const _opened = $navbar.hasClass('in');
    if (_opened === true && !clickover.hasClass('navbar-toggle')) {
      $navbar.collapse('hide');
    }
  });
}
