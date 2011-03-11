  <!-- Javascript at the bottom for fast page loading -->

  <!-- Grab Google CDN's jQuery. fall back to local if necessary -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.js"></script>
  <script>!window.jQuery && document.write(unescape('%3Cscript src="js/libs/jquery-1.4.2.js"%3E%3C/script%3E'))</script>
  <script type="text/javascript" src="/js/libs/jquery-ui-1.8.10.custom.min.js"></script>

  <!-- <script type="text/javascript" src="/js/libs/cssSandpaper/EventHelpers.js"></script>
  <script type="text/javascript" src="/js/libs/cssSandpaper/cssQuery-p.js"></script>
  <script type="text/javascript" src="/js/libs/cssSandpaper/jcoglan.com/sylvester.js"></script>
  <script type="text/javascript" src="/js/libs/cssSandpaper/cssSandpaper.js"></script> -->

  <script src="/js/libs/selectivizr-1.0.1/selectivizr.js"></script>

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
            if (w > navW) $(this).find('ul.sn').css('left', (navW - w + fudge));
          });
        };
        window.setTimeout(function(){moveSubnavs.call(self);}, 300); // @font-face must render first, else navW value is off
      }
    }); 
  </script>

  
  <!-- scripts concatenated and minified via ant build script-->
  <script src="/js/plugins.js"></script>
  <script src="/js/script.js"></script>
  <!-- end concatenated and minified scripts-->
  
  
  <!--[if lt IE 7 ]>
    <script src="/js/libs/dd_belatedpng.js"></script>
    <script> DD_belatedPNG.fix('img, .png_bg'); //fix any <img> or .png_bg background-images </script>
  <![endif]-->

  <!-- yui profiler and profileviewer - remove for production -->
  <!-- <script src="/js/profiling/yahoo-profiling.min.js"></script>
  <script src="/Fjs/profiling/config.js"></script> -->
  <!-- end profiling code -->


  <!-- asynchronous google analytics: mathiasbynens.be/notes/async-analytics-snippet 
       change the UA-XXXXX-X to be your site's ID -->
  <script>
   var _gaq = [['_setAccount', 'UA-XXXXX-X'], ['_trackPageview']];
   (function(d, t) {
    var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
    g.async = true;
    g.src = ('https:' == location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    s.parentNode.insertBefore(g, s);
   })(document, 'script');
  </script>
  
</body>
</html>