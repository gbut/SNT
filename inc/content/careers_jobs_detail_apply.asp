<!-- + careers-job_apply -->
<div id="job_apply">
  
  <a href="/careers/jobs" title="Back to Job Openings" class="back">Back to Job Openings</a>
  
  <h2>Apply for <em>Senior Field Engineer</em></h2>

  <div class="subhead">
    Newark, California
  </div>

  <form name="jvform" method="post" action="http://hire.jobvite.com/CompanyJobs/Careers.aspx?" id="jvform">

    <fieldset>
      <legend>About <em>You</em></legend>
      <label for="jvfirstname">First Name:</label>
      <input type="text" id="jvfirstname" name="jvfirstname" />
      <label for="jvlastname">Last Name:</label>
      <input type="text" id="jvlastname" name="jvlastname" />
      <label for="jvemail">Email:</label>
      <input type="text" id="jvemail" name="jvemail" />
      <label for="jvphone">Phone:</label>
      <input type="text" id="jvphone" name="jvphone" />
    </fieldset>
    
    <fieldset>
      <legend>Your <em>Résumé</em></legend>
      <label for="jvresume">Upload:</label>
      <a href="#" name="ImportResume" id="ImportResume" class="btn btnLg btnUpload" onclick="jvAddAttachment('jvresume', '[id]');return false;">Upload My Résumé</a>
      <textarea id="jvresume" name="jvresume">Or copy your résumé into this text box</textarea>
      <a href="#" id="jvsubmitlinkedinprofile" class="btn btnLg btnLinkedIn" onclick="jvtoggleliprofile(true)">Include LinkedIn Profile</a>
    </fieldset>
    
    <fieldset>
      <legend>Your <em>Cover Letter</em> <span>(optional)</span></legend>
      <label for="jvcoverletter">Upload:</label>
      <a href="#" name="ImportCL" id="ImportCL" class="btn btnLg btnUpload" onclick="jvAddAttachment('jvresume', '[id]');return false;">Upload My Cover Letter</a>
      <textarea id="jvcoverletter" name="jvcoverletter"></textarea>
      <a href="#" name="submit" id="submit" class="btn btnLg btnSubmit" onclick="submit();">Apply</a>
    </fieldset>
    
  </form>

</div>
<!-- / careers-job_apply -->