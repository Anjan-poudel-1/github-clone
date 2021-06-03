import React from 'react'
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


const useStyles = makeStyles((theme)=>({

    sidebar:{
       paddingTop:'15px',
        width:'250px',
        height:'1000px',

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
        boxShadow:'0 1px 3px 2px rgba(0,0,0,0.1)'
        },
        sectionone:{
            marginTop:'20px',
            fontSize:'14px',
            fontWeight:'500',
           borderBottom:'2px solid #f1f3f6'
        },
        chip:{
            display: 'flex',
            padding:'4px 0 4px 20px',
            cursor:'pointer',
           
            borderRadius:'0 15px 15px 0 ',
            "&:hover": {
                backgroundColor: '#f2f3f5',
              }
        },
        icon:{
paddingRight:"18px",
fontSize:'21px',
color:'#252526',
opacity:'0.6'
        },
        label:{
color:'#1e1e1e',
opacity:'0.9'
        },
    
}));
function Sidebar() {
    const classes = useStyles();
    return (
        <div className={classes.sidebar}>
            <button className={classes.composebtn}>
            <AddIcon fontSize="large" /> <span style={{fontSize:'15px'}}>Compose</span>
            </button>

<div  className={classes.sectionone}>
        <div className={classes.chip}>

        <div >
<InboxIcon className={classes.icon}/>
        </div>
        <div className={classes.label}>
        Inbox
             </div>

        </div>


        <div className={classes.chip}>

        <div >
<StarIcon className={classes.icon}/>
        </div>
        <div className={classes.label}>  Starred </div>
      
        </div>



        <div className={classes.chip}>

        <div >
<QueryBuilderIcon className={classes.icon}/>
        </div>
        <div className={classes.label}>    Snoozed </div>
     
        </div>



        <div className={classes.chip}>

        <div >
<SendIcon className={classes.icon}/>
        </div>
        <div className={classes.label}>  Sent </div>
       
        </div>



        <div className={classes.chip}>

        <div >
<NoteIcon className={classes.icon}/>
        </div>
        <div className={classes.label}>     Drafts </div>
    
        </div>



        <div className={classes.chip}>

        <div >
        <ExpandMoreIcon className={classes.icon}/>
        </div>
        <div className={classes.label}>  More </div>
       
        </div>

</div>

<div  className={classes.sectionone} style={{marginTop:'8px'}}>

<p style={{paddingLeft:'22px'}}>Meet</p>


<div className={classes.chip}>

<div >
<VideocamIcon className={classes.icon}/>
</div>
<div className={classes.label}> New Meeting </div>

</div>



<div className={classes.chip}>

<div >
<KeyboardIcon className={classes.icon}/>
</div>
<div className={classes.label}> Join a Meeting </div>

</div>




</div>




<div  className={classes.sectionone} style={{marginTop:'8px'}}>

<p style={{paddingLeft:'22px'}}>Hangouts</p>



</div>



        </div>
    )
}

export default Sidebar
