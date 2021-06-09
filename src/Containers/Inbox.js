import React,{useState,useEffect} from 'react'
import InboxNav from '../Components/InboxNav'
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import './Inbox.css'
import Emails from './Emails';
import {useSelector,useDispatch} from 'react-redux'
import ListHeader from '../Components/ListHeader';
import IndivisualEmail from '../Components/IndivisualEmail';
import { firestore } from '../Firebase';
import { SetLoading,EmailsLoaded } from '../Redux/ActionCreactor';
function Inbox() {

    const[primarydata,Setprimarydata]=useState(null)
    const[Socialdata,SetSocialdata]=useState(null)
    const[PromotionData,SetPromotionData]=useState(null)
     const dataarr = [primarydata,Socialdata,PromotionData];   
    const [selectedNav,setSelectedNav] = useState(1);
    const [data,setEmaildata] = useState(dataarr[0]);
    let onNavChangeHandler = (id)=>{
        console.log("clicked")
        setSelectedNav(id);
        console.log(dataarr[(id-1)])
        setEmaildata(dataarr[(id-1)]);
    }

    const dispatch = useDispatch();
    const state = useSelector(state => state)
    const fetchInboxEmails = async()=>{
       const emailsRef = firestore.collection('Emails');
        dispatch(SetLoading());
        await emailsRef.orderBy('createdAt','desc').onSnapshot((snap)=>{
            let arr = [];
            let emaildata =null;
            snap.docs.map(a=>{
            //If the sent email is the email we logged with, those emails only should be shown in sent
            console.log(a.data())   

            //if the logged in email is either sender or receiver save it in state. 

            
            if(a.data().to===state.user.email){
                 emaildata= {data:a.data(),id:a.id,type:'sent_email'}
                arr.push(emaildata);
               console.log(emaildata)
            }
            
            });
            dispatch(EmailsLoaded(arr));
        
            Setprimarydata(arr) 
            setEmaildata(arr);
        })
    }
useEffect(() => {
    fetchInboxEmails();
   
}, [])


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
        <Emails Emaildata={data} type='inbox' />
        </div>
        </div>
       
    )
}

export default Inbox
