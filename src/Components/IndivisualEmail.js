import React from 'react'
import {IconButton, makeStyles,FormControlLabel,Checkbox} from '@material-ui/core'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import GradeIcon from '@material-ui/icons/Grade';

const useStyles = makeStyles((theme)=>({
    IndivisualMail:{
        height: '100%',
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
        opacity: '0.8'
    },
    displayData:{
        fontSize:'14px'
    }
    

}));
function IndivisualEmail({data}) {
    const classes =  useStyles();
    return (
        <div className={classes.IndivisualMail}>
       <div className={classes.firstsec}>
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
        className={classes.star}
      />
      </div>
       
     <div className={classes.person}>
         {data.person}
         
         </div> 
       </div>
        <div className={classes.displayData}>
asdasdaa asdjkas das dkajs daksj daskj dakjs dakj 
        </div>
    
        </div>
    )
}

export default IndivisualEmail
