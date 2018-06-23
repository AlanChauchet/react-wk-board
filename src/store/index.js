import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { reactReduxFirebase } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore';
import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

import rootReducer from '../reducers';

const firebaseConfig = {
  apiKey: 'AIzaSyAi3VLVLuwe0UmtryFS4uhQPbC_LNGDDI4',
  authDomain: 'test-wttj.firebaseapp.com',
  databaseURL: 'https://test-wttj.firebaseio.com',
  projectId: 'test-wttj',
  storageBucket: '',
  messagingSenderId: '57288674274',
}; // from Firebase Console

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);
// Initialize Cloud Firestore through Firebase

const firestore = firebase.firestore();

const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);
// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

// Add BOTH store enhancers when making store creator
const createStoreWithFirebase = composeWithDevTools(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase),
  applyMiddleware(thunk),
)(createStore);

// Create store with reducers and initial state
const initialState = {};
const store = createStoreWithFirebase(rootReducer, initialState);

export default store;
