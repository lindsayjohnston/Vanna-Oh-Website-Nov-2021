import './App.css';
import MainBodyDesktop from "./components/desktop/MainBodyDesktop/MainBodyDesktop.js";
import MainBodyMobile from './components/mobile/MainBodyMobile/MainBodyMobile';


let screenOrientation= window.screen.orientation;
console.log(screenOrientation); 

function App() {
  

  return (
    <div className="App">
      <MainBodyDesktop className="bodyDesktop" />
      <MainBodyMobile className="bodyMobile" screen= "mobile" />


    </div>
  );
}

export default App;
