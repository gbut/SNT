<!-- + risk -->
<div id="risk">

  <div id="presenterCont">
    <div id="presenter">
      <div class="hero clearfix">
        <img src="/img/banner_models.jpg" alt="RMS - Models" />
        <div id="banner">
          <h2>Educating the World <strong>About Risk</strong></h2>
          <h3>As a pioneer of catastrophic risk modeling, RMS leads the market and sets the standard for quantifying risk. Our science educates people on the physical and financial implications of natural catastrophes, terrorism, and the risks associated with changes in life expectancy.</h3>
        </div>
      </div>
      <div id="vidOverlay">
        <iframe src="/inc/content/blank.asp" width="626" height="356" scrolling="no" frameborder="0" id="vidFrame"></iframe>
        <a href="#" class="close">Close</a>
      </div>
    </div>
    <div id="presenterNav">
      <ul>
        <li><a href="http://player.vimeo.com/video/23183385?title=0&amp;byline=0&amp;portrait=0&amp;color=a4b4ce&amp;autoplay=1" class="wide">
          <span class="imgCont vid1">Video #1<span class="play"></span></span>
          <span class="multiline">Europe Windstorm Model</span>
        </a></li>
        <li><a href="http://player.vimeo.com/video/23235380?title=0&amp;byline=0&amp;portrait=0&amp;color=a4b4ce&amp;autoplay=1">
          <span class="imgCont vid2">Video #2<span class="play"></span></span>
          <span class="multiline">Model Development</span>
        </a></li>
      </ul>
    </div>
  </div>

  <div id="iWorldMapCont" class="sectionCont">
  
    <section class="iWorldMap clearfix">

      <!-- + raphael -->
      <a href="#" id="mapinfo_back_to_models">&laquo; Back to Models</a>
      <div id="mapinfo">
        <div id="mapinfo_panels">
          <!-- + global models -->
          <div class="panel globalModels clearfix">
            <div class="lt">
              <h4>RMS Global Models</h4>
              <div id="model_list" class="clearfix">
                <ul>
                  <li><a href="#" data-peril="all" id="model_all">All Models</a></li>
                  <li><a href="#" data-peril="earthquakes" id="model_earthquakes">Earthquakes</a></li>
                  <li><a href="#" data-peril="cyclones" id="model_cyclones">Tropical Cyclones</a></li>
                  <li><a href="#" data-peril="fire" id="model_fire">Fire</a></li>
                </ul>
                <ul>
                  <li><a href="#" data-peril="stormsurge" id="model_stormsurge">Storm Surge</a></li>
                  <li><a href="#" data-peril="floods" id="model_floods">Floods</a></li>
                  <li><a href="#" data-peril="winterstorms" id="model_winterstorms">Winter Storms</a></li>
                  <li><a href="#" data-peril="windstorms" id="model_windstorms">Windstorms</a></li>
                </ul>
                <ul>
                  <li><a href="#" data-peril="scs" id="model_scs">Severe Convective Storms</a></li>
                  <li><a href="#" data-peril="terrorism" id="model_terrorism">Terrorism</a></li>
                  <li><a href="#" data-peril="disease" id="model_disease">Infectious Disease</a></li>
                </ul>
              </div>
            </div>
            <div id="model_info" class="rt">
              <h5 id="model_desc_hd"></h5>
              <p id="model_desc_body"></p>
            </div>
          </div>
          <!-- / global models -->

          <!-- + country info -->
          <div class="panel countryInfo">
            <ul class="clearfix">
              <li class="map_flag"><img id="map_flag" src="" /></li>
              <li class="map_country"><dl>
                <dt>Country</dt>
                <dd>
                  <span class="amt" id="map_country_name"></span>
                </dd>
              </dl></li>
              <li class="map_exposure"><dl>
                <dt>Economic Exposure (USD <span class="lower">bn</span>)</dt>
                <dd>
                  <span class="amt" id="map_exposure"></span>
                  <span class="rank">Confidence: <span id="map_exposure_rank" class="rankNum"></span></span>
                </dd>
              </dl></li>
              <li class="map_population"><dl>
                <dt>Population</dt>
                <dd>
                  <span class="amt" id="map_population"></span>
                  <span class="rank">Rank: <span id="map_population_rank" class="rankNum"></span></span>
                </dd>
              </dl></li>
              <li class="map_lifeexp"><dl>
                <dt>Life Expectancy</dt>
                <dd>
                  <span class="amt" id="map_lifeexp"></span>
                  <span class="rank">Rank: <span id="map_lifeexp_rank" class="rankNum"></span></span>
                </dd>
              </dl></li>
              <li class="map_landmass"><dl>
                <dt>Landmass (sq.mi.)</dt>
                <dd>
                  <span class="amt" id="map_landmass"></span>
                  <span class="rank">Rank: <span id="map_landmass_rank" class="rankNum"></span></span>
                </dd>
              </dl></li>
            </ul>
          </div>
          <!-- / country info -->
        </div>
      </div>
      <div id="svgmap"></div>
      <!-- / raphael -->

    </section>

  </div>
  
  <div class="sectionCont">

    <div id="riskTabs">
      <ul class="tabs">
        <li><a href="#catastrophe">Natural Catastrophe<span class="pointer"><span class="inner">*</span></span></a></li>
        <li><a href="#terrorism">Terrorism<span class="pointer"><span class="inner">*</span></span></a></li>
        <li><a href="#longevity">Longevity &amp; Mortality<span class="pointer"><span class="inner">*</span></span></a></li>
      </ul>
    
      <!-- + NAT CAT -->
      <div id="catastrophe">
      
        <h3 class="panelIntro">Natural Catastrophe <em>Modeling</em></h3>
        <p class="panelIntro">Our natural catastrophe risk models help people, governments, and businesses better understand the potential impact of a wide variety of catastrophic events. We are continuously discovering new data and information to improve and expand our models, enabling risk holders to be better prepared and to make better decisions about managing risk.</p>
        
        <div id="catastropheCont">
        
          <ul id="caseStudiesNav" class="clearfix">
            <li><a href="#hurricane-ike">
              <span class="imgCont cs1">Case Study #1: </span>
              <span><em>Building Performance</em><br />Hurricane Ike</span>
            </a></li>
            <li><a href="#haiti-earthquake">
              <span class="imgCont cs2">Case Study #2: </span>
              <span><em>Certifying Hospitals</em><br />Haiti Earthquake</span>
            </a></li>
            <li><a href="#hurricane-katrina">
              <span class="imgCont cs3">Case Study #3: </span>
              <span><em>Super Catastrophe</em><br />Hurricane Katrina</span>
            </a></li>
          </ul>

          <!-- + Case Study #1 -->
          <div id="hurricane-ike" class="ui-tabs-hide">
            <section class="caseStudies clearfix">
              <h3>Hurricane Ike <span class="sep">//</span> <em>1-14 September 2008</em></h3>
              <div class="lt">
          
                <div class="vidCont">
                  <ul class="nav">
                    <li><a href="#ike-1">[media 1]</a></li>
                    <li><a href="#ike-2">[media 2]</a></li>
                    <li><a href="#ike-3">[media 3]</a></li>
                    <li><a href="#ike-4">[media 4]</a></li>
                  </ul>

                  <!-- + Media 1 -->
                  <div id="ike-1" class="clearfix">
                    <img src="/img/models/ike-1.jpg" alt="" />
                    <!-- <div class="vidTitle"><span>[video title]</span><span class="bg"></span></div> --><!-- << INCLUDE FOR VIDEOS ONLY -->
                  </div>
                  <!-- / Media 1 -->

                  <!-- + Media 2 -->
                  <div id="ike-2" class="clearfix ui-tabs-hide">
                    <img src="/img/models/ike-2.jpg" alt="" />
                  </div>
                  <!-- / Media 2 -->

                  <!-- + Media 3 -->
                  <div id="ike-3" class="clearfix ui-tabs-hide">
                    <img src="/img/models/ike-3.jpg" alt="" />
                  </div>
                  <!-- / Media 3 -->

                  <!-- + Media 4 -->
                  <div id="ike-4" class="clearfix ui-tabs-hide">
                    <img src="/img/models/ike-4.jpg" alt="" />
                  </div>
                  <!-- / Media 4 -->
                </div>
          
                <h4>Building Performance</h4>
                <p><strong>Forensic claims analysis is one way RMS learns more about major catastrophic events and their lessons for understanding risk.</strong> In studying $18 billion in recent U.S. hurricane claims data, our researchers noticed that damage to some types of buildings was greater than expected. Why didn't these buildings perform as well as they should have in relatively low winds?</p>
                <p>Our structural engineers took a closer look at this unprecedented volume of claims. While building codes were sufficient to ensure buildings would withstand moderate hurricane winds, adherence to those codes was inconsistent in some regions, particularly for properties further away from the coast. In addition, our researchers found that some roofing materials deteriorated more rapidly than expected in certain atmospheric conditions, such as the high heat and humidity in the southeast.</p>
                <p>These findings have implications not only for RMS clients, but for government and property owners as well. Armed with information from RMS, stakeholders can identify building shortcomings and promote improved building practices to ensure greater safety in the event of a major hurricane.</p>
          
              </div>
              <div class="rt">
          
                <img src="/img/models/ike-map.png" alt="" />
                <dl>
                  <dt>Formed:</dt><dd>September 1, 2008</dd>
                  <dt>Dissipated:</dt><dd>September 14, 2008</dd>
                  <dt>Highest Wind:</dt><dd>145 mph (230 km/h)</dd>
                  <dt>Lowest Pressure:</dt><dd>935 mbar (hPa; 27.61 inHg)</dd>
                  <dt>Fatalities:</dt><dd>103 direct, 92 indirect</dd>
                  <dt>Damage:</dt><dd>$37.6 billion (2008 USD)<br />$38.4 billion (2011 USD)</dd>
                  <dt>Countries or regions affected:</dt><dd>Turks and Caicos, Bahamas, Haiti, Dominican Republic, Cuba, Florida Keys, Mississippi, Louisiana, Texas, Mississippi Valley, Ohio Valley, Great Lakes region, eastern Canada</dd>
                </dl>
          
              </div>
            </section>
          </div>
          <!-- / Case Study #1 -->

          <!-- + Case Study #2 -->
          <div id="haiti-earthquake">
            <section class="caseStudies clearfix">
              <h3>Haiti Earthquake <span class="sep">//</span> <em>12 January 2010</em></h3>
              <div class="lt">
          
                <div class="vidCont">
                  <ul class="nav">
                    <li><a href="#haiti-1">[media 1]</a></li>
                    <li><a href="#haiti-2">[media 2]</a></li>
                    <li><a href="#haiti-3">[media 3]</a></li>
                    <li><a href="#haiti-4">[media 4]</a></li>
                  </ul>

                  <!-- + Media 1 -->
                  <div id="haiti-1" class="clearfix">
                    <img src="/img/models/haiti-1.jpg" alt="" />
                    <!-- <div class="vidTitle"><span>[video title]</span><span class="bg"></span></div> --><!-- << INCLUDE FOR VIDEOS ONLY -->
                  </div>
                  <!-- / Media 1 -->

                  <!-- + Media 2 -->
                  <div id="haiti-2" class="clearfix ui-tabs-hide">
                    <img src="/img/models/haiti-2.jpg" alt="" />
                  </div>
                  <!-- / Media 2 -->

                  <!-- + Media 3 -->
                  <div id="haiti-3" class="clearfix ui-tabs-hide">
                    <img src="/img/models/haiti-3.jpg" alt="" />
                  </div>
                  <!-- / Media 3 -->

                  <!-- + Media 4 -->
                  <div id="haiti-4" class="clearfix ui-tabs-hide">
                    <img src="/img/models/haiti-4.jpg" alt="" />
                  </div>
                  <!-- / Media 4 -->
                </div>
          
                <h4>Certifying Hospitals in Haiti</h4>
                <p><strong>One of the most destructive earthquakes in modern history,</strong> the magnitude 7.0 earthquake that hit Haiti on January 12, 2010, killed or injured approximately 600,000 people and destroyed 300,000 homes. Lacking a national building code, walls were often constructed of heavy materials without reinforcement, resulting in collapsed or compromised buildings and devastating loss of life.</p>
                <p>After the earthquake, RMS experts joined a cross-organizational team of geologists and structural engineers in Haiti to assess the damage and learn lessons about how buildings perform in earthquakes. This information would be critical for improving future building practices in Haiti and elsewhere as well as improving the catastrophe models driving global business decisions.</p>
                <p>As the local government struggled to examine critical structures, particularly hospitals, they relied on the network of visiting research and aid workers to supplement their stretched resources. Alongside partner organizations, RMS structural engineers helped evaluate the safety of hospitals that survived the earthquake, contributing vital expertise to help reopen hospitals as quickly as possible.</p>
          
              </div>
              <div class="rt">
          
                <img src="/img/models/haiti-map.png" alt="" />
                <dl>
                  <dt>Magnitude:</dt><dd>7.0 M<sub>w</sub></dd>
                  <dt>Depth:</dt><dd>13 kilometres (8.1 mi)</dd>
                  <dt>Epicenter location:</dt><dd>35.909&deg;S 72.733&deg;W</dd>
                  <dt>Coordinates:</dt><dd>18.457&deg;N 72.533&deg;W</dd>
                  <dt>Countries or regions affected:</dt><dd>Haiti</dd>
                  <dt>Peak ground acceleration:</dt><dd>0.5 g</dd>
                  <dt>Tsunami:</dt><dd>Yes (localized)</dd>
                  <dt>Casualties:</dt><dd>92,000 - 316,000 deaths</dd>
                </dl>
          
              </div>
            </section>
          </div>
          <!-- / Case Study #2 -->

          <!-- + Case Study #3 -->
          <div id="hurricane-katrina" class="ui-tabs-hide">
            <section class="caseStudies clearfix">
              <h3>Hurricane Katrina <span class="sep">//</span> <em>23-30 August 2005</em></h3>
              <div class="lt">
          
                <div class="vidCont">
                  <ul class="nav">
                    <li><a href="#supercat-1">[media 1]</a></li>
                    <li><a href="#supercat-2">[media 2]</a></li>
                    <li><a href="#supercat-3">[media 3]</a></li>
                    <li><a href="#supercat-4">[media 4]</a></li>
                  </ul>

                  <!-- + Media 1 -->
                  <div id="supercat-1" class="clearfix">
                    <img src="/img/models/supercat-1.jpg" alt="" />
                    <!-- <div class="vidTitle"><span>[video title]</span><span class="bg"></span></div> --><!-- << INCLUDE FOR VIDEOS ONLY -->
                  </div>
                  <!-- / Media 1 -->

                  <!-- + Media 2 -->
                  <div id="supercat-2" class="clearfix ui-tabs-hide">
                    <img src="/img/models/supercat-2.jpg" alt="" />
                  </div>
                  <!-- / Media 2 -->

                  <!-- + Media 3 -->
                  <div id="supercat-3" class="clearfix ui-tabs-hide">
                    <img src="/img/models/supercat-3.jpg" alt="" />
                  </div>
                  <!-- / Media 3 -->

                  <!-- + Media 4 -->
                  <div id="supercat-4" class="clearfix ui-tabs-hide">
                    <img src="/img/models/supercat-4.jpg" alt="" />
                  </div>
                  <!-- / Media 4 -->
                </div>
          
                <h4>Understanding Super Catastrophes</h4>
                <p><strong>Hurricane Katrina changed New Orleans forever, but it also changed the science of catastrophe modeling.</strong> Until Katrina, models considered the damage to expect if a major hurricane made landfall or if a major storm surge overtopped flood defenses. But the levees crumbling, that was another matter.</p>
                <p>After floodwaters filled the city, the U.S. struggled to grasp the magnitude of the damage. RMS modelers went to work day and night to quantify what they saw, estimating at least $125 billion in losses. Media and government agencies turned to RMS for information, and officials at the top of the Bush administration contacted RMS advisors for help in understanding potential economic losses.</p>
                <p>After witnessing the tragedy of New Orleans, RMS experts began to contextualize their work&mdash;and re-examine historical events&mdash;in terms of an entirely new concept, the super catastrophe or "super cat," in which one massive event triggers secondary events that can have an even greater destructive impact. Today, RMS considers the possibility of super cats in all of our major catastrophe models, providing a more comprehensive perspective on the potential implications of extreme events.</p>
          
              </div>
              <div class="rt">
          
                <img src="/img/models/supercat-map.png" alt="" />
                <dl>
                  <dt>Formed:</dt><dd>August 23, 2005</dd>
                  <dt>Dissipated:</dt><dd>August 30, 2005</dd>
                  <dt>Highest Wind:</dt><dd>175 mph (280 km/h)</dd>
                  <dt>Lowest Pressure:</dt><dd>902 mbar (hPa; 26.64 inHg)</dd>
                  <dt>Fatalities:</dt><dd>1,836 confirmed</dd>
                  <dt>Damage:</dt><dd>$81.2 billion (2005 USD)<br />$90.9 billion (2011 USD)</dd>
                  <dt>Countries or regions affected:</dt><dd>Bahamas, South Florida, Cuba, Louisiana (especially Greater New Orleans), Mississippi, Alabama, Florida Panhandle, most of eastern North America</dd>
                </dl>
          
              </div>
            </section>
          </div>
          <!-- / Case Study #3 -->

        </div>

      </div>
      <!-- / NAT CAT -->
    
      <!-- + TERRORISM -->
      <div id="terrorism" class="ui-tabs-hide">

        <h3 class="panelIntro">Terrorism <em>Modeling</em></h3>

        <section class="clearfix">
          <div class="col3double">
            <p class="imgRt clearfix">
              <strong>Terrorism has blighted human experience for centuries. Seemingly as random and unpredictable as natural disasters,</strong> terrorist attacks defy understanding. What can be done to prepare for a catastrophic terrorist act? What can we do to better understand how and where they might occur, and what sort of impact they might have?
            </p>
            <p class="imgLt clearfix">
              <img src="/img/models/terrorism-gwoo-cover.jpg" alt="Gordon Woo" />
              <strong>A new, systematic approach to understanding terrorism</strong><br />
              RMS mathematician Gordon Woo saw a way to begin answering these questions. The means&mdash;whether bomb, biological weapon, chemical weapon, or other mode of attack&mdash;would tend to be the most readily available and accessible. Those probabilities could be modeled by conventional means. The targets would be the most visible with the highest psychological value&mdash;again, a quantifiable aspect of the problem. The final variable was human nature itself. The strategic decision to commit a terrorist act would be the culmination of a series of other strategic decisions. No amount of historical data could account for that; there was no way to quantify capricious human impulse. Or was there?
            </p>
            <p class="imgRt clearfix">
              <strong>Game theory and the decisions terrorists make</strong><br />
              After the terrorist attacks of 9/11, Dr. Woo had an idea. Why not use mathematical game theory, made famous in the film <cite>A Beautiful Mind</cite>, to quantify and understand the probability of certain decisions? Ten years later, RMS terrorism risk models based on game theory and other methodologies are used to anticipate terrorist behavior and potential terrorist attacks and their effects around the globe.
            </p>
            <p class="imgLt clearfix">
              <strong>Created in partnership with the world's terrorism experts</strong><br />
              To build the most accurate and advanced model of probable terrorist strikes possible, RMS partnered with the leading think tanks and research institutions around the globe, including the RAND Center for Terrorism Risk Management Policy, Jane's Information Group, the Centre for the Study of Terrorism and Political Violence at the University of St. Andrews in Scotland, the S. Rajaratnam School of International Studies in Singapore, and dozens of leading terrorism scholars, consultants, and advisors.
            </p>
          </div>
          <div class="col3">
            <img src="/img/models/terrorism-networks.jpg" alt="Terrorism networks" />
            <p class="caption">Some terrorist networks operate as independent cells that are geographically spread but swarm in for coordinated attacks.</p>

            <img src="/img/models/terrorism-domestic-threats.gif" alt="Domestic terrorism threats" />
            <p class="caption">RMS quantifies risk across a spectrum of terrorism attacks, from both domestic and foreign terrorist groups.</p>

            <img src="/img/models/terrorism-manhattan.jpg" alt="Truck bomb simulation" />
            <p class="caption">Truck bomb simulation in the financial district of Manhattan</p>
          </div>
        </section>

      </div>
      <!-- / TERRORISM -->
    
      <!-- + LONGEVITY -->
      <div id="longevity" class="ui-tabs-hide">

        <h3 class="panelIntro">Longevity &amp; Mortality <em>Modeling</em></h3>

        <section class="clearfix">
          <div class="col3double">
            <p><strong>Life expectancy, the impact of lifestyle choices, and the toll that catastrophic events can take in terms of human lives lost can all have a dramatic impact on business as well as governments.</strong> From disaster response planning to pensions, insurance, and government policy, being prepared for the future depends on the best possible understanding of how long people will live, what factors drive longevity, and what can happen when catastrophe strikes.</p>
          </div>
          <div class="col3 padBtm">
            <img src="/img/models/longevity-infectious-disease.jpg" alt="Infectious Disease Spread Over Time" />
          </div>
        </section>

        <section class="clearfix">
          <div class="col3">
            <img src="/img/models/longevity-chart1.jpg" alt="Chart: Modeling Longevity Risk" />
            <h5>Modeling Longevity Risk</h5>
            <p>Grounded in medical science, the RMS Longevity Risk Model analyzes the complex interplay of factors expected to drive future mortality rates:</p>
            <ul>
              <li>Lifestyle trends</li>
              <li>Environment</li>
              <li>Medical intervention</li>
              <li>Regenerative medicine</li>
              <li>Strategies to slow aging</li>
            </ul>
            <p>Output from the Longevity Risk Model can be used to assess capital requirements for pension and annuity longevity risk for internal planning or regulatory requirements, inform risk transfer decisions, and quantify and optimize the correlation between longevity and mortality portfolios.</p>
          </div>
          <div class="col3">
            <img src="/img/models/longevity-chart2.jpg" alt="Chart: Modeling Excess Mortality Risk" />
            <h5>Modeling Excess Mortality Risk</h5>
            <p>RMS leads the industry in modeling potential sources of excess mortality risk, including infectious diseases, terrorism, and earthquakes. These models incorporate scientific and medical data as well as claims information from historical events around the world. Model output can be used to:</p>
            <ul>
              <li>Understand the drivers and magnitude of excess mortality risk by line, country, and peril</li>
              <li>Inform risk transfer decisions</li>
              <li>Monitor and manage risk concentrations in key urban areas</li>
            </ul>
          </div>
          <div class="col3">
            <img src="/img/models/longevity-chart3.jpg" alt="Chart: Underwriting and Portfolio Management" />
            <h5>Underwriting and Portfolio Management</h5>
            <p>Mortality analytics informed by medical science achieve a higher level of granularity than is possible using conventional actuarial techniques. RMS analytics enable businesses to:</p>
            <ul>
              <li>Capture the interaction of risk factor variables and conduct predictive modeling of lifespans using characteristics such as lifestyle, medical history, and medical testing</li>
              <li>Incorporate analytics based on disease studies, clinical trial data, and medical models</li>
              <li>Differentiate policy applicants based on individual health risk</li>
              <li>Assess the relative impact of a wide variety of risk factors and medical treatments on mortality</li>
            </ul>
          </div>
        </section>

      </div>
      <!-- / LONGEVITY -->

    </div>
    
  </div>
    
</div>
<!-- / risk -->