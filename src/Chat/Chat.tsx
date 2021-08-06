import React, { useEffect, useRef, useContext, createContext } from 'react';
import { SignIn } from '../SignIn';
import { SignOut } from '../SignOut';
import { ChatRoom } from '../ChatRoom';
import { ChooseRoom } from '../ChooseRoom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';


import { firebase_config } from '../firebaseconfig';
import { useIsEqualRef } from 'react-firebase-hooks/firestore/dist/util';

firebase.initializeApp(firebase_config);
const auth = firebase.auth();
const firestore = firebase.firestore();


export const useSession = () => {
  const [user] = useAuthState(auth)
  return user
}

export const Chat = () => {

  const user = useSession();

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChooseRoom /> : <SignIn />}
      </section>

    </div>
  );
}
