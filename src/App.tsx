import React from 'react';
import './App.scss';
<<<<<<< HEAD
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
=======
import Layout from './components/Layout/layout';

class App extends React.Component<{}, {}> {

  render() {
    return (
      <Layout />
    );
  }
>>>>>>> 8a3b7918aa5b7bab155b961ed2430345ca1a5a24
}

export default App;
