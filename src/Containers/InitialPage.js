import React from 'react'
import {Button, makeStyles} from '@material-ui/core'
import gmailImage from '../images/loginPage_gmail.jpg'
import {useDispatch,useSelector} from 'react-redux'
import {auth,provider} from '../Firebase'
import {userlogin} from '../Redux/ActionCreactor'
const useStyles = makeStyles((theme)=>({
    initialpage:{
       position: 'absolute',
       top:'45%',
       left:'50%',
       transform:`translate(-50%,-50%)`
    },
    login:{
        display: 'flex',
        justifyContent:'center',
        flexDirection:'column'
    },
    loginbtn:{
        width:'50%',
        marginLeft:'100px'
    }
  
}));

function InitialPage() {
    const classes = useStyles();
 const dispatch = useDispatch();
    let googleLogin = async()=>{
await auth.signInWithPopup(provider).then(
    res=>{
        console.log(res.user)
        dispatch(userlogin(res.user));
    }
).catch(error=>{
    alert(error)
})

    }

    return (
        <div className={classes.initialpage}>
            <div>
            <div className={classes.login}>
<img src = {gmailImage} width='400px' />
<Button variant="contained" color="primary" onClick={googleLogin} className={classes.loginbtn}>LOGIN</Button>
         </div>
            </div>
         
        </div>
    )
}

export default InitialPage
