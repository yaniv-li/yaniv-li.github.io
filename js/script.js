(function ($) {
  //site = site || {};
  site = {
    sideMenu: function () {
      $('.menu-works .works').click(function (e) {
        e.preventDefault();
        $(this).next('.works-menu').toggle(600);
      });
      $('.menu-works .works-menu a').click(function (e) {
        e.preventDefault();
        var page = $(this).attr('href').substring(1);
        site.cacheWrap();
        site.menuClick(page);
      });
      $('.menu-about a.about').click(function (e) {
        e.preventDefault();
        site.changeTitle('Danna Eran-Shamir | About');
        $.get('about.html', function (data) {
          site.history('about.html');
          site.replaceMain(data);
          $('.email-link').fadeIn();
        });
      });
      $('.menu-home a.home').click(function (e) {
        e.preventDefault();
        history.pushState("", document.title, window.location.pathname);
        site.changeTitle('Danna Eran-Shamir | Home');
        if (typeof $.data(document.body, 'html') !== 'undefined') {
          var data = $.data(document.body, 'html');
          site.replaceMain(data);
          history.pushState(null, document.title, '/');
          $('.email-link').fadeOut();
        }
      });
    },
    hpMenu: function () {
      $('.image-menu a').click(function (e) {
        e.preventDefault();
        var page = $(this).attr('href').substring(1);
        site.cacheWrap();
        site.menuClick(page);
      });
    },
    menuClick: function (page) {
      $.get(page, function (data) {
        site.replaceMain(data);
        site.history(page);
        site.changeTitle('Danna Eran-Shamir | ' + site.capitalise(page));
      });
    },
    history: function (page) {
      var p = page.substring(0, page.indexOf('.'));
      if (p !== window.location.pathname.substring(1)) {
        history.pushState(null, document.title, p);
        site.hist = true;
      }
    },
    runGalery: function () {
      Galleria.loadTheme('/js/galleria/themes/galleria-classicmod/galleria-classicmod/galleria.classicmod.js');
      $('.side-menu').clone(true).addClass('hidden').appendTo('body');
      Galleria.run('.wrap', {
        dataSource: imgs,
        wait: true,
        carousel: false
      });
    },
    cacheHomeHtml: function () {
      var home = $('div.main').html();
      $.data(document.body, 'html', home);
    },
    replaceMain: function (data, fun) {
      if ($('.main').length > 0) {
      $('div.main').fadeOut(600, function () {
        $('div.main').html(data).fadeIn(600, function () {
          if (typeof fun !== 'undefined') {
            fun.call();
          }
        });
      });
      } else if ($.data(document.body, 'wrap') !== null) {
        $('body').html($.data(document.body, 'wrap'));
      }
    },
    swithLang: function () {
      $('.lang').click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('he')) {
          $('.en-text').fadeOut("slow", function () {
            $('.he-text').fadeIn();
          });
        } else if ($(this).hasClass('en')) {
          $('.he-text').fadeOut("slow", function () {
            $('.en-text').fadeIn();
          });
        }
      });
    },
    loc: function () {
      var qs = window.location.search;
      var qsParts = qs.split('=');
      var section = qsParts[1];
      if (typeof section !== 'undefined') {
        site.menuChange(section);
      }
    },
    menuChange: function (section) {
      var prev = $.data(document.body, 'prevSec');
        if (section === '') {
          var data = $.data(document.body, 'html');
          site.replaceMain(data);
        } else {
          var item = $('.side-menu a.' + section);
          var page = item.attr('href').substring(1);
          $.get(page, function (data) {
            site.replaceMain(data);
            site.changeTitle('Danna Eran-Shamir | ' + site.capitalise(page));
          });
        }
    },
    changeTitle: function (name) {
      if (name !== 'undefined') {
        document.title = name;
      }
    },
    buildEml: function () {
      var n = [];
      n[0] = $('h1 img').attr('alt').slice(0, 5).toLowerCase();
      n[1] = 'esh';
      n[2] = 'gma';
      n[3] = 'il';
      n[4] = 'c';
      var a = n[0] + '.' + n[1] + '@' + n[2] + n[3] + '.' + n[4] + 'om';
      $('.mal').html('<a href="mailto:' + a + '">' + a + '</a>').fadeIn(600);
    },
    capitalise: function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    cacheWrap: function () {
      $.data(document.body, 'wrap', $('.wrap').clone(true));
    },
    init: function () {
      site.cacheHomeHtml();
      site.sideMenu();
      site.hpMenu();
      site.loc();
      site.buildEml();
      $('.side-menu').fitText(0.8, { minFontSize: '10px', maxFontSize: '24px' });
      site.hist = false
      $(window).bind("popstate", function (e) {
        if (site.hist) {
          var sec = location.pathname.substring(1);
            site.menuChange(sec);
        }
      });
    }
  };
  $(function () {
    site.init();
  });
})(jQuery);
