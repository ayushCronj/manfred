import React from "react";
import "./App.scss";
import Routes from "./routes/routes";
import ConfigureStore from "./redux/configureStore/configureStore";
import { Provider } from "react-redux";
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

const store = ConfigureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
      <DndProvider backend={HTML5Backend}>
        <header className="App-header">
          <Routes />
        </header>
        </DndProvider>
      </div>
    </Provider>
  );
};

export default App;
