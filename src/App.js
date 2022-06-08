import "antd/dist/antd.css";
import "./App.css";
import ExampleModal from "./Components/ExampleModal";
import ModalContextProvider from "./Modal/Context/ModalContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ModalContextProvider>
          <ExampleModal />
        </ModalContextProvider>
      </header>
    </div>
  );
}

export default App;
