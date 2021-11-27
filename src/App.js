import './App.css';
import MainBodyDesktop from "./modules/desktop/MainBodyDesktop/MainBodyDesktop.js";
import MainBodyMobile from './modules/mobile/MainBodyMobile/MainBodyMobile';


function App() {
  return (
    <div className="App">
      <MainBodyDesktop display= "false" />
      <MainBodyMobile screen= "mobile" />


    </div>
  );
}

export default App;
