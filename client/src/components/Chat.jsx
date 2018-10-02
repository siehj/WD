import React from 'react';
import socketIOClient from 'socket.io-client';
// const io = socketIo(server);

const Chat = (props) => {
  // socket = io();
  return (
    <div>
      {/* <label className="text-center" >Chat</label> */}
      <div id="Chat">
        
      </div>
      <input type="text" name="chat" id="chatInput"/><button type="button" >Enter</button>
    </div>
  )
}

export default Chat; 