'use strict';

function caspioPatriots() {
    $(document).ready(function () {
        setInterval(run, 1);

        function run() {
            $('a:contains(Database)').parent().css({
                display: 'none'
            });
            $('td:contains(Records)').parent().parent().css({
                display: 'inline-block',
                float: 'none',
                'text-align': 'center'
            });
            $('td:contains(Records)').parent().parent().parent().parent().addClass('text-center');

            $('a:contains(Cloud Database)').parent().css({
                display: 'none'
            });
            $('td:contains(Records)').parent().parent().css({
                display: 'inline-block',
                float: 'none',
                'text-align': 'center'
            });
            $('td:contains(Records)').parent().parent().parent().parent().addClass('text-center');
        }
    });
}

function navClose() {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var $navbar = $('.navbar-collapse');
        var _opened = $navbar.hasClass('in');
        if (_opened === true && !clickover.hasClass('navbar-toggle')) {
            $navbar.collapse('hide');
        }
    });
}
