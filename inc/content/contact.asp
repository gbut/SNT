<!-- + contact -->
<div id="contact">

  <div class="top clearfix">
  
    <form name="contact_form" method="post" action="#" id="contact_form">

      <h3>Get In <em>Touch</em></h3>

      <fieldset>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" />
        <label for="tel">Telephone:</label>
        <input type="text" id="tel" name="tel" />
        <label for="message">Message:</label>
        <textarea id="message" name="message"></textarea>
        <a href="#" name="submit" id="submit" class="btn btnLg btnSubmit" onclick="submit();">Send</a>
      </fieldset>
        
    </form>
  
    <aside>
      <section>

        <div class="share clearfix">
          <div class="label">
            Follow us around the web:
          </div>
          <a href="#" title="Follow us on Facebook" class="facebook"></a>
          <a href="#" title="Follow us on Twitter" class="twitter"></a>
        </div>

        <div id="photo">
          <img src="/img/photo_employee_03.png" alt="Employee Photo" title="Employee Photo">
        </div>
        
      </section>
    </aside>

  </div>
  
  <h3>RMS Around the <em>Globe</em></h3>
  <div id="offices">
<!--
    <div class="office">
      <canvas id="clock01" class="CoolClock:RMSskin:40:noSeconds:-7"></canvas>
      <div class="address">
        <h5>Corporate<br />
        Headquarters</h5>
        7575 Gateway Blvd.<br />
        Newark, CA 94560<br />
        Tel: 1.510.505.2500<br />
        Fax: 1.510.505.2501
      </div>
    </div>
    <div class="office">
      <canvas id="clock02" class="CoolClock:RMSskin:40:noSeconds:-5"></canvas>
      <div class="address">
        <h5>Midwest U.S.</h5>
        7575 Gateway Blvd.<br />
        Newark, CA 94560<br />
        Tel: 1.510.505.2500<br />
        Fax: 1.510.505.2501<br />
        <br />
        7575 Gateway Blvd.<br />
        Newark, CA 94560<br />
        Tel: 1.510.505.2500<br />
        Fax: 1.510.505.2501
      </div>
    </div>
    <div class="office">
      <canvas id="clock03" class="CoolClock:RMSskin:40:noSeconds:-4"></canvas>
      <div class="address">
        <h5>East Coast U.S.</h5>
        7575 Gateway Blvd.<br />
        Newark, CA 94560<br />
        Tel: 1.510.505.2500<br />
        Fax: 1.510.505.2501
      </div>
    </div>
    <div class="office">
      <canvas id="clock04" class="CoolClock:RMSskin:40:noSeconds:-3"></canvas>
      <div class="address">
        <h5>Bermuda</h5>
        7575 Gateway Blvd.<br />
        Newark, CA 94560<br />
        Tel: 1.510.505.2500<br />
        Fax: 1.510.505.2501
      </div>
    </div>
    <div class="office"v>
      <canvas id="clock05" class="CoolClock:RMSskin:40:noSeconds:0"></canvas>
      <div class="address">
        <h5>European<br />
        Headquarters</h5>
        7575 Gateway Blvd.<br />
        Newark, CA 94560<br />
        Tel: 1.510.505.2500<br />
        Fax: 1.510.505.2501<br />
        <br />
        <h5>France</h5>
        7575 Gateway Blvd.<br />
        Newark, CA 94560<br />
        Tel: 1.510.505.2500<br />
        Fax: 1.510.505.2501<br />
        <br />
        <h5>Switzerland</h5>
        7575 Gateway Blvd.<br />
        Newark, CA 94560<br />
        Tel: 1.510.505.2500<br />
        Fax: 1.510.505.2501
      </div>
    </div>
    <div class="office">
      <canvas id="clock06" class="CoolClock:RMSskin:40:noSeconds:5.5"></canvas>
      <div class="address">
        <h5>RMSI</h5>
        7575 Gateway Blvd.<br />
        Newark, CA 94560<br />
        Tel: 1.510.505.2500<br />
        Fax: 1.510.505.2501<br />
        <br />
        <h5>China</h5>
        7575 Gateway Blvd.<br />
        Newark, CA 94560<br />
        Tel: 1.510.505.2500<br />
        Fax: 1.510.505.2501<br />
        <br />
        <h5>Japan</h5>
        7575 Gateway Blvd.<br />
        Newark, CA 94560<br />
        Tel: 1.510.505.2500<br />
        Fax: 1.510.505.2501
      </div>
    </div>
