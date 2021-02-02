import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import { reducer as formReducer } from 'redux-form';
import store from './redux/store';
import SalaryForm  from './components/SalaryForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// const rootReducer = combineReducers({
//   form: formReducer
// });

// const store = createStore(rootReducer, applyMiddleware(thunk));


const App:React.FC<any> = (props) => (
  <Provider store={store}>
      <div className="container">
        <SalaryForm />
      </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();