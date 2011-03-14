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
      this.heroImg            = this.win.find('img.hero');
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
  jobListingsTruncation();
  

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
