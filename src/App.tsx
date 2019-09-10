import React from 'react';
import './App.scss';
import SubSideBar from './SubsideBar/subSideBar'

import Login from '../src/components/login/login';
import ConfigureStore from './redux/configureStore/configureStore';

const store = ConfigureStore();

const App: React.FC = () => {
  return (
    <div className="App">
     {/* <SubSideBar/> */}
    </div>
  );
}

export default App;
