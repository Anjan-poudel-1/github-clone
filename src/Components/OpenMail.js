import React,{useState,useEffect} from 'react'
import {makeStyles} from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ArchiveIcon from '@material-ui/icons/Archive';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import DeleteIcon from '@material-ui/icons/Delete';
import DraftsIcon from '@material-ui/icons/Drafts';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import LabelIcon from '@material-ui/icons/Label';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import KeyboardIcon from '@material-ui/icons/Keyboard';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton } from '@material-ui/core';
import { firestore } from '../Firebase';
import { SetLoading,EmailsLoaded } from '../Redux/ActionCreactor';
const useStyles = makeStyles((theme)=>({

    header:{
        height: '50px',
        borderBottom: '2px solid #f1f3f6',
        width:' 1200px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    sectionOne:{
        width:'440px',
        display:'flex',
        justifyContent:'space-between'
    },
    icon:{
        fontSize:'23px'
    },
    title:{
        fontSize:'23px',
        fontWeight:'400',
        padding:'15px 90px'
    },
    emailDetails:{
        padding:'10px 20px',
        display: 'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    avatar:{
        height:'40px',
        width:'40px',
        borderRadius:'50%',
        backgroundPosition:'center',
        backgroundSize:'cover',
        marginRight:'15px'
    },
    personDetail:{
        display: 'flex',
        alignItems:'center'
    },
    myname:{
        fontSize:'14px',
        lineHeight:'20px'
    },
    me:{

        display: 'flex'
    }

}));



function OpenMail() {
    const classes = useStyles();
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const history= useHistory();
   
    const [openedEmail,setOpenedEmails] = useState(null)
    const [timeinString,SettimeinString] = useState('sasdas')
    let currentID= history.location.pathname.split('/')[2];
   

    const fetchOpenedMail =()=>{
        const emailsRef = firestore.collection('Emails');
       
         emailsRef.orderBy('createdAt','desc').onSnapshot((snap)=>{
           
           
            let emaildata =null;
            snap.docs.map(a=>{
            //If the sent email is the email we logged with, those emails only should be shown in sent
            console.log(a.data()) 
            console.log(a.id,currentID)  
            if(a.id===currentID){
              console.log('matched...........')
             let time =new Date(a.data().createdAt.toDate()).toLocaleString("en-US", {timeZone: "Asia/Kathmandu"}).split(',').slice('0,1')
             SettimeinString(time)
              console.log(a.data())  
              emaildata= {data:a.data(),id:a.id,type:'received_email'}   
            }
            setOpenedEmails(emaildata)
            console.log(emaildata)
            });
            
      
        })
    }

    useEffect(() => {
        fetchOpenedMail();
    }, [])
   
   
    return (
        <div>
           <div className={classes.OpenMail}>
               <div className={classes.header}>
                    <div className={classes.sectionOne}>
         <IconButton size='small' onClick={history.goBack}>
           <KeyboardBackspaceIcon />
        </IconButton>   
        <IconButton size='small'>
          <ArchiveIcon className={classes.icon}/>
        </IconButton>   
        <IconButton size='small'>
          <NewReleasesIcon    className={classes.icon}/>
        </IconButton>   
        <IconButton size='small'>
          <DeleteIcon  className={classes.icon}/>
        </IconButton>   
        <IconButton size='small'>
          <DraftsIcon className={classes.icon}/>
        </IconButton>   
        <IconButton size='small'>
          <AccessAlarmIcon className={classes.icon}/>
        </IconButton>   
        <IconButton size='small'>
          <CloudDoneIcon className={classes.icon}/>
        </IconButton>   
        <IconButton size='small'>
          <LabelIcon className={classes.icon}/>
        </IconButton>   
        <IconButton size='small'>
          <MoreVertIcon className={classes.icon}/>
        </IconButton>   
        
                    </div>
            
            
            
            
            
            
            <div className={classes.sectionTwo}>
                       
<IconButton size='small'>
<ArrowBackIosIcon style={{fontSize:'15px',marginLeft:'5px'}}/>
</IconButton>
<IconButton size='small'>
<ArrowForwardIosIcon style={{fontSize:'15px',marginLeft:'5px'}}/>
</IconButton>
<IconButton size='small'>
<KeyboardIcon/>
</IconButton>
                    </div>
               </div>

{console.log(openedEmail)}

{openedEmail?
    (<div className={classes.body}>
    <div className={classes.title}>
{openedEmail.data.subject?openedEmail.data.subject:<>(no subject)</>}
    </div>
    <div className={classes.emailDetails}>

    <div className={classes.personDetail}>
    
        <div className={classes.avatar} style={{backgroundImage:`url('${openedEmail.data.senderImage}')`}}>

        </div>
        <div>
            <div className={classes.myname}>
           <div className={classes.me}> 
             <div style={{fontWeight:'600',fontSize:'15px'}}>  {openedEmail.data.from_Name}</div>
             <div style={{fontSize:'12px',opacity:'0.8',marginLeft:'5px'}}> {`<${openedEmail.data.from_email}>`} </div>

           </div>
           
           <div style={{fontSize:'13px',position:'relative',opacity:'0.9'}}>
                to: {openedEmail.data.to===state.user.email?<>me</>: openedEmail.data.to}  
                
                <ExpandMoreIcon style={{fontSize:'14px',position:'relative',top:'4px'}}/> 
           </div>
        </div>
        </div>

    </div>
    
    <div style={{fontSize:'13px',color:'gray'}}>
{timeinString}
    </div>

        </div>


<div style={{padding:'10px 75px',height:'300px'}}>
{openedEmail.data.message}


    </div>

</div>):
null
}


            </div> 
        </div>
    )
}

export default OpenMail
