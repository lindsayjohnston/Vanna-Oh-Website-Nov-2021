import './MainBodyPortrait.css';
import MenuPortrait from '../MenuPortrait/MenuPortrait';

const mainBodyPortrait = (props) => {

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