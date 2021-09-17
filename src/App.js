import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import './App.css';
import {Provider} from "react-redux";
import store from "./store/store";
function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <Navbar></Navbar>
              <Todos></Todos>
          </div>
      </Provider>
  );
}

export default App;
