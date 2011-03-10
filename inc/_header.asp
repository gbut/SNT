<!--#include virtual="/rms/inc/___toc.asp" -->

<!-- + header -->
<header class="clearfix">
  <div class="headerInner wrapper clearfix">
    
    <!-- + logo -->
    <h1><a href="index.asp" title="RMS">RMS</a></h1>
    <!-- / logo -->

    <!-- + login -->
    <div id="login">
      <a href="#" id="btnClientLogin" title="Client Login">Client Login</a>
      <form id="form_login" method="post" action="" class="clearfix">
        <h3>Private Client Area</h3>
        <ul class="benefits">
          <li>
            <h4>Benefit One.</h4>
            <p>Lorem ipsum dolor consectet.</p>
          </li>
          <li>
            <h4>Benefit Two.</h4>
            <p>Vivamus ante mi, venenatis quis.</p>
          </li>
          <li>
            <h4>Benefit Three.</h4>
            <p>Integer elementum leo sed erat.</p>
          </li>
        </ul>
        <fieldset>
          <label id="form_login_username_label" for="form_login_username">User Name</label>
          <input type="text" name="username" id="form_login_username" value="" />
          
          <label id="form_login_password_label" for="form_login_password">Password</label>
          <a href="#" id="form_login_forgot_password">Forgot?</a>
          <input type="password" name="password" id="form_login_password" value="" />
          
          <input type="checkbox" name="remember" id="form_login_remember" value="1" />
          <label id="form_login_remember_label" for="form_login_remember">Remember me</label>
          
          <!-- <button type="submit" name="login" class="btn btnSm" id="form_login_login" value="Log In">Log In</button> -->
          <a href="#" class="btn btnSm" id="form_login_login">Log In</a>
        </fieldset>
      </form>
    </div>
    <!-- / login -->
  
    <!--#include file="nav.asp" -->
  
  </div>
</header>
<!-- / header -->
