import React,{useState,useEffect} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import SendIcon from '@material-ui/icons/Send';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import {IconButton} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import PersonIcon from '@material-ui/icons/Person';
import CallIcon from '@material-ui/icons/Call';
import Chip from '../Components/Chip'
import {Link} from 'react-router-dom'
import Plus from '../images/plus.png'
import {showForm} from '../Redux/ActionCreactor'
import {useDispatch} from 'react-redux'
const useStyles = makeStyles((theme)=>({
    sidebar:{
       paddingTop:'15px',
        width:'260px',
        height:'100%',
        paddingLeft:'5px'
    },
    composebtn:{
        display: 'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        fontWeight:'400',
        backgroundColor:'white',
        outline:'none',
        border:'none',
        borderRadius:'20px',
        width: '140px',
        height: '45px',
        marginLeft:'5px',
        boxShadow:'0 1px 3px 2px rgba(0,0,0,0.1)',
        transition:'0.2s ease',
        cursor: 'pointer'
        ,
        "&:hover": {
               boxShadow:'0 2px 15px 7px rgba(0,0,8,0.1)'
              }
        },
        sectionone:{
            marginTop:'20px',
            fontSize:'14px',
            fontWeight:'500',
           borderBottom:'2px solid #f1f3f6'
        },
        hangout_section: {
                display:'flex',
                justifyContent:'space-between',
                paddingLeft:'18px',
                marginBottom:'5px'
        },
        my_desc:{
        display:'flex',
        alignItems:'center',
        position:'relative'
},
online:{
position: 'absolute',
height:'10px',
width:'10px',
backgroundColor:'#35AC19',
borderRadius:'50%',
top:'22px',
left:'22px'
},
pagination:{
width: '150px',
height:'150px',
margin:'auto',
textAlign:'center'
},
message:{
        color:'gray',
        fontSize:'12px',
        marginTop:'12px'
},
footericons:{
        width: '100px',
      justifyContent:'space-around',
        margin:'auto',
        display: 'flex',
       color: 'gray',
        fontSize:'12px',
        alignItems:'center'
},
icon_foot:{
        padding:'4px',
        paddingBottom:'0',
        cursor: 'pointer'
},
link:{
        textDecoration:'none'
},
avatar:{
        marginRight:'5px',
        height:"30px",
    width:'30px',
    borderRadius:'50%',
backgroundPosition:'center',
backgroundRepeat:'no-repeat',
backgroundSize:'cover',


}
        
    
}));
function Sidebar({user}) {
    const classes = useStyles();
     const dispatch = useDispatch();   
    const [selectedNav,setNavSelected] = useState(1);
    const onNavChange = (id)=>{
            console.log("clicked")
        setNavSelected(id);
    }

    let composeMail = ()=>{
                dispatch(showForm());
    }

    return (
        <div className={classes.sidebar}>
            <button className={classes.composebtn} onClick={composeMail}>
            <img src={Plus}/> <span style={{fontSize:'15px'}}>Compose</span>
            </button>

<div  className={classes.sectionone}>

        <Link to='/inbox'className={classes.link}  onClick={()=>onNavChange(1)}>
            <Chip  Icon={InboxIcon} label="Inbox" selected={selectedNav===1?true:false} color='Inboxred' /> 
        </Link>  
         <Link to='/starred' className={classes.link} onClick={()=>onNavChange(2)}>
 <Chip  Icon={StarIcon}  label="Starred" selected={selectedNav===2?true:false}/>  
        </Link> 
        <Link to='/snoozed' className={classes.link} onClick={()=>onNavChange(3)}>
<Chip  Icon={QueryBuilderIcon} label="Snoozed" selected={selectedNav===3?true:false}/> 
</Link>  
      <Link to='/sent' className={classes.link} onClick={()=>onNavChange(4)}>
  <Chip  Icon={SendIcon} label="Sent" selected={selectedNav===4?true:false}/>   
        </Link> 
      <Chip  Icon={NoteIcon} label="Drafts"/>   
      <Chip  Icon={ExpandMoreIcon} label="More"/>   

</div>

<div  className={classes.sectionone} style={{marginTop:'8px'}}>
<p style={{paddingLeft:'22px'}}>Meet</p>

<Chip  Icon={VideocamIcon} label="New Meeting"/>  
<Chip  Icon={KeyboardIcon} label="Join a Meeting "/>  


</div>

<div  className={classes.sectionone} style={{marginTop:'8px'}}>

<p style={{paddingLeft:'22px'}}>Hangouts</p>
<div className={classes.hangout_section}>

<div className={classes.my_desc}>
        <div className={classes.avatar} style={{backgroundImage:`url('${user.photoURL}')`}}></div>
       <div className={classes.online}/>
        <span style={{display:'flex'}}> Anjan <ExpandMoreIcon style={{marginTop:'4px',fontSize:'14px'}}/></span>
</div>
<IconButton  aria-label="add an alarm" size='small'>
        <AddIcon style={{fontSize:'22px'}}/>
      </IconButton>

</div>


</div>
<div  className={classes.sectionone} style={{marginTop:'8px'}}>

<div className={classes.pagination}>

<ChatIcon style={{fontSize:'80px',color:'#f2f2f2'}}/>
<br/>
<div className={classes.message}>
No recent chats<br/>
<a href="#" style={{textDecoration:'none'}}>Start a new one</a>
</div>
</div>        

</div>
<div className={classes.footericons}>
        <div className={classes.icon_foot}>
<PersonIcon style={{fontSize:'18px'}}/>
        </div>
        <div className={classes.icon_foot} style={{backgroundColor:'#f1f3f4'}}>
        <ChatIcon style={{fontSize:'18px'}} />        
        </div>
        <div className={classes.icon_foot}>
        <CallIcon style={{fontSize:'18px'}}/>
        </div>
</div>


        </div>
    )
}

export default Sidebar
