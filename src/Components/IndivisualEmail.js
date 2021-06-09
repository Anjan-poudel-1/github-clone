import React,{useState,useEffect} from 'react'
import {IconButton, makeStyles,FormControlLabel,Checkbox} from '@material-ui/core'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import GradeIcon from '@material-ui/icons/Grade';
import {Link,useHistory} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { firestore } from '../Firebase';

const useStyles = makeStyles((theme)=>({
    IndivisualMail:{
        height: '45px',
        padding: '2px 10px',
        borderBottom:'2px solid #f1f3f6',
        display: 'flex',
        alignItems:'center',
        cursor:'pointer',
        "&:hover": {
            
            borderLeft:'2px solid #8a8a8a',
            backgroundColor:'#fcfafa'
           }
    },
    firstsec:{
        display:'flex',
        alignItems:'center'
    },
    icons:{
        
        width: '60px',
        position: 'relative'
    },
    star:{
        position: 'absolute',
        left:'30px'
    },
    person:{
        width: '220px',
        height: '100%',
        fontSize:'14px',
      fontWeight:'500',
        paddingRight:'10px',
        opacity: '0.8',
        color:'black'
    },
    displayData:{
      width: '100%',
        fontSize:'14px',
        display: 'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        color: 'black',
        alignItems:'center'
    },
    message:{
      fontWeight:'400',
      paddingLeft:'5px'
    }
    

}));
function IndivisualEmail({data,type,id}) {
    const classes =  useStyles();
    const [starChecked,Setchecked]= useState(false);
    const[starredmail,setStarredMails]= useState([]);
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    let temp_starredEmails=[];

    
    const toEmail = data.to;
    var timeinString= null; 
   if(data.createdAt){
     timeinString =new Date(data.createdAt.toDate()).toLocaleString("en-US", {timeZone: "Asia/Kathmandu"})

    
    var timestamp = timeinString.split(',')[0];
   
   }
    var todayTimestamp = new Date().toLocaleString("en-US", {timeZone: "Asia/Kathmandu"});
    var todayDate = todayTimestamp.split(',')[0]
   
   
   if(todayDate===timestamp){
   
     timestamp = timeinString.split(',')[1]
   }
   let totallength=120;
   let remaininglength = 0;
   let subjectLength = 0;

   if(data.subject){
    subjectLength= data.subject.length;
    if(subjectLength>100){
      remaininglength=totallength-100
    }else{
      remaininglength= totallength-subjectLength
    }
   }

   let starClicked=(check,emailid)=>{
    console.log(check);
    let starredby= null;
let starredEmailsRef = firestore.collection('Starred')
    if(check){
      //delete the starred email
    starredmail.map(a=>{
      console.log(a.data.id,emailid);
      if(a.data.id===emailid){
let tobeDeletedStarID=a.Starredid;
console.log(tobeDeletedStarID);
starredby=
starredEmailsRef.doc(tobeDeletedStarID).delete().then(()=>{
  console.log('deleteedd')
})
      }

   
    })
        Setchecked(false);
    }
    else{
      //aDD starred email
      starredEmailsRef.add({data,id,type,by:state.user.email})
     
      Setchecked(true);

    }
    

  }



   useEffect(()=>{

    const emailsRef = firestore.collection('Starred');
    emailsRef.onSnapshot((snap)=>{
      let temparr= [];
      snap.docs.map(a=>{
        console.log(a.data());

        //If the person who starred email is same as the user logged in 
        //starred mails should not be visible by email id. kina ki arko ko ma pani dekhinxa jasle star gareko hoina


        if(a.data().by===state.user.email)
        temparr.push({data:a.data(),Starredid:a.id})
      })
      setStarredMails(temparr)
    })
    //yesma read garni kun kun starred thyo vanera ... first time display garauda


   },[starChecked]);

useEffect(()=>{
console.log(starredmail)
starredmail.map(a=>{
  if(a.data.id===id){
    Setchecked(true);
  }
})
},[starredmail])


   return (
     
     
        <div className={classes.IndivisualMail}>
      
      <div className={classes.icons}>
      <FormControlLabel
        control={
          <Checkbox
         disableRipple="true"
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            color="default"
            size ="small"
            
          />
        }
      />
       <FormControlLabel
        
        control={<Checkbox
            disableRipple="true"
              icon={<StarOutlineIcon />} 
        checkedIcon={<GradeIcon style={{fill: 'gold'}}/>}  size="small" />}
        className={classes.star} checked={starChecked}
        onClick={()=>starClicked(starChecked,id)}
      />
      </div>
      <Link to={`/mail/${id}`} style={{width:'100%',textDecoration:'none',height:'100%'}}>
      <div style={{display:'flex',alignItems:'center',height:'100%'}}>
      <div className={classes.firstsec}>
     <div className={classes.person}>



        {type==='sent'?<>To: {toEmail.substring(0,21)} {toEmail.length>21?<>...</>:null} </>:  state.user.email===data.from_email?<>me</>:  data.from_Name}
         
         </div> 
       </div>
       
     
        <div className={classes.displayData}>
<div style={{fontWeight:'500'}}>

  { data.subject?
  
   data.subject.length<100?

<>
{data.subject} - 
{(data.message.length<remaininglength)?
  <span className={classes.message}>{data.message} </span>:
( <span className={classes.message}>{data.message.substring(0,remaininglength)}... </span>)}

</>:

<>
{data.subject.substring(0,100)} - <span className={classes.message}>{data.message.substring(0,remaininglength)}... </span>


</>:<>(no subject) - <span className={classes.message}>{data.message.length>100? <>{data.message.substring(0,100)}...</>:data.message} </span></>
}
</div>
       <div style={{fontSize:'12px',paddingRight:'15px',color:'gray'}}> {timestamp}</div>
        </div>
        </div>
        </Link>
        </div>
        
    )
}

export default IndivisualEmail
