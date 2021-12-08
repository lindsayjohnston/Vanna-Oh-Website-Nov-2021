import './MainBodyLandscape.css';
import MenuLandscape from '../MenuLandscape/MenuLandscape';
import albumCover from '../../../media/sad-mode-album-cover-1024x1024.jpg'

const mainBodyLandscape = (props) => {
   
    let backButtonClasses= "titleLandscape";
    if (props.pageShown === "home"){
        backButtonClasses += " hidden";
    }

    
    return (
        <div className="mainBodyLandscape">
            <div className="titleContainerLandscape">
                <h1 className="titleLandscape">vanna oh!</h1>
                <h1 className={backButtonClasses}
                    onClick={props.backButtonHandler}>
                    back</h1>
            </div>
               
            <div className="landscapeContentContainer">
                <MenuLandscape 

                    menuClick = {props.menuClick}
                    pageShown={props.pageShown}
                    pages={props.pages} />
                <img className="albumCover" alt="sad-mode-album-cover" src={albumCover}></img>

            </div>
            

        </div>

    )

}

export default mainBodyLandscape;

