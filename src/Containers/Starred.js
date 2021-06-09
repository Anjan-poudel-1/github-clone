import React,{useState,useEffect} from 'react'
import ListHeader from '../Components/ListHeader'
import Emails from './Emails';
import {useSelector,useDispatch} from 'react-redux'
import { firestore } from '../Firebase';
import { SetLoading,EmailsLoaded } from '../Redux/ActionCreactor';
function Starred() {
    const [emails,Setemails]= useState(null);
    const dispatch = useDispatch();
const state = useSelector(state => state)


const fetchStarredEmails = async()=>{
    const emailsRef = firestore.collection('Starred');
     dispatch(SetLoading());
     await emailsRef.onSnapshot((snap)=>{
         let arr = [];
         let id=null;
         let emaildata =null;
         snap.docs.map(a=>{
         //If the sent email is the email we logged with, those emails only should be shown in sent
         console.log(a.data())   
         if(a.data().data.from_email===state.user.email && a.data().data.to!==a.data().data.from_email  && a.data().by===state.user.email ){
            emaildata= {data:a.data().data,id:a.data().id,type:'sent'}   
            arr.push(emaildata);
            console.log(emaildata)
         } 
         
         if( a.data().data.to===state.user.email && a.data().by===state.user.email ){
            emaildata= {data:a.data().data,id:a.data().id,type:'received_email'}   
            arr.push(emaildata);
            console.log(emaildata)
         }
         
         });
         Setemails(arr)
         dispatch(EmailsLoaded(arr));
     })
 }
useEffect(() => {
    fetchStarredEmails();
}, [])




    return (
        <div>
            <ListHeader/>
            <Emails Emaildata={emails} />
        </div>
    )
}

export default Starred
