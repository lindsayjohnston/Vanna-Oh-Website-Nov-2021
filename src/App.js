import React from 'react';
import './App.css';
import MainBodyLandscape from "./components/landscape/MainBodyLandscape/MainBodyLandscape.js";
import MainBodyPortrait from './components/portrait/MainBodyPortrait/MainBodyPortrait';

const screen = window.screen;

class App extends React.Component {

  state = {
    screenOrientation: window.screen.orientation.type,
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

    if (this.state.screenOrientation === "landscape-primary" || this.state.screenOrientation === "landscape-secondary") {
      appBody = <MainBodyLandscape />
    } else {
      appBody = <MainBodyPortrait />
    }

    return (
      <div className="App">
        {appBody}
      </div>

    )
  }
}

export default App;
