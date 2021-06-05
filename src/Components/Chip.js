import React from 'react'

import './Chip.css'


function Chip({Icon,label,selected,color}) {

    return (
        <div className={selected?`chip selected ${color}`:`chip`}>
        <div>
<Icon className='icon' style={{fontSize:'20px'}}/>
        </div>
        <div className='label'>
        {label}
             </div>

        </div>
    )
}

export default Chip
