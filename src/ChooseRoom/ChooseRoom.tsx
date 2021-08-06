import React, { useState } from 'react';
import PropTypes from 'prop-types'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSession } from '../Chat';
import { CreatePublic } from '../Chat/CreatePublic';

import Pusher from 'pusher-js/with-encryption';

// Enable pusher logging -- DISABLE BEFORE PRODUCTION
Pusher.logToConsole = true;



export const ChooseRoom = (props) => {

    const [open,setOpen] = useState(false);

    // Pusher State
    let [channel_var, setChannel] = useState('my-channel')





    const handleClickOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    }

    const handleCloseSend = () => {
        let pusher = new Pusher('PUSHER_KEY', {
            cluster: 'us2'
        });

        // TODO: Find solution to grabbing input from CreatePublic Dialog Box

        setChannel(channel_var = 'test-channel')
    
        let channel = pusher.subscribe(`${channel_var}`);

        channel.bind('my-event', (data:any) => {
            alert(JSON.stringify(data))
        })

        setOpen(false)
    }

    const user = useSession();
    console.log(user)

    return (
        <div>
            <h1>{user.email}</h1>
            <button onClick={handleClickOpen}>Public Room</button>
            <CreatePublic open={open} handleClose={handleClose} handleCloseSend={handleCloseSend}></CreatePublic>
            <button>Private Room</button>
        </div>
    )
}

