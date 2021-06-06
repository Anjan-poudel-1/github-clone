import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import gmailImage from '../images/gmail.png'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import {Link} from 'react-router-dom'
import { auth } from '../Firebase';
import {useDispatch} from 'react-redux'
import {usersignout} from '../Redux/ActionCreactor'

const useStyles = makeStyles((theme)=>({
header:{
    width: '100%',
    padding:'0 12px',
    height: '65px',
   display: 'flex',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottom:'2px solid whitesmoke'
   
},
leftHeader:{
    display: 'flex',
    alignItems:'center',
    marginRight:'30px'
},
searchtext:{
    backgroundColor:"transparent",
    outline: 'none',
    border:"none",
    width: '580px',
    paddingLeft:'10px',
    fontSize:'16px'
},
midHeader:{
    backgroundColor:'#f1f3f4',
    height: '50px',
    width:'700px',
    display: 'flex',
    justifyContent:'space-between',
    alignItems:'center',
    borderRadius:'10px',
    marginRight:'20%'

},
rightHeader:{
    
    width:'230px',
    display: 'flex'
},
margin: {
    marginRight:'2px'
},
avatar:{
    height:"35px",
    width:'35px',
    borderRadius:'50%',
backgroundPosition:'center',
backgroundRepeat:'no-repeat',
backgroundSize:'cover'
},
modal:{
    padding:'15px',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
},
myImage:{
    height:"75px",
    width:'75px',
    borderRadius:'50%',
backgroundPosition:'center',
backgroundRepeat:'no-repeat',
backgroundSize:'cover'
},
menuItem:{
    marginTop:'5px',
    border:'1px solid #808080',
    borderRadius:'5px'
}
}));
function Header({user}) {
    const classes = useStyles();
    const dispatch =  useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleSignOut = async()=>{
      await  auth.signOut().then(res=>{
          console.log(res);
          dispatch(usersignout());
      })
    }

    return (
        <div className={classes.header}>

            <div className={classes.leftHeader}>
            <IconButton aria-label="menu" className={classes.margin}>
          <MenuIcon />
             </IconButton>
             <div className={classes.logo} style={{marginLeft:'5px'}}>
        <Link to="/">  <img src={gmailImage}/></Link>   
             </div>
            
            </div>

            <div className={classes.midHeader} >
                <div style={{display:'flex'}}>
                <IconButton aria-label="search" className={classes.margin}>
          <SearchIcon />
             </IconButton>  
                <input type="search" placeholder="Search mail" className={classes.searchtext} ></input>
                </div>
            
              <div>
              <IconButton aria-label="drop-down" className={classes.margin}>
          <ArrowDropDownIcon />
             </IconButton> 
              </div>
             
                      
            </div>

            <div className={classes.rightHeader}>
            <IconButton aria-label="drop-down" >
          < HelpOutlineOutlinedIcon/>
             </IconButton>
             <IconButton aria-label="drop-down" >
          <SettingsIcon />
             </IconButton>
             <IconButton aria-label="drop-down" >
          <AppsIcon />
             </IconButton>
             <IconButton aria-label="drop-down"   
             disableFocusRipple
            disableRipple
            style={{ backgroundColor: "transparent" }}>

         <div className={classes.avatar} 
         className={classes.avatar}
         style={{backgroundImage:`url('${user.photoURL}')`}}
         onClick={handleClick}
         >




         </div>
         <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{top:'40px'}}
      >
      <div className={classes.modal}>
         <div className={classes.myImage} style={{backgroundImage:`url('${user.photoURL}')`}}>

        </div> 

        <p style={{fontSize:'20px',fontWeight:'500',marginBottom:'0'}}>{user.displayName}</p>
      
      <p style={{color:'gray',fontSize:'14px',marginTop:'5px'}}>{user.email}</p>
     
      <MenuItem onClick={handleSignOut}
      className={classes.menuItem}>
          Sign out
          </MenuItem>

      </div>
      
      </Menu>
             </IconButton>
            </div>
        </div>
    )
}

export default Header
