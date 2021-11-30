import './MainBodyPortrait.css';
import MenuPortrait from '../MenuPortrait/MenuPortrait';

const mainBodyPortrait = (props) => {

    return (
        <div className="mainBodyPortrait">
          <MenuPortrait pages={props.pages}/>
        </div>
    )
}

export default mainBodyPortrait;