import React from 'react';
import Home from './Home.jsx';
import Reports from './Reports.jsx';
import Tasks from './Tasks.jsx';
import Resources from './Resources.jsx';
import Accounts from './Accounts.jsx';
import Contacts from './Contacts.jsx';

const Router = (props) => {
  if(props.screen === 'Home'){
    return <Home status={props.status} />
  }
  if(props.screen === 'Reports'){
    return <Reports report={props.admin.Reports} />
  }
  if(props.screen === 'Resources'){
    return <Resources status={props.status} />
  }
  if(props.screen === 'Accounts'){
    return <Accounts status={props.status} accounts={props.admin.Accounts} />
  }
  if(props.screen === 'Tasks'){
    return <Tasks status={props.status} adminTasks={props.admin.Tasks} staffTasks={props.staff.Tasks} />
  }
  if(props.screen === 'Contacts'){
    return <Contacts status={props.status} />
  } 
  // if(props.screen === 'Chat'){
  //   return <Chat/>
  // }
}

export default Router; 