import React from 'react'
import PropTypes from 'prop-types'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebase_config } from '../firebaseconfig';

export const SignIn = (props:any) => {

    const auth = firebase.auth();
    const firestore = firebase.firestore();

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      }
    
      return (
          <button onClick={signInWithGoogle}>Sign in with Google</button>
      )
}

