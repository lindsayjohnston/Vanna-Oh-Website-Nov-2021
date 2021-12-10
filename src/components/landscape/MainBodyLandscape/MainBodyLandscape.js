import './MainBodyLandscape.css';
import MenuLandscape from '../MenuLandscape/MenuLandscape';
import albumCover from '../../../media/sad-mode-album-cover-1024x1024.jpg';

const mainBodyLandscape = (props) => {
    let imgContainerClasses= "imgContainer flipCard";
    let backButtonClasses= "titleLandscape backButton";
    let contentOrLinks=null;
    if (props.pageShown === "home"){
        backButtonClasses += " hidden";
        imgContainerClasses = "imgContainer";
    } else {
        const pageIndex= props.pageShown - 1;
        const pageInfo= props.pages[pageIndex];
        if(pageInfo.content !== null){
            contentOrLinks= pageInfo.content;
        } else {
            //stop the album from flipping
            alert("dont flip the album")
        }

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
                <div className={imgContainerClasses}>
                    <div className="front">
                        <img className="albumCover" alt="sad-mode-album-cover" src={albumCover}></img>
                    </div>
                    <div className="back">
                        {contentOrLinks}
                    </div>
                    
                </div>
                

            </div>
            

        </div>

    )

}

export default mainBodyLandscape;

