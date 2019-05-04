import { combineReducers } from 'redux';

//? Reducer
import dogReducer from "../Redux/Reducer/dog.reducer";

const ROOT_REDUCER = combineReducers({dogReducer});
export default ROOT_REDUCER;