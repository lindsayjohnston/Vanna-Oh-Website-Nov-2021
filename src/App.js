import React from 'react';
import './App.css';
import MainBodyDesktop from "./components/desktop/MainBodyDesktop/MainBodyDesktop.js";
import MainBodyMobile from './components/mobile/MainBodyMobile/MainBodyMobile';

const screen= window.screen;

class App extends React.Component{

  state = {
    screenOrientation: window.screen.orientation.type,
  }

constructor(props) {
  super(props);
  this.setScreenOrientation = this.setScreenOrientation.bind(this);
}

setScreenOrientation = () =>{

    this.setState({
      screenOrientation: window.screen.orientation.type
    })
 
    console.log("in setScreenOrientation: " + this.state.screenOrientation);
}

componentDidMount(){
  screen.orientation.addEventListener("change", this.setScreenOrientation);
}


render() {

  let appBody= null; 

  if (this.state.screenOrientation === "landscape-primary" || this.state.screenOrientation === "landscape-secondary"){
    appBody = <MainBodyDesktop/>
  } else {
    appBody= <MainBodyMobile/>
  }
  
  return(
    <div className= "App">
      {appBody}

    </div>

  )
} 
}

export default App;
