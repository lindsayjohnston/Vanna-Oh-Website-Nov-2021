import React from 'react';
import './App.css';
import MainBodyDesktop from "./components/desktop/MainBodyDesktop/MainBodyDesktop.js";
import MainBodyMobile from './components/mobile/MainBodyMobile/MainBodyMobile';


const screen= window.screen;


class App extends React.Component{

state = {
  screenOrientation: window.screen.orientation
}

constructor(props) {
  super(props);
  this.setScreenOrientation = this.setScreenOrientation.bind(this);
}

setScreenOrientation = () =>{
  this.setState({
    screenOrientation: window.screen.orientation.type
  })

  console.log("set screen orientation. State: " + this.state.screenOrientation);
}

componentDidMount(){
  // this.setScreenOrientation();
  screen.orientation.addEventListener("change", this.setScreenOrientation);
}


render() {

  return(
    <div className= "App">
      <MainBodyDesktop className="bodyDesktop" />
      <MainBodyMobile className="bodyMobile" screen= "mobile" />

    </div>

  )
} 
}

export default App;
