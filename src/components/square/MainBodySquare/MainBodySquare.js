import './MainBodySquare.css';
import MenuSquare from '../MenuSquare/MenuSquare';
import albumCover from '../../../media/sad-mode-album-cover-1024x1024.jpg'

const mainBodySquare = (props) => {
    let imgContainerClasses= "imgContainer flipCard";
    let backButtonClasses= "titleSquare backButton";
    let contentOrLinks= null;

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
        <div className='mainBodySquare'>
            <div className="titleContainerSquare">
                <h1 className="titleSquare"> vanna oh! </h1>
                <h1 className={backButtonClasses}
                    onClick={props.backButtonHandler}>
                    back</h1>
            </div>
            
            <div className="squareContentContainer">
                <div className={imgContainerClasses}>
                    <div className="front">
                        <img src={albumCover} className="albumCoverSquare" alt="sad-mode-album-cover"></img>
                    </div>
                    <div className="back">
                        {contentOrLinks}
                    </div>
                </div>

            </div>
          
            <MenuSquare menuClick = {props.menuClick}
                    pageShown={props.pageShown}
                    pages={props.pages} />
        </div>
    )
}

export default mainBodySquare;