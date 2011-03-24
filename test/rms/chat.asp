<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7 ]> <html class="no-js ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="no-js ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="no-js ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
    <title></title>
    <meta name="description" content="" />
    <meta name="author" content="" />
    
    <!--#include virtual="/inc/__html-head.asp" -->
  
    <!-- Grab Google CDN's jQuery. fall back to local if necessary -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
    <script>!window.jQuery && document.write(unescape('%3Cscript src="/js/libs/jquery-1.5.1.min.js"%3E%3C/script%3E'))</script>
    <script type="text/javascript" src="/js/libs/jquery-ui-1.8.10.custom.min.js"></script>

    <script type="text/javascript">
      function checkAvailability() {
        lpc.chatAvailability();
      }
      function myOnAvailability(availObj){
        if( availObj.availability == true ){
          alert( 'we can start a chat' );
        } else {
          alert( 'account is offline' );
        }
      }
      function sendText() {
        var textObj = document.getElementById('chatLine');
        if(textObj.value!=''){
          lpc.addLine(textObj.value);
          addChatText(lpc.getVisitorName(), textObj.value);
          textObj.value='';
        }
        return true;
      }
      function myOnLine ( line ) {
        addChatText(line.by, line.text);
      }
      function myOnError(errObj){
        alert('Error occured. ' + errObj.text);
      }
      function addChatText(by,text){
        var ca = document.getElementById('chatArea');
        var p = document.createElement( "div" );
        if(by!=null){
          var span = document.createElement( "span" );
          span.innerHTML = by + ': ';
          p.appendChild(span);
        }
        p.appendChild( document.createTextNode(text) );
        ca.appendChild(p);
        ca.scrollTop = 50000;
      }
      var lpChatConfig = {
        apiKey : '280e4c40d2524aee8895e299efc4359c', // 66a2b5d32
        lpServer : 'server.iad.liveperson.net', // dev.liveperson.net
        lpNumber : '44448599',
        onLoad : function() {
          window.lpc = new lpChat();
        },
        onLine : myOnLine,
        onError : myOnError,
        onAvailability: myOnAvailability
      };
      lpChatConfig.lpAddScript = function(src, ignore) {var c = lpChatConfig;if(typeof(c.lpProtocol)=='undefined'){c.lpProtocol = (document.location.toString().indexOf("https:")==0) ? "https" : "http";}if (typeof(src) == 'undefined' || typeof(src) == 'object') {src = c.lpChatSrc ? c.lpChatSrc : '/hcp/html/lpChatAPI.js';};if (src.indexOf('http') != 0) {src = c.lpProtocol + "://" + c.lpServer + src + '?site=' + c.lpNumber;} else {if (src.indexOf('site=') < 0) {if (src.indexOf('?') < 0)src = src + '?'; else src = src + '&';src = src + 'site=' + c.lpNumber;}};var s = document.createElement('script');s.setAttribute('type', 'text/javascript');s.setAttribute('charset', 'iso-8859-1');s.setAttribute('src', src);document.getElementsByTagName('head').item(0).appendChild(s);}
      if (window.attachEvent) window.attachEvent('onload', lpChatConfig.lpAddScript);
        else window.addEventListener('load', lpChatConfig.lpAddScript, false);
    </script>

</head>

<body id="body">

<!--#include virtual="/inc/_header.asp" -->

<div id="t05" class="contentOuter">
  <!-- + main -->
  <div id="main" class="wrapper clearfix">
  
    <!-- + content -->
    <section id="content" class="clearfix">

      <!-- + chat -->
      <div id="bg_chat">
        <div class="wrapper">
          <div class="hd">
            <h2>We Support Instant Gratification.</h2>
            <a href="#" id="btn_start_chat" class="btn btnChat">Chat Now</a>
            <!-- BEGIN LivePerson Button Code -->
            <!-- <div id="lpButDivID-1300847020557" class="btnChatCont"></div>
                  <script type="text/javascript" charset="UTF-8" src="https://server.iad.liveperson.net/hc/44448599/?cmd=mTagRepstate&site=44448599&buttonID=7&divID=lpButDivID-1300847020557&bt=3&c=1"></script> -->
            <!-- END LivePerson Button code -->
          </div>
          <div class="notebook">
            <h3>Open Monday-Friday</h3>
            <h4>8-10am and 1-3 PST</h4>
            <p>Lorem ipsum dolor sit amet consecteteur adipiscing nonummy elit.</p>
          </div>

          <!-- + chat window -->
          <div id="chat_win">
            <!-- <a href="#" id="btn_end_chat" class="btn btnEndChat">End Chat</a> -->

            <div id="lp_chat_window">
              <!--Begin LivePerson Chat Window Embed-->
              <!-- <iframe src="http://server.iad.liveperson.net/hc/44448599/?cmd=file&file=visitorWantsToChat&site=44448599&special=style:embedded" width="495" height="358" scrolling="no" frameborder="0"></iframe> -->
              <!--End LivePerson Chat Window Embed -->
              
              <button onclick='lpc.chatAvailability()'>Check Availability</button>

              <button onclick='lpc.requestChat();'>Start Chat</button>

              <button onclick='lpc.endChat()'>End Chat</button>

              <div id='chatArea' style='border:1px solid #aaa; width:500px; height:400px; overflow:auto;'></div>

              <input id='chatLine' type='text' value='write your text here...'>

              <button onclick='sendText()'>Send</button>

              
            </div>

          </div>
          <!-- / chat window -->

        </div>
      </div>
      <!-- / chat -->

    </section>
    <!-- / content -->
  
  </div>
  <!-- / main -->
</div>

<!--#include virtual="/inc/_footer.asp" -->

<!-- Javascript at the bottom for fast page loading -->

<!--[if IE]><script type="text/javascript" src="/js/libs/autocolumn.min.js"></script><![endif]-->

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
          if (w > navW) $(this).find('ul.sn').css('left', (navW - w + fudge));
        });
      };
      window.setTimeout(function(){moveSubnavs.call(self);}, 300); // @font-face must render first, else navW value is off
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

<!-- jquery scrollto plugin -->
<script type="text/javascript" src="/js/libs/jquery-scrollto/jquery.scrollto-min.js"></script>

<!-- canvas maps -->
<script type="text/javascript" src="/js/libs/raphael-min.js"></script>
<script type="text/javascript" src="/js/libs/maps/worldmap.js"></script>

<!--[if lt IE 7 ]>
  <script src="/js/libs/dd_belatedpng.js"></script>
  <script>DD_belatedPNG.fix("img, .png_bg"); // Fix any <img> or .png_bg bg-images. Also, please read goo.gl/mZiyb </script>
<![endif]-->

<!-- mathiasbynens.be/notes/async-analytics-snippet Change UA-XXXXX-X to be your site's ID -->
<script>
  var _gaq=[["_setAccount","UA-XXXXX-X"],["_trackPageview"]];
  (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=1;
  g.src=("https:"==location.protocol?"//ssl":"//www")+".google-analytics.com/ga.js";
  s.parentNode.insertBefore(g,s)}(document,"script"));
</script>

</body>
</html>