import React from 'react';
import logo from './logo.svg';
// import SubSideBar from '../src/Atoms/subSideBar'
import './App.scss';
import Login from '../src/components/login/login';
import ConfigureStore from './redux/configureStore/configureStore';

const store = ConfigureStore();

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
       <Login />
      </header>
    
    </div>
  );
}

export default App;
