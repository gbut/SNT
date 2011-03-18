/***********************************************************
 *
 *	File:			script.js
 *	Author:		RMS
 *	Created:	March 2011
 *
 **********************************************************/

function inspect(obj) {
  var str = '';
  for (var i in obj) str += i + ': ' + obj[i] + '\n';
  alert(str);
}


$(document).ready(function(){
  

	//===============================================
	//	VIDEO PRESENTER
	//  Manages interactions related to hero video (Careers)
	//===============================================
  (function($){
    $.fn.videoPresenter = function(options) {
      return this.each(function() {
        new $vp(this, options);
      });
    };
    
    var defaults = {
      dur:250
    };
    
    /**
     * The videoPresenter object.
     *
     * @constructor
     * @name $.videoPresenter
     * @param Object e The element to create the videoPresenter for.
     * @param Hash o A set of key/value pairs to set as configuration properties.
     */
    $.videoPresenter = function(e, o) {
      this.options            = $.extend({}, defaults, o || {});

      // elements
      var self                = this;
      this.container          = $(e);
      this.win                = $('#presenter');
      this.nav                = $('#presenterNav').find('ul');
      this.heroImg            = this.win.find('.hero');
      this.vBg                = $('#vidOverlay');
      
      // flags, measurements
      this.heroH              = this.heroImg.height();
      
      // attach behaviors
      this.nav.children().each(function(){
//        inspect($(this).find('a'));
        $(this).find('a').bind('click', { obj: self }, self.showVideo);
      });

    };

    // Create shortcut for internal use
    var $vp = $.videoPresenter;
    $vp.fn = $vp.prototype = {};
    $vp.fn.extend = $vp.extend = $.extend;

    $vp.fn.extend({
      /**
       * Shows a video.
       *
       * @name showVideo
       * @type undefined
       */
      showVideo: function(e) {
        var o = e.data.obj; //the instantiated $.videoPresenter object
		    var onComplete = function() { o.vBg.fadeIn(400); };
        o.heroImg.animate(
          { top:-o.heroH },
          o.options.dur,
          'easeOutQuint',
          onComplete
        );
        e.preventDefault();
      }

    });

  })(jQuery);
  
  if ($('#presenterCont').length) $('#presenterCont').videoPresenter();
  

	//===============================================
	//	TEAM PHOTO
	//  Manages interactions related to Team Photo
	//===============================================
  (function($){
    $.fn.teamPhoto = function(options) {
      return this.each(function() {
        new $tp(this, options);
      });
    };

    var defaults = {
      fadeDur:    300,
      animDur:        750,
      easing:     'easeOutQuint',
      popupShim:  15 // accounts for left padding of containing section
    };

    /**
     * The teamPhoto object.
     *
     * @constructor
     * @name $.teamPhoto
     * @param Object e The element to create the teamPhoto for.
     * @param Hash o A set of key/value pairs to set as configuration properties.
     */
    $.teamPhoto = function(e, o) {
      this.options            = $.extend({}, defaults, o || {});

      // elements
      var self                = this;
      this.container          = $(e);
      this.panel              = $('#team_panel');
      this.slider             = $('#team_slider');
      this.photo              = this.panel.find('img.photo');
      this.people             = this.panel.find('ul');
      this.popup              = $('#tooltip');
      this.pointer            = this.popup.find('.pointer');
      
      this.bioName            = $('#bioName');
      this.bioPosition        = $('#bioPosition');
      this.bioLocation        = $('#bioLocation');
      this.bioImg             = $('#bioImg');
      this.bioContent         = $('#bioContent');
//      this.elsToFade          = this.popup.find('.fadeTransition');
      
      // flags, measurements
      this.winW               = this.container.width();
      this.photoW             = this.photo.width();
      this.panelRange         = this.photoW - this.winW;
      this.popupRange         = this.winW - this.popup.outerWidth();
      this.popupLeft          = parseInt(this.popup.css('left'));
      this.pointerLeft        = parseInt(this.pointer.css('left'));
      
      // restore popup position
      this.popup.css({opacity:0, bottom:-125});
      
      // FAKE DATA - figure out how we're actually going to pull this in
      this.bios               = [
        { name:"Jeff Daniels", position:"Actor", location:"Los Angeles", imgsrc:"/img/TEMP_photo_jli_alt.jpg", bio:"<h6>Lorem Dolores</h6><p>Adsum, et qui vereor validus quae praesent pecus vero erat meus abdo.</p><h6>Gratisei Helios</h6><p>Adsum, et qui vereor validus quae praesent pecus vero erat meus abdo.</p>" },
        { name:"Fred Mertz", position:"Neighbor", location:"Havana", imgsrc:"/img/TEMP_photo_jli_alt.jpg", bio:"<h6>Lorem Dolores</h6><p>Adsum, et qui vereor validus quae praesent pecus vero erat meus abdo.</p><h6>Gratisei Helios</h6><p>Adsum, et qui vereor validus quae praesent pecus vero erat meus abdo.</p>" },
        { name:"Jane Li", position:"Engineer", location:"San Francisco", imgsrc:"/img/TEMP_photo_jli_alt.jpg", bio:"<h6>Lorem Dolores</h6><p>Adsum, et qui vereor validus quae praesent pecus vero erat meus abdo.</p><h6>Gratisei Helios</h6><p>Adsum, et qui vereor validus quae praesent pecus vero erat meus abdo.</p>" },
        { name:"Seth MacFarlane", position:"Animator", location:"Providence", imgsrc:"/img/TEMP_photo_jli_alt.jpg", bio:"<h6>Lorem Dolores</h6><p>Adsum, et qui vereor validus quae praesent pecus vero erat meus abdo.</p><h6>Gratisei Helios</h6><p>Adsum, et qui vereor validus quae praesent pecus vero erat meus abdo.</p>" },
        { name:"Debbie Reynolds", position:"Performer", location:"Los Angeles", imgsrc:"/img/TEMP_photo_jli_alt.jpg", bio:"<h6>Lorem Dolores</h6><p>Adsum, et qui vereor validus quae praesent pecus vero erat meus abdo.</p><h6>Gratisei Helios</h6><p>Adsum, et qui vereor validus quae praesent pecus vero erat meus abdo.</p>" },
        { name:"Hunter S. Thompson", position:"Gonzo Journalist", location:"Las Vegas", imgsrc:"/img/TEMP_photo_jli_alt.jpg", bio:"<h6>Lorem Dolores</h6><p>Adsum, et qui vereor validus quae praesent pecus vero erat meus abdo.</p><h6>Gratisei Helios</h6><p>Adsum, et qui vereor validus quae praesent pecus vero erat meus abdo.</p>" },
        { name:"Dave Brubeck", position:"Pianist", location:"Poland", imgsrc:"/img/TEMP_photo_jli_alt.jpg", bio:"<h6>Lorem Dolores</h6><p>Adsum, et qui vereor validus quae praesent pecus vero erat meus abdo.</p><h6>Gratisei Helios</h6><p>Adsum, et qui vereor validus quae praesent pecus vero erat meus abdo.</p>" },
        { name:"Nancy Reagan", position:"First Lady", location:"Santa Barbara", imgsrc:"/img/TEMP_photo_jli_alt.jpg", bio:"<h6>Lorem Dolores</h6><p>Adsum, et qui vereor validus quae praesent pecus vero erat meus abdo.</p><h6>Gratisei Helios</h6><p>Adsum, et qui vereor validus quae praesent pecus vero erat meus abdo.</p>" },
        { name:"John Adams", position:"Founding Father", location:"Braintree", imgsrc:"/img/TEMP_photo_jli_alt.jpg", bio:"<h6>Lorem Dolores</h6><p>Adsum, et qui vereor validus quae praesent pecus vero erat meus abdo.</p><h6>Gratisei Helios</h6><p>Adsum, et qui vereor validus quae praesent pecus vero erat meus abdo.</p>" },
        { name:"Betsy Ross", position:"Seamstress", location:"Virginia", imgsrc:"/img/TEMP_photo_jli_alt.jpg", bio:"<h6>Lorem Dolores</h6><p>Adsum, et qui vereor validus quae praesent pecus vero erat meus abdo.</p><h6>Gratisei Helios</h6><p>Adsum, et qui vereor validus quae praesent pecus vero erat meus abdo.</p>" }
      ];

      // attach behaviors
      this.people.children().each(function(i){
        // determine leftPos of panel needed to center this image
        var imgOffset = Math.round($(this).position().left + ($(this).width()/2));
        var left = Math.round((self.winW/2) - imgOffset);
        
        // determine boundaries and attach data to <li>
        if (left > 0) { // can't scroll far enough to left, move popup
          var popupLeft = self.popupLeft - left;
          var d = { panel:0, handle:0, popup:popupLeft, pointer:self.pointerLeft }
          if (popupLeft < 0) { // popup will be out of bounds too, move pointer
            var delta = -popupLeft;
            d.popup = self.options.popupShim;
            d.pointer -= delta + self.options.popupShim;
          }
        } else if (left < -self.panelRange) { // can't scroll far enough to right, move popup
          var popupLeft = self.popupLeft + Math.abs(left + self.panelRange);
          var d = { panel:-self.panelRange, handle:100, popup:popupLeft, pointer:self.pointerLeft }
          if (popupLeft > self.popupRange) { // popup will be out of bounds too, move pointer
            var delta = popupLeft - self.popupRange;
            d.popup = self.popupRange + self.options.popupShim;
            d.pointer += delta - self.options.popupShim;
          }
        } else {
          var handleLeft = Math.abs(left) / self.panelRange * 100;
          var d = { panel:left, handle:handleLeft, popup:self.popupLeft, pointer:self.pointerLeft }
        }
        $(this).data('positions', d);
        
        // add handler
        $(this).find('a').bind('click', { obj: self, order: i }, self.selectPerson);
      });
      
      // instantiate slider
      if (this.panelRange < 0) {
        this.slider.hide();
      } else {
        this.slider.slider({
          max: this.panelRange,
          create: function(e, ui){
            self.handle = $(self.slider.find('a.ui-slider-handle'));
            // hover effect on scrollbar
            self.handle.hover(
              function(){ $(this).stop().fadeTo(self.options.fadeDur, 0.85); },
              function(){ $(this).stop().fadeTo(self.options.fadeDur, 0.7); }
            );
          },
          start: function(e, ui){
            self.popup.fadeTo(self.options.fadeDur, 0);
          },
          slide: function(e, ui){
            self.panel.css('left',-ui.value);
/*
          },
          stop: function(e, ui){
            console.log(ui.value);
*/
          }
        });
      }
      
    };

    // Create shortcut for internal use
    var $tp = $.teamPhoto;
    $tp.fn = $tp.prototype = {};
    $tp.fn.extend = $tp.extend = $.extend;

    $tp.fn.extend({
      /**
       * Handles selection of a team member.
       *
       * @name selectPerson
       * @type undefined
       */
      selectPerson: function(e) {
        var o = e.data.obj; //the instantiated $.teamPhoto object
        var whichPerson = e.data.order;
        var p = $(this).parent().data('positions');
        
        // animate panel
        o.panel.animate({
            left: p.panel
          },
          {
            duration: o.options.animDur,
            easing: o.options.easing
          });
        // animate popup
        o.loadInfo(whichPerson);
        o.popup.animate({
            left: p.popup
          },
          {
            duration: o.options.animDur,
            easing: o.options.easing,
            queue: false
          }).animate({
              opacity: 1,
            },
            {
              duration: o.options.fadeDur,
              easing: o.options.easing,
              queue: false
            });
        // animate pointer
        o.pointer.animate({
            left: p.pointer
          },
          {
            duration: o.options.animDur,
            easing: o.options.easing
          });
        // animate handle
        // since this is a programmatic move, update UI value manually
        $(o.handle).animate({
            left: p.handle.toString() + '%'
          },
          {
            duration: o.options.animDur,
            easing: o.options.easing,
            complete: function(){ $(this).slider('value', Math.round(p.handle * o.panelRange / 100)); }
          });
        
        e.preventDefault();
      },

      /**
       * Swaps in new user's biographical info.
       *
       * @name loadInfo
       * @type undefined
       */
      loadInfo: function(person) {
        var info = this.bios[person];
        this.bioName.html(info.name);
        this.bioPosition.html(info.position);
        this.bioLocation.html(info.location);
        this.bioImg.attr({ src: info.imgsrc, alt: info.name });
        this.bioContent.html(info.bio);
      }

    });

  })(jQuery);

  if ($('#team').length) $('#team').teamPhoto();


	//===============================================
	//	VOID LINKS (HREF="#")
	//===============================================
	$(function(){
		$('body').click(function(e){
			var clicked = $(e.target);
			if ((clicked.get(0).tagName.toLowerCase() != 'a') && (clicked.parents('a').length)) clicked = clicked.parents('a').get(0);
			if ((typeof clicked) != 'undefined' && $(clicked).attr('href') == '#') e.preventDefault();
		});
	});

	//===============================================
	//	EXTERNAL LINKS
	//===============================================
	$(function(){
		$('a[rel="external"], a.external').each(function() {
			$(this).attr({
			  'class': $(this).attr('class') + ' external',
				'target': 'rms'
			}); 
		});
	});

  //===============================================
  //	CLIENT LOGIN
  //===============================================
  $(function(){
  	$('<div id="loginOverlay"></div>').prependTo($('#body')).click(function(e){
  	  $('#btnClientLogin').triggerHandler('click');
  	});
  	$('#btnClientLogin').click(function(e){
  	  if ($('#login').hasClass('open')) {
    	  $('#loginOverlay').animate({opacity:0}, 150, function(){ $(this).hide(); });
    	  $('#login').removeClass('open');
  	  } else {
    	  $('#loginOverlay').show().animate({opacity:0.72}, 150);
    	  $('#login').addClass('open');
    	  $('#form_login input[type=text]').eq(0).focus();
  	  }
  	});
  });

/*
  //===============================================
  //  INPUT FIELD HINTS
  //  EZPZ Hint v1.1.1; Copyright (c) 2009 Mike Enriquez, http://theezpzway.com; Released under the MIT License
  //===============================================
  (function($){
    $.fn.ezpz_hint = function(options){
      var defaults = {
        hintClass: 'ezpz-hint',
        hintName: 'ezpz_hint_dummy_input'
      };
      var settings = $.extend(defaults, options);
      
      return this.each(function(){
        var hint;
        var dummy_input;
        
        // grab the input's title attribute
        text = $(this).attr('title');
        
        // create a dummy input and place it before the input
        $('<input type="text" name="temp" value="" />').insertBefore($(this));
        
        // set the dummy input's attributes
        hint = $(this).prev('input:first');
        hint.attr('class', $(this).attr('class'));
        hint.attr('size', $(this).attr('size'));
        hint.attr('name', settings.hintName);
        hint.attr('autocomplete', 'off');
        hint.attr('tabIndex', $(this).attr('tabIndex'));
        hint.addClass(settings.hintClass);
        hint.val(text);
        
        // hide the input
        $(this).hide();
        
        // don't allow autocomplete (sorry, no remember password)
        $(this).attr('autocomplete', 'off');
        
        // bind focus event on the dummy input to swap with the real input
        hint.focus(function(){
          dummy_input = $(this);
          $(this).next('input:first').show();
          $(this).next('input:first').focus();
          $(this).next('input:first').unbind('blur').blur(function(){
            if ($(this).val() == '') {
              $(this).hide();
              dummy_input.show();
            }
          });
          $(this).hide();
        });
        
        // swap if there is a default value
        if ($(this).val() != ''){
          hint.focus();
        };
        
        // remove the dummy inputs so that they don't get submitted
        $('form').submit(function(){
          $('.' + settings.hintName).remove();
        });
      });
      
    };
    // attach to relevant inputs
    $('input.ffHint').ezpz_hint();
  })(jQuery);


  //===============================================
  //  LOGIN INPUT FIELD HINTS
  //  EZPZ Hint disables autocomplete - this is an alternative for forms with password fields
  //===============================================
  (function($){
    $.fn.addHint = function(options){
      var defaults = {
        hintClass: 'fHint',
        fudgeDims: { //text fields seem to add extra padding
          top: 2,
          left: 1
        }
      };
      var settings = $.extend(defaults, options);
      
      return this.each(function(){
        // create a dummy input overlay and place it after the input
        var hint = $('<div class="fHint"></div>').insertAfter($(this));
        
        // establish relationship between elements
        hint.data('field', $(this));
        $(this).data('overlay', hint);
        
        // grab the input's title attribute
        var text = $(this).attr('title');
        
        //IE8 chokes on border widths
        //see http://code.google.com/p/jquery-megamenu/issues/detail?id=3
        var bTop  = ($(this).css('border-top-width')=='medium') ? 0 : $(this).css('border-top-width');
        var bLt   = ($(this).css('border-left-width')=='medium') ? 0 : $(this).css('border-left-width');
        
        // set the overlay's attributes based on related input field
        hint.html(text);
        hint.css({
          'width':        $(this).css('width'),
          'height':       $(this).css('height'),
          'padding-top':  $(this).css('padding-top'),
          'padding-left': $(this).css('padding-left'),
          'top':          parseInt($(this).css('margin-top')) + parseInt(bTop) + parseInt($(this).parent().css('padding-top')) + settings.fudgeDims.top,
          'left':         parseInt($(this).css('margin-left')) + parseInt(bLt) + parseInt($(this).parent().css('padding-left')) + settings.fudgeDims.left,
          'font-size':    $(this).css('font-size')
        });
        
        // bind click on the overlay, focus/blur on field
        hint.click(function(){
          $(this).hide();
          $(this).data('field').focus();
        });
        $(this).bind('focus', function(){
          $(this).data('overlay').hide();
        }).bind('blur', function(){
          if (!$(this).val()) $(this).data('overlay').show();
        });
        
        // on page load, show/hide overlay based on data in field
        $(this).triggerHandler('blur');
      });
      
    };
    // attach to relevant inputs
    $('input.addHint').addHint();
  })(jQuery);
*/

  //===============================================
  //  Pre-filter Job Listings on Geolocation
  //===============================================
/*
  $(function(){
    // get regions as set from backend
    geoloc_region = $('#job_listings #geoloc_regions').html();
    if (geoloc_region) {
      
      // initialize message
      msg = '<div>Showing results for:</div>';
      
      // parse list (can be multiple values)
      regions = geoloc_region.split('|');
      
      for (x in regions) {
      
        // hide all listings, then iterate and selectively show
    	  $('#job_listings article').hide().each(function() {
          thisRegion = $(this).find('.region').html();
          if (thisRegion == regions[x]) {
            $(this).show();
            none = 0;
          }
        });
        
        // build string for messaging
        if (x>0) msg += ' &amp; ';
        msg += regions[x];

      }
      
      // hide all category headers, then iterate and selectively show
      $('#job_listings h3').hide().each(function() {
        header = $(this);
        $(this).nextUntil(':not(article)').each(function() {
          if ($(this).is(':visible')) {
            $(header).show();
            return false;
          }
        });
      });
      
      $('#job_search #message').html(msg);
      
    }
    $('#job_listings').css('visibility','visible');
    
  });
*/
  //===============================================
  //  Show/Hide Job Listings [with region, SUPERSEDED]
  //===============================================
/*
  $(function(){
  	$('#form_jvSearch select').change(function() {
  	  
  	  // initialize
  	  none = 1;
  	  $('#none_found').hide();
  	  $('#none_found span').html('');
  	  
  	  // get user values
      region = $('#jvRegion').val();
      category = $('#jvCategory').val();
      
  	  // hide all listings, then iterate and selectively show
  	  $('#job_listings article').hide().each(function() {
        thisRegion = $(this).find('.region').html();
        thisCategory = $(this).prevAll('h3').find('.category').html();
        if ((!region || (thisRegion == region)) && (!category || (thisCategory == category))) {
          $(this).show();
          none = 0;
        }
      });
      
      // hide all category headers, then iterate and selectively show
      $('#job_listings h3').hide().each(function() {
        header = $(this);
        $(this).nextUntil(':not(article)').each(function() {
          if ($(this).is(':visible')) {
            $(header).show();
            return false;
          }
        });
      });
      
      // if none found, show message
      if (none) {
        if (region)
          $('#none_found .region').html(' in '+region);
        if (category)
          $('#none_found .category').html(' for '+category);
        $('#none_found').show();
      }
      
      jobListingsDisplay();
      
  	});
  	
  	// show all
  	$('#job_listings .show_all').live('click', function() {
  	  $(this).hide();
  	  $(this).nextUntil(':not(article)').filter('.hide').hide().removeClass('hide').fadeIn('slow');
  	});
  });
*/
  //===============================================
  //  Show/Hide Job Listings
  //===============================================

  $(function(){
  	$('#form_jvSearch select').change(function() {
      
  	  // initialize
  	  none = 1;
  	  $('#none_found').hide();
  	  $('#none_found span').html('');
  	  $('#job_listings article').removeClass('hide');
  	  $('.show_all').not('#show_all .show_all').remove(); // remove previously inserted links, but not the source
  	  
  	  // get user value
      category = $('#jvCategory').val();
      
  	  // hide all listings, then iterate and selectively show
  	  $('#job_listings article').hide().each(function() {
        thisCategory = $(this).prevAll('h3').eq(0).find('.category').text();
        if (!category || (thisCategory == category)) {
          $(this).show();
          none = 0;
        }
      });
      
      // hide all category headers, then iterate and selectively show
      $('#job_listings h3').hide().each(function() {
        header = $(this);
        $(this).nextUntil(':not(article)').each(function() {
          if ($(this).is(':visible')) {
            $(header).show();
            return false;
          }
        });
      });
      
      // if none found, show message
      if (none) {
        $('#none_found .category').html(' for '+category);
        $('#none_found').show();
      }

      if (!category)
        jobListingsTruncation();
      
  	});
  	
  	// show all
  	$('#job_listings .show_all').live('click', function() {
  	  $(this).hide();
  	  $(this).nextUntil(':not(article)').filter('.hide').hide().removeClass('hide').fadeIn('slow');
  	});
  });
  
  // on page load...
  if ($('#form_jvSearch select').length) jobListingsTruncation();
  

  //===============================================
  //  Sidebar rotation
  //===============================================

  $('#quoteTabs').tabs({
    fx: { opacity:'toggle', duration:400 }// ,
    //     create: function(e, ui) {
    //       $(e.target).tabs('rotate', 5000);
    //     }
  });


  //===============================================
  //  Other tabs
  //===============================================

  $('#legalTabs').tabs({
    fx: { opacity:'toggle', duration:400 }
  });
  
  //===============================================
  //  Form field behaviors
  //===============================================

  // Handled prefilled notes
  $('.prefilled').click(function() {
    return this.value === this.defaultValue ? $(this).val('') : null;
  });
  $('.prefilled').blur(function() {
    return this.value === '' ? $(this).val(this.defaultValue) : null;
  });

  //===============================================
  //  Handling for jobvite apply
  //===============================================

  $('iframe#jobvite').load(function() {
    //$('iframe#jobvite').height('500px');
    $.scrollTo('0');
  });
  
});


/**
 * Declare a global timer for enabling a sort of "onResizeEnd" event.
 */
var _resizeTimer = null;


/**
 * Fn for scrolling to top of page.
 */
/*
function scrollToTop() {
  window.scroll(0,0);
}
*/

/**
 * Wrapper for setting fade durations.
 * PNGs get a black halo when faded in IE, so IE-specific js returns zero.
 */
function fadeDuration(dur) {
  return dur;
}

/**
 * Handle long job listings list
 * max = 4
 */
function jobListingsTruncation() {
  $('#job_listings h3:visible').each(function() {
    if ($(this).nextUntil(':not(article)').filter(':visible').length > 4) {
      $(this).nextUntil(':not(article)').filter(':visible:gt(3)').addClass('hide');
      $(this).nextUntil(':not(article)').filter(':visible:eq(3)').after($('#show_all').html());
    }
  });
}
