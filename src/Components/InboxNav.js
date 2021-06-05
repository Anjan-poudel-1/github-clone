import React from 'react'

function InboxNav({Icon,color,label,selected}) {
    return (
        <div className={selected? `InboxNav ${color}`:'InboxNav'}>
           <Icon style={{fontSize:'18px',marginRight:'15px'}}/> {label}
        </div>
    )
}

export default InboxNav
