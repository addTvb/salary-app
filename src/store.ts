import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';

export interface IAppState {
  form: any;
}

// const rootReducer = (history: any) => combineReducers<IAppState>({
//   form: formReducer
// });
const rootReducer = combineReducers({
  form: formReducer
});

export default createStore(rootReducer);