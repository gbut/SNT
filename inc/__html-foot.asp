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
            var fudge = 0; /* 2 */
            var lt = (w > navW) ? (navW - w + fudge) : 0;
            var tp = $(this).closest('.ie7').length ? 31 : 29;
            $(this).find('ul.sn').css({'top':tp, 'left':lt});
          });
        };
        
        // custom fonts must render first, else navW value is off
        window.setTimeout(function(){moveSubnavs.call(self);}, 300);
        
        // when a menu is open, iOS provides to way to close it
        $('body').bind('touchend', function(e){
          var clicked = $(e.target);
          if ((clicked.get(0).tagName.toLowerCase() != 'nav') && !clicked.closest('nav').length) {
            $('nav .sfHover').triggerHandler('mouseout');
/*
          } else {
            if ((clicked.hasClass('hasSn') && !clicked.hasClass('sfHover')) || (clicked.closest('.hasSn').length && !clicked.closest('.sfHover').length)) {
              var c = clicked.closest('.hasSn').length ? $(clicked.closest('.hasSn')) : clicked;
              e.stopImmediatePropagation();
              c.triggerHandler('mouseenter');
            }
*/
          }
        });
      }
    }); 
  </script>
  
  <!-- scripts concatenated and minified via ant build script -->
  <script src="/js/script.js"></script>
  <!-- end concatenated and minified scripts-->

  <!-- jquery plugins -->
  <script type="text/javascript" src="/js/libs/flexi-background-jquery.js"></script>
  <script type="text/javascript" src="/js/libs/jquery.cookie.js"></script>
  <script type="text/javascript" src="/js/libs/jquery-validation/jquery.validate.js"></script>
  <script type="text/javascript" src="/js/libs/jquery-scrollto/jquery.scrollto-min.js"></script>
  <script type="text/javascript" src="/js/libs/jquery.touchSwipe-1.2.4.js"></script>
  
  <!--[if lt IE 7 ]>
    <script src="/js/libs/dd_belatedpng.js"></script>
    <script>DD_belatedPNG.fix("img, .png_bg"); // Fix any <img> or .png_bg bg-images. Also, please read goo.gl/mZiyb </script>
  <![endif]-->
