(function ($) {
    var site = site || {};
    site = {
      sideMenu: function () {
        $('.menu-works .works').click( function (e) {
          $(this).next('.works-menu').toggle(600);
        });
        $('.menu-works .works-menu a').click( function (e) {
          var page = $(this).attr('href').substring(1);
          if ($('.works-menu').is(':hidden')){
            $('.works-menu').toggle(600);
          }
          $.get(page + '.html', function (data) {
            site.replaceMain(data, site.gStart);
            site.changeTitle('Danna Eran-Shamir | ' + site.capitalise(page)) ;
          });
        });
        $('.menu-about a.about').click( function () {
          site.changeTitle('Danna Eran-Shamir | About');
          $.get('about.html', function (data) {
            site.replaceMain(data, site.swithLang);
          });
        });
        $('.menu-home a.home').click( function (e) {
          e.preventDefault();
          history.pushState("", document.title, window.location.pathname);
          site.changeTitle('Danna Eran-Shamir | Home');
          if(typeof $.data(document.body, 'html') !== 'undefined') {
            var data = $.data(document.body, 'html');
            site.replaceMain(data);
          }
        });
      },
      gStart: function () {
        $('#gstart').yoxview({
            images: imgs,
            popupResizeTime:400,
            backgroundOpacity:1,
            loopPlay:false
        });
      },
      cacheHomeHtml: function () {
        var home = $('div.main').html();
        $.data(document.body, 'html', home);
      },
      replaceMain: function (data, fun) {
        $('div.main').fadeOut(600, function () {
          $('div.main').html(data).fadeIn(600, function () {
            if(typeof fun !== 'undefined') {
              fun.call();
            }
          });
        });
      },
      swithLang: function () {
        $('div.about-text').quickFlip({openSpeed:600, closeSpeed:600});
        site.buildEml();
      },
      hash: function () {
        var hash = window.location.hash;
        if(hash !== '') {
          site.menuChange(hash);
        }
      },
      menuChange: function (hash) {
        var item = $('.side-menu a[href=' + hash + ']');
        item.click();
      },
      changeTitle: function (name) {
        if (name !== 'undefined') {
          document.title = name;
        }
      },
      buildEml: function () {
        var n =[];
        n[0] = $('h1 img').attr('alt').slice(0, 5).toLowerCase();
        n[1] = 'esh';
        n[2] = 'gma';
        n[3] = 'il';
        n[4] = 'c';
        var a = n[0] + '.' + n[1] + '@' + n[2] + n[3] + '.' + n[4] + 'om';
        $('.mal').html('<a href="mailto:' + a + '">' + a + '</a>').fadeIn(600);
      },
      capitalise: function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      },
      init: function () {
        site.cacheHomeHtml();
        site.sideMenu();
        site.hash();
        $('.side-menu').fitText(0.8, { minFontSize: '10px', maxFontSize: '24px' });
      }
    };
    $(function () {
      site.init();
    });



})(jQuery);
