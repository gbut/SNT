    <!-- + chat window -->
    <div id="chat_win" style="">
      <div id="lp_thread"></div>
      <textarea id="lp_type"></textarea>
      <!-- <button id="lp_send">Send</button> -->
      <a href="#" id="btn_end_chat" class="btn btnEndChat">End Chat</a>
      <div id="lp_agent_typing" style="width:20px;height:20px;position:absolute;top:276px;right:20px;background:blue;overflow:hidden;display:none;"></div>
      <a href="#" id="btn_close_chat" class="close">Close</a>
      <a href="#" id="btn_email_transcript" class="" style="position:absolute;top:6px;right:70px;">Email Transcript</a>
      <a href="#" id="btn_launch_popup" class="" style="position:absolute;top:6px;left:50px;">Launch in new window</a>
      <div id="lp_email_transcript" style="width:400px;height:50px;position:absolute;top:76px;left:20px;background:red;display:none;">
        <form id="lp_form_email" name="lp_form_email" method="post" action="">
          <input type="email" id="lp_email" name="email" class="required email" value="" />
          <!-- <button>Send</button> -->
          <input type="submit" value="Send" />
          <a href="#">Cancel</a>
        </form>
      </div>
    </div>
    <!-- / chat window -->
