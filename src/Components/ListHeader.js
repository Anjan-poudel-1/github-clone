import React from 'react'
import './ListHeader.css'
import ReplayIcon from '@material-ui/icons/Replay';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Checkbox from '@material-ui/core/Checkbox';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import { IconButton } from '@material-ui/core';

function ListHeader() {
    return (
        <div className='listheader'>

<div className='section_a'>
<div className="checkbox">
<Checkbox
       
        size='small'
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /><ArrowDropDownIcon size='small'/>
</div>
<div>
<IconButton size='small'>
<ReplayIcon/>
</IconButton>
<IconButton size='small'>
<MoreVertIcon/>
</IconButton>
</div>

</div>

<div className="section_b">

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
    )
}

export default ListHeader