-->

    <div class="office">
      <h5>Corporate<br />
      Headquarters</h5>
      <div class="address" rel="tz01">
        7575 Gateway Blvd.<br />
        Newark, CA 94560<br />
        Tel: 1.510.505.2500<br />
        Fax: 1.510.505.2501
      </div>
    </div>
    <div class="office">
      <h5>Midwest U.S.</h5>
      <div class="address" rel="tz02">
        7575 Gateway Blvd.<br />
        Newark, CA 94560<br />
        Tel: 1.510.505.2500<br />
        Fax: 1.510.505.2501
      </div>
      <div class="address" rel="tz02">
        7575 Gateway Blvd.<br />
        Newark, CA 94560<br />
        Tel: 1.510.505.2500<br />
        Fax: 1.510.505.2501
      </div>
    </div>
    <div class="office">
    <h5>East Coast U.S.</h5>
      <div class="address" rel="tz03">
        7575 Gateway Blvd.<br />
        Newark, CA 94560<br />
        Tel: 1.510.505.2500<br />
        Fax: 1.510.505.2501
      </div>
    </div>
    <div class="office">
      <h5>Bermuda</h5>
      <div class="address" rel="tz04">
        7575 Gateway Blvd.<br />
        Newark, CA 94560<br />
        Tel: 1.510.505.2500<br />
        Fax: 1.510.505.2501
      </div>
    </div>
    <div class="office">
      <h5>European<br />
      Headquarters</h5>
      <div class="address" rel="tz05">
        7575 Gateway Blvd.<br />
        Newark, CA 94560<br />
        Tel: 1.510.505.2500<br />
        Fax: 1.510.505.2501
      </div>
      <h5>France</h5>
      <div class="address" rel="tz06">
        7575 Gateway Blvd.<br />
        Newark, CA 94560<br />
        Tel: 1.510.505.2500<br />
        Fax: 1.510.505.2501
      </div>
      <h5>Switzerland</h5>
      <div class="address" rel="tz06">
        7575 Gateway Blvd.<br />
        Newark, CA 94560<br />
        Tel: 1.510.505.2500<br />
        Fax: 1.510.505.2501
      </div>
    </div>
    <div class="office">
      <h5>RMSI</h5>
      <div class="address" rel="tz07">
        7575 Gateway Blvd.<br />
        Newark, CA 94560<br />
        Tel: 1.510.505.2500<br />
        Fax: 1.510.505.2501
      </div>
      <h5>China</h5>
      <div class="address" rel="tz08">
        7575 Gateway Blvd.<br />
        Newark, CA 94560<br />
        Tel: 1.510.505.2500<br />
        Fax: 1.510.505.2501
      </div>
      <h5>Japan</h5>
      <div class="address" rel="tz09">
        7575 Gateway Blvd.<br />
        Newark, CA 94560<br />
        Tel: 1.510.505.2500<br />
        Fax: 1.510.505.2501
      </div>
    </div>
    
    <div id="clocks">
      <div id="tz01" class="clock">
        <canvas id="clock01" class="CoolClock:RMSskin:30:noSeconds:-7.0"></canvas>
        Newark, CA
      </div>
      <div id="tz02" class="clock">
        <canvas id="clock02" class="CoolClock:RMSskin:30:noSeconds:-5.0"></canvas>
        Peoria, IL<br />
        Bloomington, MN
      </div>
      <div id="tz03" class="clock">
        <canvas id="clock03" class="CoolClock:RMSskin:30:noSeconds:-4.0"></canvas>
        Hackensak, NJ
      </div>
      <div id="tz04" class="clock">
        <canvas id="clock04" class="CoolClock:RMSskin:30:noSeconds:-3.0"></canvas>
        Bermuda
      </div>
      <div id="tz05" class="clock">
        <canvas id="clock05" class="CoolClock:RMSskin:30:noSeconds:+0.0"></canvas>
        London
      </div>
      <div id="tz06" class="clock">
        <canvas id="clock06" class="CoolClock:RMSskin:30:noSeconds:+1.0"></canvas>
        Paris<br />
        Zurich
      </div>
      <div id="tz07" class="clock">
        <canvas id="clock07" class="CoolClock:RMSskin:30:noSeconds:+5.5"></canvas>
        Noida, India
      </div>
      <div id="tz08" class="clock">
        <canvas id="clock08" class="CoolClock:RMSskin:30:noSeconds:+8.0"></canvas>
        Beijing
      </div>
      <div id="tz09" class="clock">
        <canvas id="clock09" class="CoolClock:RMSskin:30:noSeconds:+9.0"></canvas>
        Tokyo
      </div>
    </div>
        
    <div id="map">
      <script src="http://www.gmodules.com/ig/ifr?url=http://static.die.net/earth/gadget.xml&amp;up_clouds=0&amp;up_proj=mercator&amp;synd=open&amp;w=912&amp;h=506&amp;output=js"></script>
    </div>
    
  </div>

</div>
<!-- / contact -->