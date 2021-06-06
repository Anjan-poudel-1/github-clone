import React from 'react'
import ListHeader from '../Components/ListHeader'
import Emails from './Emails';
function Sent() {
    const data = null;
    return (
        <div>
            <ListHeader/>
            <Emails Emaildata={data} />
        </div>
    )
}

export default Sent
