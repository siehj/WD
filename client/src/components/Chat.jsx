import React from 'react';
import io from 'socket.io-client';


class Chat extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {};
    

  }
  componentDidMount() {
    // let socket = io.connect();

    // socket.on('connect', () => {
    //   console.log('connection made client side');
    // });
  }
  // socket = io();
  render() {
    return (
      <div>
        {/* <label className="text-center" >Chat</label> */}
        <div id="Chat">
          
        </div>
        <input type="text" name="chat" id="chatInput"/><button type="button" >Enter</button>
      </div>
    )
  }
}

export default Chat; 