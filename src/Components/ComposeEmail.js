import React,{useState} from 'react'
import {Button, makeStyles, Paper} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import {useSelector,useDispatch} from 'react-redux'
import {hideForm} from '../Redux/ActionCreactor'

import {useForm} from'react-hook-form' //For validation

function ComposeEmail() {
const state = useSelector((state) => state)
  const {register,handleSubmit,watch,reset, formState: { errors }} = useForm();  
     console.log(state);
     const dispatch = useDispatch();
    const useStyles = makeStyles((theme)=>({
        form:{
            visibility:state.openform?'visible':'hidden',
        height: '500px',
        width:'550px',
        position: 'absolute',
        bottom:'0',
        right: '100px',
        borderRadius:'12px 12px 0 0',
        padding: '0',
        
        },
        title:{
            backgroundColor:'#404040',
            height:'22px',
            width:'520px',
            borderRadius:'12px 12px 0 0',
            color:'#fafafa',
            padding:'10px 15px',
            display: 'flex',
            justifyContent:'space-between',
            
        },
        closebtn:{
            cursor: 'pointer',
            color:'#fafafa',
            fontSize:'18px'
        },
        input:{
            height:"25px",
         padding:'10px 0 0 5px',
            outline:'none',
            border:'none',
            borderBottom:'2px solid #f1f3f4',
            width:'90%'
        },
        body:{
            paddingLeft:'15px'
        },
        textarea:{
            paddingTop:'10px',
            width:'90%',
            height:'250px',
            resize: 'none',
            outline: 'none',
       border:'none'
        },
        footer:{
            height:'35px',
            paddingTop:'20px',
            width:'95%',
            paddingLeft:'15px',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            position: 'absolute',
            bottom:'10px'
        },
        sendbtn:{
            width:'100px',
            opacity: '0.97'
        },
        deletebtn:{
            color:'gray',
            marginRight:'10px',
            cursor:'pointer'
        },
        inputwrap:{
            position:'relative'
        },
        errorcomp:{
            position: 'absolute',
            color:'red',
            fontSize:'14px',
            right:'10px',
            top: '-8px'
        }
        }));


    const classes = useStyles();
    const [to,SetTo] = useState(null);
    const [subject,SetSubject] = useState(null);
    const [message,SetMessage] = useState(null);

    let formclosed= ()=>{

        dispatch(hideForm());

    }
    let onFormSubmit=(data)=>{
console.log(data)
reset();
    }
    return (
        <Paper elevation={8} className={classes.form}>
            <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className={classes.title}>
                <h4 style={{margin:'0'}}>New Message</h4>
<div className={classes.closebtn}>
<CloseIcon size='small' className={classes.closebtn} onClick={formclosed} />
</div>
            </div>

            <div className={classes.body}>
                
                    
            <div className={classes.inputwrap}>             
<input
 type="email" 
 placeholder="To"
name="to"
  className={classes.input}
  {...register('to',{required:true})}
  />
    {errors.to?<p className={classes.errorcomp}>Field cannot be empty</p>:null}
</div>



  <div className={classes.inputwrap}>
  <input 
type="text"
 placeholder="Subject"
  name="subject"
  className={classes.input}
  {...register('subject',{required:true})}
  />

  
  {errors.subject?<p className={classes.errorcomp}>Field cannot be empty</p>:null}
  

  </div>


  <div className={classes.inputwrap}>
<textarea
 className={classes.textarea}
 name="message"
 {...register('message',{required:true})}
  />
  {errors.message?<p className={classes.errorcomp}>Field cannot be empty</p>:null}
</div>





            </div>
            <div className={classes.footer}>
<Button
 variant="contained"
  color="primary"
   className={classes.sendbtn}
   type="submit">
       Send
</Button>
           <DeleteIcon className={classes.deletebtn} size='small' />

            </div>
            </form>
        </Paper>
    )
}

export default ComposeEmail
