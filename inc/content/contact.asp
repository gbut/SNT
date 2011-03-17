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
  <div id="map">
    <div>
      <canvas id="clock01" class="CoolClock:swissRail:40:noSeconds:-7"></canvas>
      Newark, CA
    </div>
    <div>
      <canvas id="clock02" class="CoolClock:swissRail:40:noSeconds:-5"></canvas>
      Peoria, IL
    </div>
    <div>
      <canvas id="clock03" class="CoolClock:swissRail:40:noSeconds:-4"></canvas>
      Hackensack, NJ
    </div>
    <div>
      <canvas id="clock04" class="CoolClock:swissRail:40:noSeconds:-3"></canvas>
      Bermuda
    </div>
    <div>
      <canvas id="clock05" class="CoolClock:swissRail:40:noSeconds:0"></canvas>
      London
    </div>
    <div>
      <canvas id="clock06" class="CoolClock:swissRail:40:noSeconds:5.5"></canvas>
      New Delhi
    </div>
  </div>
  
  <script src="http://www.gmodules.com/ig/ifr?url=http://static.die.net/earth/gadget.xml&amp;up_clouds=0&amp;up_proj=mercator&amp;synd=open&amp;w=960&amp;h=506&amp;output=js"></script>

</div>
<!-- / contact -->