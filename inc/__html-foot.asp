  <!-- Javascript at the bottom for fast page loading -->

  <!-- Grab Google CDN's jQuery. fall back to local if necessary -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
  <script>!window.jQuery && document.write(unescape('%3Cscript src="/js/libs/jquery-1.5.1.min.js"%3E%3C/script%3E'))</script>
  <script type="text/javascript" src="/js/libs/jquery-ui-1.8.10.custom.min.js"></script>

  <!--[if (gte IE 6)&(lte IE 8)]>
    <script src="/js/libs/selectivizr-1.0.1/selectivizr.js"></script>
  <![endif]-->

  <script src="/js/libs/superfish-1.4.8/js/hoverIntent.js"></script>
  <script src="/js/libs/superfish-1.4.8/js/superfish.js"></script>
  <script>
    $('ul.sf-menu').superfish({ 
      delay:       100,
      animation:   {opacity:'show'},
      speed:       100,
      autoArrows:  false,
      dropShadows: false,
      onInit:      function(){ // keep submenus in bounds
        var self = this;
        var moveSubnavs = function(){
          var navW = $(this).parent().outerWidth();
          $(this).children().each(function(i, el){
            var p = $(this).position();
            var w = Math.round(p.left) + 494; // horiz submenu position plus submenu width
            var fudge = 2;
            var lt = (w > navW) ? (navW - w + fudge) : 0;
            var tp = $(this).closest('.ie7').length ? 31 : 29;
            $(this).find('ul.sn').css({'top':tp, 'left':lt});
          });
        };
        window.setTimeout(function(){moveSubnavs.call(self);}, 300); // custom fonts must render first, else navW value is off
      }
    }); 
  </script>

  
  <!-- scripts concatenated and minified via ant build script -->
  <script src="/js/plugins.js"></script>
  <script src="/js/script.js"></script>
  <!-- end concatenated and minified scripts-->

  <!-- analog clock for contact page -->
  <!--[if IE]><script type="text/javascript" src="/js/libs/coolclock/excanvas.js"></script><![endif]-->
  <script type="text/javascript" src="/js/libs/coolclock/coolclock.js"></script>
  <script type="text/javascript" src="/js/libs/coolclock/moreskins.js"></script>
  
  <!-- jquery plugins -->
  <script type="text/javascript" src="/js/libs/jquery.cookie.js"></script>
  <script type="text/javascript" src="/js/libs/jquery-validation/jquery.validate.js"></script>
  <script type="text/javascript" src="/js/libs/jquery-scrollto/jquery.scrollto-min.js"></script>
  <script type="text/javascript" src="/js/libs/tipsy/jquery.tipsy.js"></script>
  
  <!-- canvas maps -->
  <script type="text/javascript" src="/js/libs/raphael-min.js"></script>
  <script type="text/javascript" src="/js/libs/raphael-svg-import.js"></script>
  <script type="text/javascript" src="/js/libs/countries.js"></script>
  
  <!--[if lt IE 7 ]>
    <script src="/js/libs/dd_belatedpng.js"></script>
    <script>DD_belatedPNG.fix("img, .png_bg"); // Fix any <img> or .png_bg bg-images. Also, please read goo.gl/mZiyb </script>
  <![endif]-->

  <!-- mathiasbynens.be/notes/async-analytics-snippet Change UA-XXXXX-X to be your site's ID -->
  <script>
    var _gaq=[["_setAccount","UA-22492098-1"],["_trackPageview"]];
    (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=1;
    g.src=("https:"==location.protocol?"//ssl":"//www")+".google-analytics.com/ga.js";
    s.parentNode.insertBefore(g,s)}(document,"script"));
  </script>
  
  <!-- ShareThis BEGIN -->
  <script type="text/javascript">var switchTo5x=true;</script>
  <script type="text/javascript" src="http://w.sharethis.com/button/buttons.js"></script>
  <script type="text/javascript">
    stLight.options({
      onhover:    'false',
      headerTitle:'Share this Job Listing',
      theme:      '2',
      publisher:  '39c6375d-95de-4f6f-9413-f8e748bff7f3',
      tracking:   'google'
    });
    
  </script>
  <!-- ShareThis END -->
  
