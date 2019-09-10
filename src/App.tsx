import React from 'react';
import './App.scss';
import Routes from "./routes/routes";
import Login from '../src/components/login/login';
import ConfigureStore from './redux/configureStore/configureStore';

const store = ConfigureStore();

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
       <Routes />
      </header>
    
    </div>
  );
}

export default (App);
