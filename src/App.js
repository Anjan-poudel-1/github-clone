import React,{useEffect} from 'react'
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
import ComposeEmail from './Components/ComposeEmail'
import {useDispatch,useSelector} from 'react-redux'
import InitialPage from './Containers/InitialPage'
import {auth} from './Firebase'
import {userlogin} from './Redux/ActionCreactor'
import OpenMail from './Components/OpenMail'
const useStyles = makeStyles((theme)=>({
bodycomp:{
  display: 'flex'
}
}));
function App() {
  const classes= useStyles();
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
  
    auth.onAuthStateChanged((person)=>{
      console.log(person)
      if(person){

        dispatch(userlogin(person))
      }
    })

  }, [])


  return (
    <Router>
          
   
  

      {!state.user?<InitialPage/>:
      
      <div>
      <Header user={state.user}/>
      <div className={classes.bodycomp}>
 <Sidebar user={state.user}/>
 <Switch>
   <Route exact path="/" component={Inbox}/>
   <Route path="/inbox" component={Inbox}/>
   <Route path="/sent" component={Sent}/>
   <Route path="/starred" component={Starred}/>
    <Route path="/snoozed" component={Snoozed}/>
<Route exact path="/mail/:id" component={OpenMail}/>
<Route path="*" component={ErrorPage}/>
 </Switch>

      </div>
      <ComposeEmail/>
    </div>
      }
      

    </Router>

    
  )
}

export default App
