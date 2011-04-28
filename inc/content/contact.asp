<!-- + contact -->
<div id="contact">

  <div class="top clearfix">
  
    <form name="contact_form" method="post" action="contact.asp" id="contact_form">
      <input type="hidden" name="urlSendTo" value="contact.asp?sent=y" />
      <input type="hidden" name="urlFromPath" value="contact.asp" />        
      <input type="hidden" name="txtCompany" value="UNANSWERED" />        
      <input type="hidden" name="txtFax" value="" />    
      <input type="hidden" name="Action" value="Send" />

      <h3>Get In <em>Touch</em></h3>

      <fieldset>
        <div class="field">
          <label for="name">Name:</label>
          <input type="text" id="name" name="txtName" class="required" />
        </div>
        <div class="field">
          <label for="email">Email:</label>
          <input type="text" id="email" name="txtEmail" class="required email"  />
        </div>
        <div class="field">
          <label for="tel">Telephone:</label>
          <input type="text" id="tel" name="txtTel" />
        </div>
        <div class="field">
          <label for="message">Message:</label>
          <textarea id="message" name="txtMessage" class="required"></textarea>
        </div>
        <button type="submit" class="btn btnLg btnSubmit">Send</button>
      </fieldset>
        
    </form>
  
    <aside clear="clearfix">
      <section>
      
        <div class="share clearfix">
          <div class="label">
            Follow Us: 
          </div>
          <a href="http://www.facebook.com/pages/Risk-Management-Solutions/110270308995196" title="Follow us on Facebook" class="facebook"></a>
          <a href="http://twitter.com/#!/RMS_news" title="Follow us on Twitter" class="twitter"></a>
        </div>

        <div class="photo">
          <img src="/img/staff/employee_01_up.png" alt="Employee Photo" title="Employee Photo">
        </div>
        
      </section>
    </aside>

  </div>
  
  <h3>RMS Around the <em>Globe</em></h3>
  <div id="map">
    <div id="markers">
      <a href="#" class="newark" title="Corporate Headquarters"></a>
      <a href="#" class="peoria" title="Chicago"></a>
      <a href="#" class="bloomington" title="Bloomington"></a>
      <a href="#" class="hackensack" title="East Coast U.S."></a>
      <a href="#" class="bermuda" title="Bermuda"></a>
      <a href="#" class="london" title="European Headquarters"></a>
      <a href="#" class="paris" title="France"></a>
      <a href="#" class="zurich" title="Switzerland"></a>
      <a href="#" class="noida" title="India"></a>
      <a href="#" class="beijing" title="China"></a>
      <a href="#" class="tokyo" title="Japan"></a>
      
      <!-- mollweide w/clouds -->
      <script src="http://www.gmodules.com/ig/ifr?url=http://static.die.net/earth/gadget.xml&amp;up_clouds=1&amp;up_proj=mollweide&amp;synd=open&amp;w=912&amp;h=506&amp;output=js"></script>
      
    </div>
    <div id="clocks">
      <a href="#" class="newark">
        <canvas id="tz01" class="CoolClock:normal:30:noSeconds:-7.0"></canvas>
        Silicon Valley
      </a>
      <a href="#" class="peoria bloomington">
        <canvas id="tz02" class="CoolClock:normal:30:noSeconds:-5.0"></canvas>
        Chicago
      </a>
      <a href="#" class="hackensack">
        <canvas id="tz03" class="CoolClock:normal:30:noSeconds:-4.0"></canvas>
        New York
      </a>
      <a href="#" class="bermuda">
        <canvas id="tz04" class="CoolClock:normal:30:noSeconds:-3.0"></canvas>
        Bermuda
      </a>
      <a href="#" class="london">
        <canvas id="tz05" class="CoolClock:normal:30:noSeconds:+0.0"></canvas>
        London
      </a>
      <a href="#" class="paris zurich">
        <canvas id="tz06" class="CoolClock:normal:30:noSeconds:+1.0"></canvas>
        Paris | Zürich
      </a>
      <a href="#" class="noida">
        <canvas id="tz07" class="CoolClock:normal:30:noSeconds:+5.5"></canvas>
        New Delhi
      </a>
      <a href="#" class="beijing">
        <canvas id="tz08" class="CoolClock:normal:30:noSeconds:+8.0"></canvas>
        Beijing
      </a>
      <a href="#" class="tokyo">
        <canvas id="tz09" class="CoolClock:normal:30:noSeconds:+9.0"></canvas>
        Tokyo
      </a>
    </div>
    <div class="mask"></div>
    <div id="popup">
      <div class="details"></div>
      <div class="divider"></div>
      <div class="mapviewer"></div>
      <a href="#" title="Close" class="close">X</a>
      <div class="mask"></div>
    </div>
  </div>

  <div id="offices" class="clearfix">
  
      <div class="office">
        <h5>Corporate<br />
        Headquarters</h5>
        <a href="#" class="newark">
          7575 Gateway Blvd.<br />
          Newark, CA 94560
          <div class="tel">
            Tel: 1.510.505.2500<br />
            Fax: 1.510.505.2501
          </div>
        </a>
      </div>
      <div class="office">
        <h5>Chicago</h5>
        <a href="#" class="peoria">
          621 SW Commercial<br />
          Suite D<br />
          Peoria, IL 61602
          <div class="tel">
            Tel: 1.309.637.6350 <br />
            Fax: 1.309.637.6750
          </div>
        </a>
        <h5>Bloomington</h5>
        <a href="#" class="bloomington">
          7900 International Drive, Suite 970<br />
          Bloomington, MN 55425
          <div class="tel">
            Tel: 1.952.876.4640<br />
            Fax: 1.952.876.4655
          </div>
        </a>
      </div>
      <div class="office">
      <h5>East Coast U.S.</h5>
        <a href="#" class="hackensack">
          Continental Plaza III<br />
          433 Hackensack Avenue, 5th Floor<br />
          Hackensack, NJ 07601
          <div class="tel">
            Tel: 1.201.498.8600<br />
            Fax: 1.201.498.8601
          </div>
        </a>
      </div>
      <div class="office">
        <h5>Bermuda</h5>
        <a href="#" class="bermuda">
          Purvis House, 1st Floor<br />
          29 Victoria Street<br />
          Hamilton HM 10<br />
          Bermuda
          <div class="tel">
            Tel: 1.441.278.8800<br />
            Fax: 1.441.278.8801
          </div>
        </a>
      </div>
      <div class="office">
        <h5>European<br />
        Headquarters</h5>
        <a href="#" class="london">
          Peninsular House<br />
          30 Monument Street<br />
          London EC3R 8NB UK<br />
          <div class="tel">
            Tel: 44.20.7444.7600<br />
            Fax: 44.20.7444.7601
          </div>
        </a>
        <h5>France</h5>
        <a href="#" class="paris">
          53 Rue Claude Terrasse <br />
          75016 Paris France
          <div class="tel">
            Tel: 33.1.53.84.51.86<br />
            Fax: 33.1.53.84.51.87
          </div>
        </a>
        <h5>Switzerland</h5>
        <a href="#" class="zurich">
          Zweigniederlassung Zürich<br />
          Stampfenbachstr. 85<br />
          P.O. Box 2051<br />
          CH-8021 Zürich<br />
          Switzerland
          <div class="tel">
            Tel: 41.44.365.1500<br />
            Fax: 41.44.365.1501
          </div>
        </a>
      </div>
      <div class="office">
        <h5>India</h5>
        <a href="#" class="noida">
          A-7 Sector 16 <br />
          NOIDA 201 301 India
          <div class="tel">
            Tel: 91 120 251 1102<br />
            Fax: 91 120 251 1109
          </div>
        </a>
        <h5>China</h5>
        <a href="#" class="beijing">
          208-11 Winland Intl. Finance Center<br />
          7 Financial Street, Xicheng District<br />
          Beijing, China 100014
          <div class="tel">
            Tel: 86.10.5833.2255<br />
            Fax: 86.10.5833.2388
          </div>
        </a>
        <h5>Japan</h5>
        <a href="#" class="tokyo">
          Akasaka Kikyo Bldg., 4th Floor<br />
          11-15 Akasaka 3-Chome<br />
          Minato-ku<br />
          Tokyo, 107-0052 Japan
          <div class="tel">
            Tel: 81.3.5561.6851<br />
            Fax: 81.3.5561.5890
          </div>
        </a>
      </div>
  
  </div>
  
  <div id="mapviewers">
  
    <div class="newark">
    
      <a href="http://www.bing.com/maps/?v=2&cp=37.5406332613725~-122.063618685958&lvl=15&dir=0&sty=r&cid=58B1D550BC610B44!119&FORM=LMLTCC" class="map newark" rel="external" title="View Map"></a>
      
      <div class="maplinks">
        <a class="largerMap" href="http://www.bing.com/maps/?v=2&cp=37.5406332613725~-122.063618685958&lvl=15&dir=0&sty=r&cid=58B1D550BC610B44!119&FORM=LMLTCC" rel="external" title="View Map">View Map</a>
        <a class="directions" href="http://www.bing.com/maps/?v=2&cp=37.5406332613725~-122.063618685958&lvl=13&dir=0&sty=r&rtp=adr.~pos.37.5406332613725_-122.063618685958__RMS%20Corporate%20Headquarters%20-%20Newark,%20CA__a_&mode=D&rtop=0~0~0~&FORM=LMLTCC" rel="external" title="Get Directions">Get Directions</a>
      </div>
      
    </div>

    <div class="peoria">

      <a href="http://www.bing.com/maps/?v=2&cp=40.686086~-89.5951709999999&lvl=15&dir=0&sty=r&cid=58B1D550BC610B44!119&FORM=LMLTCC" class="map peoria" rel="external" title="View Map"></a>
    
      <div class="maplinks">
        <a class="largerMap" href="http://www.bing.com/maps/?v=2&cp=40.686086~-89.5951709999999&lvl=15&dir=0&sty=r&cid=58B1D550BC610B44!119&FORM=LMLTCC" rel="external" title="View Map">View Map</a>
        <a class="directions" href="http://www.bing.com/maps/?v=2&cp=40.686086~-89.5951709999999&lvl=13&dir=0&sty=r&rtp=adr.~pos.40.686086_-89.5951709999999__RMS%20Midwest%20-%20Peoria,%20IL__a_&mode=D&rtop=0~0~0~&FORM=LMLTCC" rel="external" title="Get Directions">Get Directions</a>
      </div>

    </div>
        
    <div class="bloomington">

      <a href="http://www.bing.com/maps/?v=2&cp=44.860517~-93.226261&lvl=15&dir=0&sty=r&cid=58B1D550BC610B44!119&FORM=LMLTCC" class="map bloomington" rel="external" title="View Map"></a>
    
      <div class="maplinks">
        <a class="largerMap" href="http://www.bing.com/maps/?v=2&cp=44.860517~-93.226261&lvl=15&dir=0&sty=r&cid=58B1D550BC610B44!119&FORM=LMLTCC" rel="external" title="View Map">View Map</a>
        <a class="directions" href="http://www.bing.com/maps/?v=2&cp=44.860517~-93.226261&lvl=13&dir=0&sty=r&rtp=adr.~pos.44.860517_-93.226261__RMS%20Midwest%20-%20Bloomington,%20MN__a_&mode=D&rtop=0~0~0~&FORM=LMLTCC" rel="external" title="Get Directions">Get Directions</a>
      </div>

    </div>
    
    <div class="hackensack">

      <a href="http://www.bing.com/maps/?v=2&cp=40.9098319999999~-74.034073&lvl=15&dir=0&sty=r&cid=58B1D550BC610B44!119&FORM=LMLTCC" class="map hackensack" rel="external" title="View Map"></a>
    
      <div class="maplinks">
        <a class="largerMap" href="http://www.bing.com/maps/?v=2&cp=40.9098319999999~-74.034073&lvl=15&dir=0&sty=r&cid=58B1D550BC610B44!119&FORM=LMLTCC" rel="external" title="View Map">View Map</a>
        <a class="directions" href="http://www.bing.com/maps/?v=2&cp=40.9098319999999~-74.034073&lvl=13&dir=0&sty=r&rtp=adr.~pos.40.9098319999999_-74.034073__RMS%20East%20Coast%20-%20Hackensack,%20NJ__a_&mode=D&rtop=0~0~0~&FORM=LMLTCC" rel="external" title="Get Directions">Get Directions</a>
      </div>

    </div>
    <div class="bermuda">

      <a href="http://www.bing.com/maps/?v=2&cp=32.2953993947233~-64.7834198176849&lvl=15&dir=0&sty=r&cid=58B1D550BC610B44!119&FORM=LMLTCC" class="map bermuda" rel="external" title="View Map"></a>
    
      <div class="maplinks">
        <a class="largerMap" href="http://www.bing.com/maps/?v=2&cp=32.2953993947233~-64.7834198176849&lvl=15&dir=0&sty=r&cid=58B1D550BC610B44!119&FORM=LMLTCC" rel="external" title="View Map">View Map</a>
        <a class="directions" href="http://www.bing.com/maps/?v=2&cp=32.2953993947233~-64.7834198176849&lvl=13&dir=0&sty=r&rtp=adr.~pos.32.2953993947233_-64.7834198176849__RMS%20Bermuda%20-%20Hamilton,%20Bermuda__a_&mode=D&rtop=0~0~0~&FORM=LMLTCC" rel="external" title="Get Directions">Get Directions</a>
      </div>

    </div>
    <div class="london">

      <a href="http://www.bing.com/maps/?v=2&cp=51.5095539999999~-0.0852590000000041&lvl=15&dir=0&sty=r&cid=58B1D550BC610B44!119&FORM=LMLTCC" class="map london" rel="external" title="View Map"></a>
    
      <div class="maplinks">
        <a class="largerMap" href="http://www.bing.com/maps/?v=2&cp=51.5095539999999~-0.0852590000000041&lvl=15&dir=0&sty=r&cid=58B1D550BC610B44!119&FORM=LMLTCC" rel="external" title="View Map">View Map</a>
        <a class="directions" href="http://www.bing.com/maps/?v=2&cp=51.5095539999999~-0.0852590000000041&lvl=13&dir=0&sty=r&rtp=adr.~pos.51.5095539999999_-0.0852590000000041__RMS%20European%20Headquarters%20-%20London,%20UK__a_&mode=D&rtop=0~0~0~&FORM=LMLTCC" rel="external" title="Get Directions">Get Directions</a>
      </div>

    </div>
    <div class="paris">

      <a href="http://www.bing.com/maps/?v=2&cp=48.8372595845601~2.26068034403972&lvl=15&dir=0&sty=r&cid=58B1D550BC610B44!119&FORM=LMLTCC" class="map paris" rel="external" title="View Map"></a>
    
      <div class="maplinks">
        <a class="largerMap" href="http://www.bing.com/maps/?v=2&cp=48.8372595845601~2.26068034403972&lvl=15&dir=0&sty=r&cid=58B1D550BC610B44!119&FORM=LMLTCC" rel="external" title="View Map">View Map</a>
        <a class="directions" href="http://www.bing.com/maps/?v=2&cp=48.8372595845601~2.26068034403972&lvl=13&dir=0&sty=r&rtp=adr.~pos.48.8372595845601_2.26068034403972__RMS%20France%20-%20Paris,%20France__a_&mode=D&rtop=0~0~0~&FORM=LMLTCC" rel="external" title="Get Directions">Get Directions</a>
      </div>

    </div>
    <div class="zurich">

      <a href="http://www.bing.com/maps/?v=2&cp=47.3826273668334~8.54156392977207&lvl=15&dir=0&sty=r&cid=58B1D550BC610B44!119&FORM=LMLTCC" class="map zurich" rel="external" title="View Map"></a>
    
      <div class="maplinks">
        <a class="largerMap" href="http://www.bing.com/maps/?v=2&cp=47.3826273668334~8.54156392977207&lvl=15&dir=0&sty=r&cid=58B1D550BC610B44!119&FORM=LMLTCC" rel="external" title="View Map">View Map</a>
        <a class="directions" href="http://www.bing.com/maps/?v=2&cp=47.3826273668334~8.54156392977207&lvl=13&dir=0&sty=r&rtp=adr.~pos.47.3826273668334_8.54156392977207__RMS%20Zürich%20-%20Zürich,%20Switzerland%20__a_&mode=D&rtop=0~0~0~&FORM=LMLTCC" rel="external" title="Get Directions">Get Directions</a>
      </div>

    </div>
    <div class="noida">

      <a href="http://www.bing.com/maps/?v=2&cp=28.5783998899622~77.3159140348437&lvl=15&dir=0&sty=r&cid=58B1D550BC610B44!119&FORM=LMLTCC" class="map noida" rel="external" title="View Map"></a>
    
      <div class="maplinks">
        <a class="largerMap" href="http://www.bing.com/maps/?v=2&cp=28.5783998899622~77.3159140348437&lvl=15&dir=0&sty=r&cid=58B1D550BC610B44!119&FORM=LMLTCC" rel="external" title="View Map">View Map</a>
        <a class="directions" href="http://www.bing.com/maps/?v=2&cp=28.5783998899622~77.3159140348437&lvl=13&dir=0&sty=r&rtp=adr.~pos.28.5783998899622_77.3159140348437__RMS%20India%20-%20New%20Delhi,%20India__a_&mode=D&rtop=0~0~0~&FORM=LMLTCC" rel="external" title="Get Directions">Get Directions</a>
      </div>

    </div>
    <div class="beijing">

      <a href="http://www.bing.com/maps/?v=2&cp=39.9211729999285~116.35764889419&lvl=15&dir=0&sty=r&cid=58B1D550BC610B44!119&FORM=LMLTCC" class="map beijing" rel="external" title="View Map"></a>
    
      <div class="maplinks">
        <a class="largerMap" href="http://www.bing.com/maps/?v=2&cp=39.9211729999285~116.35764889419&lvl=15&dir=0&sty=r&cid=58B1D550BC610B44!119&FORM=LMLTCC" rel="external" title="View Map">View Map</a>
        <a class="directions" href="http://www.bing.com/maps/?v=2&cp=39.9211729999285~116.35764889419&lvl=13&dir=0&sty=r&rtp=adr.~pos.39.9211729999285_116.35764889419__RMS%20China%20-%20Beijing,%20China__a_&mode=D&rtop=0~0~0~&FORM=LMLTCC" rel="external" title="Get Directions">Get Directions</a>
      </div>

    </div>
    <div class="tokyo">

      <a href="http://www.bing.com/maps/?v=2&cp=35.6749361382118~139.737408&lvl=15&dir=0&sty=r&cid=58B1D550BC610B44!119&FORM=LMLTCC" class="map tokyo" rel="external" title="View Map"></a>
    
      <div class="maplinks">
        <a class="largerMap" href="http://www.bing.com/maps/?v=2&cp=35.6749361382118~139.737408&lvl=15&dir=0&sty=r&cid=58B1D550BC610B44!119&FORM=LMLTCC" rel="external" title="View Map">View Map</a>
        <a class="directions" href="http://www.bing.com/maps/?v=2&cp=35.6749361382118~139.737408&lvl=13&dir=0&sty=r&rtp=adr.~pos.35.6749361382118_139.737408__RMS%20Japan%20-%20Tokyo,%20Japan__a_&mode=D&rtop=0~0~0~&FORM=LMLTCC" rel="external" title="Get Directions">Get Directions</a>
      </div>

    </div>
        
  </div>
  
</div>
<!-- / contact -->
