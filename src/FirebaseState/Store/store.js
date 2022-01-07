import { getFirebase, reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import firebase from "../firebase/Config"
import Reducer from "../Reducer/Reducer";


let reducers = combineReducers({
  story: Reducer,
  firebase: firebaseReducer,
});

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
  )
);

export default store;
