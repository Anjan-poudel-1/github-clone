import React from 'react'
import IndivisualEmail from '../Components/IndivisualEmail';


function Emails({Emaildata}) {

    //if emails are found render through indivisual email... else show not found ...
    return(
        Emaildata? Emaildata.map(a=>{
            return <IndivisualEmail data={a}/>
         }):
         (
             <div style={{fontSize:'14px',padding:'10px 30px',borderBottom:'2px solid #f1f3f6'}}> NO EMAILS FOUND.........</div>
         )
    )
       

        
    
}

export default Emails
