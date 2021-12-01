import React from 'react';
import './App.css';
import MainBodyLandscape from "./components/landscape/MainBodyLandscape/MainBodyLandscape.js";
import MainBodyPortrait from './components/portrait/MainBodyPortrait/MainBodyPortrait';

const screen = window.screen;

class App extends React.Component {

  state = {
    screenHeight: window.screen.height,
    screenWidth: window.screen.width,
    screenOrientation: window.screen.orientation.type,
    pages:  [ 
      {id: 1, title: "about", content: "ABOUT -Lorem Ipsum – Generator, Origins and Meaninghttps://loremipsum.io Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging ..." },
      {id: 2, title: "music", content: "MUSIC-Lorem Ipsum – Generator, Origins and Meaninghttps://loremipsum.io Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging ..." },
      {id: 3, title: "merch", content: "LINK LINK LINK" },
      {id: 4, title: "connect", content: "LINK LINK LINK" },
    ] 
  }

  constructor(props) {
    super(props);
    this.setScreenOrientation = this.setScreenOrientation.bind(this);
  }

  setScreenOrientation = () => {
    this.setState({
      screenOrientation: window.screen.orientation.type
    })
  }

  componentDidMount() {
    screen.orientation.addEventListener("change", this.setScreenOrientation);
  }

  render() {
    let appBody = null;
    let appClasses= "";
 
    if (this.state.screenOrientation === "landscape-primary" || this.state.screenOrientation === "landscape-secondary") {
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
