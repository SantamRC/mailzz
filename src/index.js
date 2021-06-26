import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context from './Helper/Context'
import useGlobalState from './Helper/useGlobalState'

const Index=()=>{
  const store= useGlobalState();
  return(
    <Context.Provider value={store}>
      <App />
  </Context.Provider>
  )
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

