import React from 'react'
import PropTypes from 'prop-types';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const SignOut = (props:any) => {

    const auth = firebase.auth();
    const firestore = firebase.firestore();
    
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
      )
}

SignOut.propTypes = {

}

