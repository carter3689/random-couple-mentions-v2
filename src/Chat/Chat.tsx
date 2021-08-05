import React, { useEffect, useRef, useState } from 'react';
import { SignIn } from '../SignIn';
import { SignOut } from '../SignOut';
import { ChatRoom } from '../ChatRoom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';


import { firebase_config } from '../firebaseconfig';

firebase.initializeApp(firebase_config);
const auth = firebase.auth();
const firestore = firebase.firestore();

export const Chat = () => {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}
