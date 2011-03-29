/***********************************************************
 *
 *	File:			script.js
 *	Author:		RMS
 *	Created:	March 2011
 *
 **********************************************************/

/* RMS code section. begin
Created by Wing
rms_todo: remove at implementation
*/

var gbl_env = "";

switch(window.location.hostname)
{
   case "cateamsite03":
   case "www.rms.com":
     gbl_env = "rms";
     break;
   default:
     gbl_env = "";
}

/* RMS code section. end */


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
      dur:400
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
      this.btnClose           = this.vBg.find('a.close');
      this.iframe             = $('#vidFrame');
      
      // flags, measurements
      this.heroH              = this.heroImg.height();
      
      // attach behaviors
      this.nav.children().each(function(){
        $(this).find('a').bind('click', { obj: self }, self.showVideo);
      });
      $(this.btnClose).bind('click', { obj: self }, self.hideVideo);

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
        var src = $(this).attr('href');
		    var onComplete = function() {
		      o.vBg.css({ top:0 });
		      o.iframe.attr({ src: src });
		    };
        o.heroImg.animate(
          { top:-o.heroH },
          o.options.dur,
          'easeOutQuint',
          onComplete
        );
        e.preventDefault();
      },

      /**
       * Hides the video overlay.
       *
       * @name hideVideo
       * @type undefined
       */
      hideVideo: function(e) {
        var o = e.data.obj; //the instantiated $.videoPresenter object
		    o.vBg.css({ top:-10000 });
		    o.iframe.attr({ src: '' });
        o.heroImg.animate(
          { top:0 },
          o.options.dur,
          'easeOutQuint'
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
      animDur:    750,
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

      // fade animations will be different for IE
      this.specialFade        = $('html').is('.ie8, .ie7');
      
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
      
      // flags, measurements
      this.winW               = this.container.width();
      this.photoW             = this.photo.width();
      this.panelRange         = this.photoW - this.winW;
      this.popupRange         = this.winW - this.popup.outerWidth();
      this.popupLeft          = parseInt(this.popup.css('left'));
      this.pointerLeft        = parseInt(this.pointer.css('left'));
      
      // restore popup position
//      this.popup.css({opacity:0, bottom:-125});
      this.teamFade(this.popup, 0, 0);
      this.popup.css({bottom:-135});
      
      // pull in JSON data
      /*
      rms_todo: remove gbl_env and non-rms code (else)
      */
      if (gbl_env == "rms")
      {
        $.ajax({
          type: "POST",
          contentType: "application/json; charset=utf-8",
          url: "/careers.asmx/get_employee_profiles",
          cache: false,
          context: this,
          data: "{}",
          dataType: "json",
          success: function(msg) {
            this.bios = $.parseJSON(msg.d);                    
          }
        });

      } else {
        $.ajax({
          url: "/careers/get_employee_profiles.txt",
          context: this,
          success: function(data){
            this.bios = $.parseJSON(data);
          }
        });
      }

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
//            self.popup.fadeTo(self.options.fadeDur, 0);
            self.teamFade(self.popup, self.options.fadeDur, 0);
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
        if (o.specialFade) {
          o.popup.show().animate({
              left: p.popup
            },
            {
              duration: o.options.animDur,
              easing: o.options.easing,
              queue: false
            });
        } else {
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
        }
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
        this.bioName.html(info.fullname);
        this.bioPosition.html(info.position);
        this.bioLocation.html(info.location);
        this.bioImg.attr({ src: info.img_src, alt: info.fullname });
        this.bioContent.html(info.biography['#cdata-section']);
      },

      /**
       * Forks fade animations for IE and non-IE, since IE doesn't handle opacity changes well (esp with css3PIE).
       *
       * @name teamFade
       * @type undefined
       */
      teamFade: function(el, duration, opacity) {
        if (this.specialFade) {
          if (!opacity) $(el).hide();
            else $(el).show();
        } else {
          $(el).fadeTo(duration, opacity);
        }
      }

    });

  })(jQuery);

  if ($('#team').length) $('#team').teamPhoto();


	//===============================================
	//	CHAT WINDOW
	//  Manages custom chat interactions
	//===============================================
  (function($){
    $.fn.chatWindow = function(options) {
      return this.each(function() {
        new $cw(this, options);
      });
    };
    
    var defaults = {
      dur: 400,
      topVisible: 0,
      topHidden: -10000
    };
    
    /**
     * The chatWindow object.
     *
     * @constructor
     * @name $.chatWindow
     * @param Object e The element to create the chatWindow for.
     * @param Hash o A set of key/value pairs to set as configuration properties.
     */
    $.chatWindow = function(e, o) {
      this.options            = $.extend({}, defaults, o || {});

      // elements
      var self                = this;
      this.win                = $(e);
      this.threadArea         = $('#lp_thread');
      this.typeArea           = $('#lp_type');
//      this.btnSend            = $('#lp_send');
      this.btnStart           = $('.openChatWin');
      this.btnEnd             = $('#btn_end_chat');
      this.agentTyping        = $('#lp_agent_typing');
      this.btnEmail           = $('#btn_email_transcript');
      this.emailOverlay       = $('#lp_email_transcript');
      this.emailAddress       = this.emailOverlay.find('input');
      this.emailSend          = this.emailOverlay.find('button');
      this.emailCancel        = this.emailOverlay.find('a');
      
      // flags, measurements
      //this.agentName          = 'RMS';
      
      // attach behaviors
      this.btnStart.each(function(){
        $(this).bind('click', { obj: self }, self.requestChat);
      });
//      $(this.btnSend).bind('click', { obj: self }, self.sendText);
      $(this.typeArea).bind('keypress', { obj: self }, self.sendText);
      $(this.btnEnd).bind('click', { obj: self }, self.hideWin);
      $(this.btnEmail).bind('click', { obj: self }, self.toggleEmailTranscript);
      $(this.emailCancel).bind('click', { obj: self }, self.toggleEmailTranscript);
      $(this.emailSend).bind('click', { obj: self }, self.emailTranscript);
      
      // load session
      this.setup();

    };

    // Create shortcut for internal use
    var $cw = $.chatWindow;
    $cw.fn = $cw.prototype = {};
    $cw.fn.extend = $cw.extend = $.extend;

    $cw.fn.extend({
      /**
       * Sets up a chat session.
       *
       * @name setup
       * @type undefined
       */
      setup: function() {
        // attach object to chat win so we have access to it on LP script load
        this.win.data('cw', this);
      },

      /**
       * Shows the chat window and loads the application.
       *
       * @name showWin
       * @type undefined
       */
      showWin: function() {
        this.win.css({ top: this.options.topVisible });
        this.btnStart.css({ top: this.options.topHidden });
      },

      /**
       * Hides the chat window and ends the chat session.
       *
       * @name hideWin
       * @type undefined
       */
      hideWin: function(e) {
        var o = e.data.obj; //the instantiated $.chatWindow object
        
        // define a callback
        var _hideWin = function(){
          o.win.css({ top: o.options.topHidden });
          o.btnStart.css({ top: o.options.topVisible });
          o.threadArea.empty();
          o.typeArea.val('');
          o.agentTyping.hide();
          window.clearTimeout(st);
        }
        
        // alert the user, then end session
        o.lpc.endChat();
        o.addChatText(null, 'Ending chat session...', 'system');
        var st = window.setTimeout(function(){ _hideWin(); }, 3000);
        
        e.preventDefault();
      },

      /**
       * Checks if any operators are available.
       *
       * @name checkAvailability
       * @type undefined
       */
      checkAvailability: function() {
        this.lpc.chatAvailability();
      },

      /**
       * Request chat from available operator.
       *
       * @name requestChat
       * @type undefined
       */
      requestChat: function(e) {
        var o = e.data.obj; //the instantiated $.chatWindow object
        o.showWin();
        o.lpc.requestChat();
        e.preventDefault();
      },

      /**
       * Adds chat text to the thread.
       *
       * @name addChatText
       * @type undefined
       */
      addChatText: function(by, text, klass) {
        var who = (by != null) ? '<span class="who">' + by + ': </span>' : '';
        var str = who + text.replace(/\n/gi, '<br />');
        this.threadArea.append($('<div class="' + klass + '">' + str + '</div>')).scrollTop(50000);
      },

      /**
       * Adds an error message to the thread.
       *
       * @name addChatError
       * @type undefined
       */
      addChatError: function(text, isError) {
        var e = isError || false;
        var prefix = e ? '<strong>ERROR:</strong> ' : '';
        this.threadArea.append($('<div class="error">' + prefix + text + '</div>')).scrollTop(50000);
      },

      /**
       * Sends chat text.
       *
       * @name sendText
       * @type undefined
       */
      sendText: function(e) {
        // only alter behavior if ENTER key was pressed
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code != 13) return true;
        
        var o = e.data.obj; //the instantiated $.chatWindow object
        var t = $(this).val();
        if (t != ''){
          o.lpc.addLine(t.replace(/\n/gi, ' *** ')); // textarea line breaks don't get sent; replace here with some other identifiable string for agent
          o.addChatText(o.lpc.getVisitorName(), t, 'user');
          o.typeArea.val('');
        }
        e.preventDefault();
        return true;
      },
/* the version below is used with a SEND button */
/*
      sendText: function(e) {
        var o = e.data.obj; //the instantiated $.chatWindow object
        var t = o.typeArea.val();
        if (t != ''){
          o.lpc.addLine(t.replace(/\n/gi, ' *** ')); // textarea line breaks don't get sent; replace here with some other identifiable string for agent
          o.addChatText(o.lpc.getVisitorName(), t, 'user');
          o.typeArea.val('');
        }
        return true;
      },
*/

      /**
       * Opens/dismisses dialog for emailing the chat transcript.
       *
       * @name toggleEmailTranscript
       * @type undefined
       */
      toggleEmailTranscript: function(e) {
        var o = e.data.obj; //the instantiated $.chatWindow object
        if (o.emailOverlay.is(':visible')) o.emailOverlay.hide();
          else o.emailOverlay.show();
        e.preventDefault();
      },

      /**
       * Emails the chat transcript.
       *
       * @name emailTranscript
       * @type undefined
       */
      emailTranscript: function(e) {
        var o = e.data.obj; //the instantiated $.chatWindow object
        // validate
        if (o.emailAddress.val() == '') return alert('Please enter an email address.');
        o.lpc.requestTranscriptEmail(o.emailAddress.val());
      },

      /**
       * Handler for checking for available operators.
       *
       * @name onChatAvailable
       * @type undefined
       */
      onChatAvailable: function(availObj) {
        if (availObj.availability == true) {
          // initiate chat
          _cw.btnStart.css({ top: _cw.options.topVisible });
          _cw.requestChat();
        } else {
          
        }
      },

      /**
       * Handler for when a chat session is terminated by the server.
       *
       * @name onChatStop
       * @type undefined
       */
      onChatStop: function(reasonID, reasonText) {
        _cw.addChatError(reasonText);
      },

      /**
       * Handler for sending a new line.
       *
       * @name onChatLine
       * @type undefined
       */
      onChatLine: function(line) {
        //alert(line.type);
        switch (line.type) {
          case '1': // operator
          case '3': // url
          case '4': // html
            _cw.addChatText(line.by, line.text, 'operator');
            break;
          default: // everything else
            _cw.addChatText(null, line.text, 'system');
        }
      },

      /**
       * Handler for checking if an agent is typing.
       *
       * @name onChatAgentTyping
       * @type undefined
       */
      onChatAgentTyping: function(isTyping) {
        if (isTyping) _cw.agentTyping.show();
          else _cw.agentTyping.hide();
      },

      /**
       * Handler for chat errors.
       *
       * @name onChatError
       * @type undefined
       */
      onChatError: function(errObj) {
        _cw.addChatError(errObj.text, true);
      }

    });

  })(jQuery);
  
  if ($('#chat_win').length) {
    // instantiate
    $('#chat_win').chatWindow();
    _cw = $('#chat_win').data('cw');

    // config
    var lpc;
    lpChatConfig = {
      apiKey : '280e4c40d2524aee8895e299efc4359c', // 66a2b5d32
      lpServer : 'dev.liveperson.net',
      lpNumber : 'P89578626', // small business test account
      onLoad : function() {
        // init session
        _cw.lpc = new lpChat();
        // check operator availability
        _cw.checkAvailability();
      },
      onLine : _cw.onChatLine,
      onError : _cw.onChatError,
      onAvailability : _cw.onChatAvailable,
      onStop : _cw.onChatStop,
      onAgentTyping : _cw.onChatAgentTyping
    };
    lpChatConfig.lpAddScript = function(src, ignore) {var c = lpChatConfig;if(typeof(c.lpProtocol)=='undefined'){c.lpProtocol = (document.location.toString().indexOf("https:")==0) ? "https" : "http";}if (typeof(src) == 'undefined' || typeof(src) == 'object') {src = c.lpChatSrc ? c.lpChatSrc : '/hcp/html/lpChatAPI.js';};if (src.indexOf('http') != 0) {src = c.lpProtocol + "://" + c.lpServer + src + '?site=' + c.lpNumber;} else {if (src.indexOf('site=') < 0) {if (src.indexOf('?') < 0)src = src + '?'; else src = src + '&';src = src + 'site=' + c.lpNumber;}};var s = document.createElement('script');s.setAttribute('type', 'text/javascript');s.setAttribute('charset', 'iso-8859-1');s.setAttribute('src', src);document.getElementsByTagName('head').item(0).appendChild(s);}
    if (window.attachEvent) window.attachEvent('onload', lpChatConfig.lpAddScript);
      else window.addEventListener('load', lpChatConfig.lpAddScript, false);
  }
  

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
  //  canvas maps
  //===============================================

  if ($('#svgmap').length) {
    var r = Raphael('svgmap', 940, 477);
    var attr = {
      fill: "#333",
      stroke: "#666",
      "stroke-width": 1,
      "stroke-linejoin": "round"
    };
    var countries = {};
    countries['ca'] = r.path("M243,105c3,0,6,0,9,0c0.006,2.86,0.346,4.291,1,6" + 
"    		c1.666-1.333,3.334-2.667,5-4c0-1.667,0-3.333,0-5c2,0,4,0,6,0c1.756,3.316,2.059,4.368,2,10c-0.807,0.395-2,2-2,2" + 
"    		c-2.333,0-4.667,0-7,0c-5,5.333-10,10.667-15,16c-2,1.667-4,3.333-6,5c0,2.333,0,4.667,0,7c1.139,1.139,0.398,0.003,1,2" + 
"    		c3.1,0.781,3.753,2.436,6,4c0,0.334,0,0.666,0,1c2.333,0,4.667,0,7,0c1,1.333,2,2.667,3,4c3.451,1.662,8.493-1.24,11,1" + 
"    		c1.885,2.051,1.1,9.224,1,13c2.612,1.383,1.693,1.77,6,2c0.844-1.135-0.127-0.146,1-1c0-4.333,0-8.667,0-13" + 
"    		c0.666-0.334,1.334-0.666,2-1c2.342-2.678,2.867-3.733,3-9c-3.871-2.244-3.197-7.856-3-14c2.874-1.079,7.69-1.044,12-1" + 
"    		c2.333,2.667,4.667,5.333,7,8c0,1.333,0,2.667,0,4c1,0,2,0,3,0c0,0.333,0,0.667,0,1c1.82,0.796,0.779,1.257,2,0" + 
"    		c2.808-1.65,3.402-4.03,7-5c0,0.333,0,0.667,0,1c0.334,0,0.666,0,1,0c0,1,0,2,0,3c1,0.667,2,1.333,3,2c0,0.333,0,0.667,0,1" + 
"    		c3.666,3.333,7.334,6.667,11,10c0,1.333,0,2.667,0,4c0.666,0.334,1.334,0.666,2,1c1.193,1.629,0.963,4.09,1,7c-1.333,1-2.667,2-4,3" + 
"    		c0,0.334,0,0.666,0,1c-5.666,0-11.334,0-17,0c-3.674,6.216-9.7,6.636-10,17c-0.666,0-1.334,0-2,0c0,0.666,0,1.334,0,2c-3,0-6,0-9,0" + 
"    		c-1,1.666-2,3.334-3,5c-1.333,0-2.667,0-4,0c-0.334,0.666-0.666,1.334-1,2c-1.441,1.148-2.887,1.5-5,2c0,0.666,0,1.334,0,2" + 
"    		c-2,0-4,0-6,0c0.334-3,0.666-6,1-9c-0.666,0-1.334,0-2,0c-0.317-3.543-1.314-3.949-2-7c-2.232-0.842-5.438-1.029-9-1" + 
"    		c0-0.334,0-0.666,0-1c-1.333,0-2.667,0-4,0c0-0.666,0-1.334,0-2c-3.116-0.406-3.084-0.721-5-2c0-0.334,0-0.666,0-1" + 
"    		c-1.666,0-3.334,0-5,0c0-0.334,0-0.666,0-1c-0.666,0-1.334,0-2,0c0-0.334,0-0.666,0-1c-20.998,0-42.002,0-63,0" + 
"    		c-1.855-3.151-4.925-4.021-6-8c-2.826-0.668-3.771-1.85-5-4c-0.333,0-0.667,0-1,0c0-1.333,0-2.667,0-4" + 
"    		c-0.436-0.905-1.274,0.049-2-3c-3.087-0.705-4.254-1.949-5-5c-2.762-0.723-2.237-0.279-3-3c-3.087-0.705-4.254-1.949-5-5" + 
"    		c-2.762-0.723-2.237-0.279-3-3c-3.137-0.56-4.19-0.974-5-4c-1.333,0-2.667,0-4,0c0-11.666,0-23.334,0-35c8.333,0,16.667,0,25,0" + 
"    		c0-0.333,0-0.667,0-1c1.333,0,2.667,0,4,0c0-0.333,0-0.667,0-1c6,0,12,0,18,0c0.944,1.801,1.385,1.575,2,4" + 
"    		c2.715,0.751,3.044,1.651,5,3c0,0.333,0,0.667,0,1c4,0,8,0,12,0c10.333,0,20.667,0,31,0c0-0.333,0-0.667,0-1" + 
"    		c1.452-0.813,1.7-0.706,4-1c0,2,0,4,0,6c0.334,0,0.666,0,1,0c0-0.333,0-0.667,0-1c0.334,0,0.666,0,1,0c0-1.333,0-2.667,0-4" + 
"    		c0.666-0.333,1.334-0.667,2-1c1.602-2.279,0.471-3.336,0-6c-3.795-0.869-4.068-2.31-4-7c1.604-0.605,2.375-0.881,5-1" + 
"    		C241.439,97.729,243.084,94.617,243,105z").attr(attr);
    countries['cn'] = r.path("M732,163c1.666,0,3.334,0,5,0c0.667,1,1.333,2,2,3" + 
"   		c0.333,0,0.667,0,1,0c0,0.667,0,1.333,0,2c1.132,1.275,3.573,0.993,6,1c0-0.333,0-0.667,0-1c1,0,2,0,3,0c0,1.667,0,3.333,0,5" + 
"    		c-3.146,1.873-2.838,3.699-8,4c0,2.333,0,4.667,0,7c-1.333,1-2.667,2-4,3c0,0.333,0,0.667,0,1c-2,0-4,0-6,0c-1.666,2-3.334,4-5,6" + 
"    		c-1.333,0-2.667,0-4,0c0,0.333,0,0.667,0,1c-0.333,0-0.667,0-1,0c0.217-4.834,1.656-3.958-4-4c-1.467,2.719-3.078,4.57-7,5" + 
"    		c0,0.667,0,1.333,0,2c3.651,2.182,3.491,3.971,10,4c0,0.666,0,1.334,0,2c-0.667,0-1.333,0-2,0c-0.724,2.762-0.279,2.237-3,3" + 
"    		c0.399,3.142,0.755,3.05,2,5c0.333,0,0.667,0,1,0c-0.333,2-0.667,4-1,6c0.667,0.334,1.333,0.666,2,1c0.583,1.611-0.982,1.895-1,2" + 
"    		c-0.236,1.395,0.688-0.379,1,1c0,2,0,4,0,6c-4.799,3.024-1.038,2.405-3,6c-0.333,0-0.667,0-1,0c-3,3.333-6,6.667-9,10" + 
"    		c-1.666,0.334-3.334,0.666-5,1c-0.667,1-1.333,2-2,3c-3.666,0-7.334,0-11,0c-0.333-1-0.667-2-1-3c-1.139-1.139-0.398-0.004-1-2" + 
"    		c-3.333,0.334-6.667,0.666-10,1c-0.516,1.316-0.394-0.277-1,1c0,1,0,2,0,3c-0.333,0-0.667,0-1,0c-1.077-0.923,0.076-0.663-2-1" + 
"    		c0,0.333,0,0.667,0,1c-1.245,0.67-0.563-0.619-1-1c-0.333,0-0.667,0-1,0c0-1.666,0-3.334,0-5l-1-1c-1,0-2,0-3,0" + 
"    		c0-0.666,0-1.334,0-2c0.667-0.334,1.333-0.666,2-1c0-3,0-6,0-9c-1.135-0.844-0.146,0.127-1-1c-1.528,0.577-1.641,0.762-4,1" + 
"    		c-0.776-2.995-0.616-2.631-4-3c0,0.334,0,0.666,0,1c-0.667,0-1.333,0-2,0c-0.333,0.666-0.667,1.334-1,2" + 
"    		c-2.433,1.098-16.955-0.328-18-1c-1.666-2-3.334-4-5-6c-1.613-0.685-1.877,0.976-2,1c-1.697,0.339-1.73-0.939-2-1" + 
"    		c-0.333,0-0.667,0-1,0c0,0.334,0,0.666,0,1c-0.667-0.334-1.333-0.666-2-1c-0.706-1.867-0.993-3.91-1-7c1.183-1.266,1.824-5.707,2-8" + 
"    		c-3,0-6,0-9,0c-0.333-1.333-0.667-2.667-1-4c-0.333,0-0.667,0-1,0c0-1,0-2,0-3c-0.333,0-0.667,0-1,0c-1.393-1.88-2.247-2.335-3-5" + 
"    		c0.934-0.442,1.992-1.996,2-2c1.666,0,3.334,0,5,0c0.333-0.667,0.667-1.333,1-2c0.667,0,1.333,0,2,0c0-0.333,0-0.667,0-1" + 
"    		c0.667,0,1.333,0,2,0c0.667-1,1.333-2,2-3c0.333,0,0.667,0,1,0c0-3.333,0-6.667,0-10c1.333,0,2.667,0,4,0" + 
"    		c0.81-1.314,0.704-1.178,2-2c0-1.333,0-2.667,0-4c1.666,0.333,3.334,0.667,5,1c0-0.333,0-0.667,0-1c0.333,0,0.667,0,1,0" + 
"    		c0.333-2,0.667-4,1-6c2,0.333,4,0.667,6,1c0,0.667,0,1.333,0,2c2.784-0.549,0.101-0.77,3,0c0.386,0.795,2,2,2,2" + 
"    		c1.698,3.79-2.758,4.103,1,8c0,0.333,0,0.667,0,1c2,0,4,0,6,0c0-0.333,0-0.667,0-1c0.667,0.333,1.333,0.667,2,1" + 
"    		c0.944,1.801,1.385,1.575,2,4c0.667,0,1.333,0,2,0c0.333,0.667,0.667,1.333,1,2c3.333,0,6.667,0,10,0c0.333,0.667,0.667,1.333,1,2" + 
"    		c0.667,0,1.333,0,2,0c0,0.333,0,0.667,0,1c2.045,0.71,5.765-0.492,7-1c0-0.333,0-0.667,0-1c2.666,0,5.334,0,8,0" + 
"    		c0.667-1,1.333-2,2-3c1-0.333,2-0.667,3-1c0.874-1.585-1.296-3.74-1-4c0.667,0,1.333,0,2,0c0,0.333,0,0.667,0,1" + 
"    		c1.666,0,3.334,0,5,0c1.666-2.333,3.334-4.667,5-7c2.808,0.833,3.899-0.068,7,1c-1.735-2.901-1.851-0.914-3-2c-1.028-0.971,1-1,1-1" + 
"    		c1.108-1.595-1.549-0.875-2-1c0,0.333,0,0.667,0,1c-1.333,0-2.667,0-4,0c0-0.333,0-0.667,0-1c-0.333,0-0.667,0-1,0c0-2,0-4,0-6" + 
"    		c2.666,0,5.334,0,8,0c0.333-1.667,0.667-3.333,1-5c0.667-0.333,1.333-0.667,2-1c0-1.333,0-2.667,0-4c0.549-1.303,0.467,0.31,1-1" + 
"    		c1.446-0.57,1.878-0.467,4-1c0-0.333,0-0.667,0-1c1.397-0.215-0.374,0.667,1,1c1.666,0,3.334,0,5,0" + 
"    		C731.069,155.392,732.026,155.788,732,163z").attr(attr);
  }

  if ($('#worldmap').length) {
    WorldMap({
      id: "worldmap",
      bgcolor: "#f3f3f3",
      fgcolor: "#3472b6",
      bordercolor: "#6f8fc6",
      borderwidth: 1,
      padding: 10
    });
  }


  //===============================================
  //  Sidebar rotation
  //===============================================

  // TODO: uncomment create fn for production
  $('#quoteTabs').tabs({
    fx: { opacity:'toggle', duration:400 }// ,
    //     create: function(e, ui) {
    //       $(e.target).tabs('rotate', 5000);
    //     }
  });


  //===============================================
  //  Other tabs
  //===============================================

  $('#riskTabs').tabs({
    //fx: { opacity:'toggle', duration:400 }
  });
  
  $('#legalTabs').tabs({
    fx: { opacity:'toggle', duration:400 }
  });
  
  $('#vidCont').tabs();
  
  //===============================================
  //  Form field behaviors
  //===============================================

  // Handle prefilled notes
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
  
  //===============================================
  //  Contact page: rollovers for offices/markers/clocks
  //===============================================

  // class specifies both source and target  
  // handles multiple locations (for clocks) as: city1 city2 [city names cannot include spaces or special chars]
  
  $('#contact #offices a, #contact #markers a, #contact #clocks a').each(function(){
    $(this).hover(
      function() {
        loc = $(this).attr('class');  // get the location string
        locArray = loc.split(' ');    // convert to array
        jQuery.each(locArray, function() {  // for each location set highlights
          $('.'+this).addClass('highlight').prevAll('h5:first').addClass('highlight');
          clock = $('.'+this).find('canvas'); // find clock based on last (any) location
        });
        clock.attr('class', function(i,klass) {
          return klass.replace('normal','highlight').replace('noSeconds',''); // change skin and enable second hand as highlight for clock
        });
        CoolClock.findAndCreateClocks(); // update clock
      },
      function(){
        loc = $(this).attr('class');  // get the location string
        locArray = loc.split(' ');    // convert to array
        jQuery.each(locArray, function() {  // for each location remove highlights
          $('.'+this).removeClass('highlight').prevAll('h5:first').removeClass('highlight');
          if (this != 'highlight')
            clock = $('.'+this).find('canvas'); // find clock based on last (any) location [omit class=highlight]
        });
        clock.attr('class', function(i,klass) {
          return klass.replace('highlight','normal').replace('::',':noSeconds:'); // change skin and disable second hand
        });
        CoolClock.findAndCreateClocks(); // update clock
      }
    );
  });
  
  //===============================================
  //  Autocolumn: newspaper-style columns for IE
  //===============================================

/* causing error in IE8
  if ($.browser.msie) {
    $('.columnize-2').columnize({ columns: 2 });
  }
*/

  //===============================================
  //  Form validation
  //===============================================

  if ($('#jvform').length) {

    // default value isn't a valid entry
    jQuery.validator.addMethod("defaultInvalid", function(value, element) {
      return value != element.defaultValue;
    }, "");
    
    var validator = $("form").validate({
// TBD
//      invalidHandler: function(form, validator) {
//        $(window.parent.document).scrollTo('0');
//      },
      messages: {
        jvresume: "This field is required.",
        email: {
          email: "Please enter a valid email address."
        }
      },
      debug:true
    });

  }

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
