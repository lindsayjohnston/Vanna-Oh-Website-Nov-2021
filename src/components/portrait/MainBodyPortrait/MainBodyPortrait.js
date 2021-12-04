import './MainBodyPortrait.css';
import MenuPortrait from '../MenuPortrait/MenuPortrait';

const mainBodyPortrait = (props) => {
//assign classes for 4:3 ratio for tablet 
//16:9 ratio for mobile


    return (
      <div className="mainBodyPortrait">
        <div className="titleContainerPortrait">
          <h1 className="titlePortrait"> vanna oh! </h1>
        </div>
        <MenuPortrait pages={props.pages} />
      </div>
    )
}

export default mainBodyPortrait;