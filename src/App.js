import React from 'react';
import './App.css';
import MainBodyLandscape from "./components/landscape/MainBodyLandscape/MainBodyLandscape.js";
import MainBodyPortrait from './components/portrait/MainBodyPortrait/MainBodyPortrait';
import MainBodySquare from './components/square/MainBodySquare/MainBodySquare';

let screenOrientation= null;

 //Add in ratios height/width
    //landscape= < .87
    //square = between
    //Portrait= > 1.6

if((window.visualViewport.height / window.visualViewport.width) < .87){
  screenOrientation= "landscape";
} else if ((window.visualViewport.height / window.visualViewport.width) > 1.6) {
  screenOrientation= "portrait";
} else {
  screenOrientation= "square";
}

class App extends React.Component {
  
  state = {
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

    if((window.visualViewport.height / window.visualViewport.width) < .87){
      newOrientation= "landscape";
    } else if ((window.visualViewport.height / window.visualViewport.width) > 1.2) {
      newOrientation= "portrait";
    } else {
      newOrientation= "square";
    }

    if(newOrientation !== this.state.screenOrientation){
      this.setScreenOrientation(newOrientation);
    }
  }

  setScreenOrientation= (newOrientation)=>{
    this.setState({
      screenOrientation: newOrientation
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkScreenOrientation)
  }

  render() {
    let appBody = null;
    let appClasses= "";
    const screenRatio= window.visualViewport.height/window.visualViewport.width;
 
    if (this.state.screenOrientation === "landscape") {
      appBody = <MainBodyLandscape pages={this.state.pages} />;
      appClasses= "appLandscape";
    } else if (this.state.screenOrientation === "portrait"){
      appBody = <MainBodyPortrait 
                    pages={this.state.pages}
                    screenRatio={screenRatio}
                />;
      appClasses= "appPortrait";
    } else {
      appBody= <MainBodySquare pages = {this.state.pages}/>;
      appClasses="appSquare";
    }


    return (
      <div className={appClasses}>
        {appBody}
      </div>
    )
  }
}

export default App;
