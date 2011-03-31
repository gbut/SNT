    <!-- + chat window -->
    <div id="chat_win" style="">
      <div id="chat_win_hd" class="clearfix">
        <a href="#" id="btn_email_transcript">email chat transcript</a>
        <a href="/careers/chat/standalone.asp" id="btn_launch_popup">open chat in new window</a>
        <a href="#" id="btn_close_chat">Close</a>
      </div>
      <div id="lp_thread"></div>
      <textarea id="lp_type"></textarea>
      <div id="lp_agent_typing"><span id="lp_agent_name">RMS</span> is typing</div>
      <a href="#" id="btn_end_chat" class="btn btnEndChat">End Chat</a>
      <div id="lp_email_transcript">
        <form id="lp_form_email" name="lp_form_email" method="post" action="">
          <label for="lp_email">email to send transcript:</label>
          <input type="email" id="lp_email" name="email" class="required email" value="" />
          <a href="#" id="lp_email_send">Send</a>
          <a href="#" id="lp_email_cancel">Cancel</a>
        </form>
        <p id="lp_success">A transcript of this chat will be sent to <span id="lp_success_email">your email address</span>.</p>
      </div>
    </div>
    <!-- / chat window -->
