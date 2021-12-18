import './MainBodyPortrait.css';
import MenuPortrait from '../MenuPortrait/MenuPortrait';

const mainBodyPortrait = (props) => {
  let imgContainerClasses = "imgContainerPortrait";
  //assign classes for 4:3 ratio for tablet 
  //16:9 ratio for mobile
  //ratio> 2.3 move face to left (galaxy fold)
  if (props.screenRatio > 1.7) {
    imgContainerClasses += " mobile";
  }

  let cardContainerClasses= "cardContainerPortrait flipCardPortrait"
  let backButtonClasses = "titlePortrait backButtonPortrait";
  let titleClasses = "titlePortrait";
  let contentOrLinks = null;

  if (props.pageShown === "home") {
    backButtonClasses += " hidden";
    cardContainerClasses = "cardContainerPortrait";
  } else {
    titleClasses += " hidden"
    const pageIndex = props.pageShown - 1;
    const pageInfo = props.pages[pageIndex];
    if (pageInfo.content !== null) {
      contentOrLinks = pageInfo.content;
    } else {
      //stop the album from flipping
      alert("dont flip the album")
    }
  }

    return (
      <div className="mainBodyPortrait">
        <div className="contentContainerPortrait">
          <div className="titleContainerPortrait">
            <h1 className={titleClasses}> vanna oh! </h1>
            <h1 className={backButtonClasses}
              onClick={props.backButtonHandler}>
              back</h1>
          </div>

          <div className={cardContainerClasses}>
            <div className="frontPortrait">
              <div className={imgContainerClasses}>
              </div>
            </div>

            <div className="backPortrait">
                {contentOrLinks}
            </div>

          </div>

        <MenuPortrait menuClick = {props.menuClick}
                    pageShown={props.pageShown}
                    pages={props.pages}  />
      </div>

      </div>
        
    )
}

export default mainBodyPortrait;