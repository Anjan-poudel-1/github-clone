import React from 'react'
import Header from './Containers/Header'
import Sidebar from './Containers/Sidebar'
import EmailSection from './Containers/EmailSection'
import Inbox from './Containers/Inbox'
import {makeStyles} from '@material-ui/core'
import {BrowserRouter as Router , Link,Switch,Route} from 'react-router-dom'
import Sent from './Containers/Sent'
import Starred from './Containers/Starred'
import Mail from './Containers/Mail'
import Snoozed from './Containers/Snoozed'
import ErrorPage from './Containers/ErrorPage'
const useStyles = makeStyles((theme)=>({
bodycomp:{
  display: 'flex'
}
}));
function App() {
  const classes= useStyles();
  return (
    <Router>
          
   
    <div>
      <Header/>
      <div className={classes.bodycomp}>
 <Sidebar/>
 <Switch>
   <Route exact path="/" component={Inbox}/>
   <Route path="/inbox" component={Inbox}/>
   <Route path="/sent" component={Sent}/>
   <Route path="/starred" component={Starred}/>
    <Route path="/snoozed" component={Snoozed}/>
<Route exact path="/emails/:id" component={Mail}/>
<Route path="*" component={ErrorPage}/>
 </Switch>

      </div>
  
    </div>

    </Router>

    
  )
}

export default App
