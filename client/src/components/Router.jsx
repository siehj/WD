import React from 'react';
import Home from './Home.jsx';
import Reports from './Reports.jsx';
import Tasks from './Tasks.jsx';
import Resources from './Resources.jsx';
import Accounts from './Accounts.jsx';
import Contacts from './Contacts.jsx';

const Router = (props) => {
  if(props.screen === 'Home'){
    return <Home/>
  }
  if(props.screen === 'Reports'){
    return <Reports/>
  }
  if(props.screen === 'Resources'){
    return <Resources/>
  }
  if(props.screen === 'Accounts'){
    return <Accounts/>
  }
  if(props.screen === 'Tasks'){
    return <Tasks/>
  }
  if(props.screen === 'Contacts'){
    return <Contacts/>
  }
  // if(props.screen === 'Chat'){
  //   return <Chat/>
  // }
}

export default Router; 