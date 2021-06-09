import React,{useEffect,useState} from 'react'
import ListHeader from '../Components/ListHeader'
import Emails from './Emails';
import {useSelector,useDispatch} from 'react-redux'
import { firestore } from '../Firebase';
import { SetLoading,EmailsLoaded } from '../Redux/ActionCreactor';
function Sent() {
    const [emails,Setemails]= useState(null);
const dispatch = useDispatch();
const state = useSelector(state => state)
    const fetchSentEmails = async()=>{
       const emailsRef = firestore.collection('Emails');
        dispatch(SetLoading());
        await emailsRef.orderBy('createdAt','desc').onSnapshot((snap)=>{
            let arr = [];
            let id=null;
            let emaildata =null;
            snap.docs.map(a=>{
            //If the sent email is the email we logged with, those emails only should be shown in sent
            console.log(a.data())   
            if(a.data().from_email===state.user.email){
                emaildata= {data:a.data(),id:a.id}   
                arr.push(emaildata);
                console.log(emaildata)
            }
            
            });
            Setemails(arr)
            dispatch(EmailsLoaded(arr));
        })
    }
useEffect(() => {
    fetchSentEmails();
}, [])
   
  
    return (
        <div>
            <ListHeader/>
            <Emails Emaildata={emails} type='sent' />
        </div>
    )
}

export default Sent
