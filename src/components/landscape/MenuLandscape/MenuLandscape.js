import './MenuLandscape.css';

const menuLandscape = (props) =>{
    const pagesInfo= props.pages;
    const pagesButtons = pagesInfo.map((pageInfo) => 
        <button className="buttonLandscape" key={pageInfo.id}>
            {pageInfo.title}
        </button>
    );

    return (
        <div className="menuLandscape">
            {pagesButtons}
        </div>
    )
}
export default menuLandscape;