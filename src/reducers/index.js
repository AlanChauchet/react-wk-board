import { resettableReducer } from 'reduxsauce';
import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import snackbar from './snackbar';

const resettable = resettableReducer('RESET');

export default combineReducers({
  snackbar: resettable(snackbar),
  form: resettable(formReducer),
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
