import React from 'react';
import './App.css';
import MainBodyLandscape from "./components/landscape/MainBodyLandscape/MainBodyLandscape.js";
import MainBodyPortrait from './components/portrait/MainBodyPortrait/MainBodyPortrait';
import MainBodySquare from './components/square/MainBodySquare/MainBodySquare';
import ringerShirtThumbnail from '../src/media/merchThumbnails/ringer-shirt-thumbnail.jpg';
import blackShirtThumbnail from '../src/media/merchThumbnails/black-shirt-thumbnail.jpg';
import undiesThumbnail from '../src/media/merchThumbnails/undies-thumbnail.jpg';
import beanieThumbnail from '../src/media/merchThumbnails/crimson-beanie.jpg';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import{ faEnvelope } from '@fortawesome/free-regular-svg-icons';

library.add(faFacebookSquare, faInstagram, faEnvelope);

let screenOrientation= null;
// let contentOrientationClasses= null;

 //Add in ratios height/width
    //landscape= < .87
    //square = between
    //Portrait= > 1.6

if((window.innerHeight/ window.innerWidth) < .87){
  screenOrientation= "landscape";
  // contentOrientationClasses="contentLandscape";
} else if ((window.innerHeight/ window.innerWidth) > 1.6) {
  screenOrientation= "portrait";
  // contentOrientationClasses="contentPortrait";
} else {
  screenOrientation= "square";
  // contentOrientationClasses="contentSquare";
}

class App extends React.Component {
  
  state = {
    pageShown:"home",
    screenOrientation: screenOrientation,
    pages:  [ 
      {id: 1, 
      title: "about", 
      content: <div className="contentDiv">
        <div className="aboutDiv">
          <p>
            Vanna Oh! stepped onto the Pacific North West music scene in 2019. In less than a year she released a rock-and-roll EP, debuted a music video featured on Seattle’s Video BeBop, and toured the West Coast. Vanna Oh! became known for her powerful guitar hooks, dynamic vocals, theatrical stage presence, and message of women’s empowerment.
          </p>
          <break></break>
          <p>
            The COVID pandemic cancelled the rock-and-roll queen’s second West Coast tour and brought the full-time performer to a halt. During this time, she wrote heart-wrenching folk songs, produced and engineered a 4-song EP, and filmed a music video in Texas. She also wrestled with the ethical dilemma of spending all of her time and money on such self-aggrandizing ventures—wondering if it was the best way to help a world reeling from income inequality, racism, mental illness, addiction, and misogyny.
          </p>
        </div>
      </div>
       },
      { id: 2, 
        title: "music", 
        content: <div className="contentDiv">
             <iframe  src="https://www.youtube.com/embed/Hphz0jDpxGU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      },
      { id: 3, 
        title: "merch", 
        content: <div className="contentDiv">
          <div className="contentIcons4">
            <a target="_blank" rel="noreferrer" href="https://vannaoh.bandcamp.com/merch/limited-edition-chaperone-ringer-tee">
              <img src={ringerShirtThumbnail} alt="ringer-shirt-thumbnail"></img>
            </a>
            <a target="_blank" rel="noreferrer" href="https://vannaoh.bandcamp.com/merch/black-vanna-oh-t-shirt">
              <img src={blackShirtThumbnail} alt="black-shirt-thumbnail"></img>
            </a>
            <a target="_blank" rel="noreferrer" href="https://vannaoh.bandcamp.com/merch/crimson-vota-beanie">
              <img src={beanieThumbnail} alt="beanie-thumbnail"></img>
            </a>
            <a target="_blank" rel="noreferrer" href="https://vannaoh.bandcamp.com/merch/vanna-oh-undies-small">
              <img src={undiesThumbnail} alt="undies-thumbnail"></img>
            </a>
          </div>
        </div>
      },
      { id: 4, 
        title: "connect", 
        content: <div className="contentDiv">
          <div className="socialDiv">
            <a href="https://www.facebook.com/vannaohmusic/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={['fab', 'facebook-square']} size="3x" />
            </a>
            <a href="https://www.instagram.com/vannaohno/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={['fab', 'instagram']} size="3x" />
            </a>
            <a href="mailto:vannaohcontact@gmail.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={['far', 'envelope']} size="3x" />
            </a>
          </div>
        </div>},
    ] 
  }

  constructor(props) {
    super(props);
    this.checkScreenOrientation = this.checkScreenOrientation.bind(this);
    this.setScreenOrientation = this.setScreenOrientation.bind(this);
    this.pageShownHandler.bind(this);
    this.checkScreenOrientationChange= this.checkScreenOrientationChange.bind(this);
    this.setScreenOrientationChange = this.setScreenOrientationChange.bind(this);

  }

  checkScreenOrientation = () => {
    let newOrientation= null;

    if((window.innerHeight/ window.innerWidth) < .87){
      newOrientation= "landscape";
    } else if ((window.innerHeight / window.innerWidth) > 1.2) {
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

  //Orientation change functions for debugging on iOS safari

  checkScreenOrientationChange = () => {
    let newOrientation= null;
    alert("in orientation change function");

    if((window.innerHeight/ window.innerWidth) < .87){
      newOrientation= "landscape";
    } else if ((window.innerHeight / window.innerWidth) > 1.2) {
      newOrientation= "portrait";
    } else {
      newOrientation= "square";
    }

    if(newOrientation !== this.state.screenOrientation){
      this.setScreenOrientationChange(newOrientation);
    }
  }

  setScreenOrientationChange= (newOrientation)=>{
    console.log("in set orientation after change function");
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
    window.addEventListener('resize', this.checkScreenOrientation);
    window.addEventListener("orientationchange", this.checkScreenOrientationChange);
  }

  render() {
    
    let appBody = null;
    let appClasses= "";
 
    if (this.state.screenOrientation === "landscape") {
      appBody = <MainBodyLandscape 
                  backButtonHandler= {this.backButtonHandler}
                  menuClick = {this.pageShownHandler}
                  pageShown= {this.state.pageShown} 
                  pages={this.state.pages} />;
      appClasses= "appLandscape";
    } else if (this.state.screenOrientation === "portrait"){
      appBody = <MainBodyPortrait 
                  backButtonHandler= {this.backButtonHandler}
                  menuClick = {this.pageShownHandler}
                  pageShown= {this.state.pageShown} 
                  pages={this.state.pages}
                />;
      appClasses= "appPortrait";
    } else {
      appBody= <MainBodySquare 
                  backButtonHandler= {this.backButtonHandler}
                  menuClick = {this.pageShownHandler}
                  pageShown= {this.state.pageShown} 
                  pages={this.state.pages} 
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
