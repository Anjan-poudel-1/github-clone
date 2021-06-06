import React,{useState} from 'react'
import InboxNav from '../Components/InboxNav'
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import './Inbox.css'
import Emails from './Emails';
import ListHeader from '../Components/ListHeader';
import IndivisualEmail from '../Components/IndivisualEmail';
function Inbox() {

    let primarydata=[
        {person:'Anjan Poudel',title:'asdasdasda'}
        ,{person:'Andasdjan Poudel',title:'af vas asdasdasda'},
       
        ];
        let Socialdata=null;
        let PromotionData=null;
     const dataarr = [primarydata,Socialdata,PromotionData];   
    const [selectedNav,setSelectedNav] = useState(1);
    const [data,setEmaildata] = useState(dataarr[0]);
    let onNavChangeHandler = (id)=>{
        console.log("clicked")
        setSelectedNav(id);
        setEmaildata(dataarr[(id-1)]);
    }


    

    return (
        <div>
            <ListHeader/>
 <div className="Inbox_header">
     <div className="nav-div" onClick={()=>onNavChangeHandler(1)}>
     <InboxNav Icon={InboxIcon} selected={selectedNav===1?true:false} color='red' label='Primary' />  
     </div>
     <div className="nav-div" onClick={()=>onNavChangeHandler(2)}>
     <InboxNav Icon={PeopleAltIcon} selected={selectedNav===2?true:false} color='blue' label='Social'  />  
     </div>
         <div className="nav-div" onClick={()=>onNavChangeHandler(3)}>
         <InboxNav Icon={LocalOfferIcon} selected={selectedNav===3?true:false} color='green' label='Promotions' />  
         </div>
        
       
        </div>
        <div className="Inbox Body">
        <Emails Emaildata={data} />
        </div>
        </div>
       
    )
}

export default Inbox
