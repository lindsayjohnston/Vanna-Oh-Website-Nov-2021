import React from 'react';
import './App.css';
import MainBodyLandscape from "./components/landscape/MainBodyLandscape/MainBodyLandscape.js";
import MainBodyPortrait from './components/portrait/MainBodyPortrait/MainBodyPortrait';

let screenOrientation= null;

if(window.visualViewport.height > window.visualViewport.width){
  screenOrientation= "portrait";
} else {
  screenOrientation= "landscape";
}

class App extends React.Component {
  
  state = {
    screenHeight: window.visualViewport.height,
    screenWidth: window.visualViewport.width,
    screenOrientation: screenOrientation,
    pages:  [ 
      {id: 1, title: "about", content: "ABOUT -Lorem Ipsum – Generator, Origins and Meaninghttps://loremipsum.io Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging ..." },
      {id: 2, title: "music", content: "MUSIC-Lorem Ipsum – Generator, Origins and Meaninghttps://loremipsum.io Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging ..." },
      {id: 3, title: "merch", content: "LINK LINK LINK" },
      {id: 4, title: "connect", content: "LINK LINK LINK" },
    ] 
  }

  constructor(props) {
    super(props);
    this.checkScreenOrientation = this.checkScreenOrientation.bind(this);
    this.setScreenOrientation = this.setScreenOrientation.bind(this);
  }

  checkScreenOrientation = () => {
    let newOrientation= null;

    if(window.visualViewport.height > window.visualViewport.width){
      newOrientation= "portrait";
    } else {
      newOrientation= "landscape";
    }

    if(newOrientation !== this.state.screenOrientation){
      this.setScreenOrientation(newOrientation);
    }else {
      console.log ("orientation not changed");
    }
  }

  setScreenOrientation= (newOrientation)=>{
    this.setState({
      screenHeight: window.visualViewport.height,
      screenWidth: window.visualViewport.width,
      screenOrientation: newOrientation
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkScreenOrientation)
  }

  render() {
    let appBody = null;
    let appClasses= "";
 

    if (this.state.screenOrientation === "landscape") {
      appBody = <MainBodyLandscape />;
      appClasses= "appLandscape";
    } else {
      appBody = <MainBodyPortrait pages={this.state.pages}/>;
      appClasses= "appPortrait";
    }

    return (
      <div className={appClasses}>
        {appBody}
      </div>
    )
  }
}

export default App;
