import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//! Redux archivo configuracion
import ROOT_REDUCER from './root_reducer.reducer';
export default function configureStore(initialState){
  return createStore(ROOT_REDUCER,initialState,composeWithDevTools(applyMiddleware(thunk)));
}