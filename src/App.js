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
    pageShown:"home",
    screenOrientation: screenOrientation,
    pages:  [ 
      {id: 1, 
      title: "about", 
      content: <div>
        <p>
          Vanna Oh! stepped onto the Pacific North West music scene in 2019. In less than a year she released a rock-and-roll EP, debuted a music video featured on Seattle’s Video BeBop, and toured the West Coast. Vanna Oh! became known for her powerful guitar hooks, dynamic vocals, theatrical stage presence, and message of women’s empowerment.
        </p>
        <break></break>
        <p>
          The COVID pandemic cancelled the rock-and-roll queen’s second West Coast tour and brought the full-time performer to a halt. During this time, she wrote heart-wrenching folk songs, produced and engineered a 4-song EP, and filmed a music video in Texas. She also wrestled with the ethical dilemma of spending all of her time and money on such self-aggrandizing ventures—wondering if it was the best way to help a world reeling from income inequality, racism, mental illness, addiction, and misogyny.
        </p>
      </div>
       },
      { id: 2, 
        title: "music", 
        content: "this will be music video"
      },
      { id: 3, 
        title: "merch", 
        content: "this will be thumbnails of merch"
      },
      { id: 4, 
        title: "connect", 
        content: "this will be icons"},
    ] 
  }

  constructor(props) {
    super(props);
    this.checkScreenOrientation = this.checkScreenOrientation.bind(this);
    this.setScreenOrientation = this.setScreenOrientation.bind(this);
    this.pageShownHandler.bind(this);
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

  pageShownHandler = (pageId) =>{
    // alert("fired pageShownHandler in App.js. Id: " + pageId)
    this.setState ({
      pageShown : pageId
    })
  }

  backButtonHandler = () =>{
    this.setState({
      pageShown: "home"
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
      appBody = <MainBodyLandscape 
                  backButtonHandler= {this.backButtonHandler}
                  menuClick = {this.pageShownHandler}
                  pageShown= {this.state.pageShown} pages={this.state.pages} />;
      appClasses= "appLandscape";
    } else if (this.state.screenOrientation === "portrait"){
      appBody = <MainBodyPortrait 
                    pages={this.state.pages}
                    // menuClick = {this.pageShownHandler}
                    pageShown= {this.state.pageShown} 
                    screenRatio={screenRatio}
                />;
      appClasses= "appPortrait";
    } else {
      appBody= <MainBodySquare 
                    pages = {this.state.pages}
                    // menuClick = {this.pageShownHandler}
                    pageShown= {this.state.pageShown} 
                    />;
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
