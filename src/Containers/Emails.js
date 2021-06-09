import React from 'react'
import IndivisualEmail from '../Components/IndivisualEmail';
import Loading from '../Components/Loading';
import {useSelector} from 'react-redux'

function Emails({Emaildata,type}) {

    console.log(Emaildata)
    const state = useSelector(state => state)

    //if emails are found render through indivisual email... else show not found ...
    return(
        <div style={{maxHeight:'550px',overflowY:'auto',paddingBottom:'40px'}}>
       {state.loading?<Loading/>:
       Emaildata && Emaildata.length>0? Emaildata.map(a=>{
           
           console.log(a.type)
        return <IndivisualEmail data={a.data} id={a.id} type={a.type?a.type: type}/>
     }):
     (
         <div style={{fontSize:'14px',padding:'10px 30px',borderBottom:'2px solid #f1f3f6'}}> Sorry! There are no mails available</div>
     )
       }
       
        


         </div>
    )
       

        
    
}

export default Emails
