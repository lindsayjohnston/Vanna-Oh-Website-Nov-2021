import './App.css';
import MainBodyDesktop from "./modules/desktop/MainBodyDesktop/MainBodyDesktop.js";
import MainBodyMobile from './modules/mobile/MainBodyMobile/MainBodyMobile';


function App() {
  return (
    <div className="App">
      <MainBodyDesktop />
      <MainBodyMobile />


    </div>
  );
}

export default App;
