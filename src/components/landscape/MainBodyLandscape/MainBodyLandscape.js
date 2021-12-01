import './MainBodyLandscape.css';
import albumCover from '../../../media/sad-mode-album-cover-1024x1024.jpg'

const mainBodyLandscape = (props) => {
    
    return (
        <div className="mainBodyLandscape">
            <div className="titleContainerLandscape"><h1 className="titleLandscape">vanna oh!</h1></div>
            <div className="menuContainerLandscape">this will be the menu</div>
            <img className="albumCover" alt="sad-mode-album-cover" src={albumCover}></img>

        </div>

    )

}

export default mainBodyLandscape;

