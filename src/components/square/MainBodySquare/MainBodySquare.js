import './MainBodySquare.css';
import MenuSquare from '../MenuSquare/MenuSquare';
import albumCover from '../../../media/sad-mode-album-cover-1024x1024.jpg'

const mainBodySquare = (props) => {

    return (
        <div className='mainBodySquare'>
            <div className="titleContainerSquare">
                {/* <h1 className="titleSquare"> vanna oh! </h1> */}
            </div>
            <img src={albumCover} className="albumCoverSquare" alt="sad-mode-album-cover"></img>
            <MenuSquare pages={props.pages} />
        </div>
    )
}

export default mainBodySquare;