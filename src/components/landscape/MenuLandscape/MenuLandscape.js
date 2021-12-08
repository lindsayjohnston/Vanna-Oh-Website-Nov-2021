import './MenuLandscape.css';

const menuLandscape = (props) =>{
    const pagesInfo= props.pages;
    let pageShown= props.pageShown;
    let pagesButtons= null;
    if(props.pageShown === "home"){
        //generate all the buttons for the menu
       pagesButtons = pagesInfo.map((pageInfo) => 
        <button className="buttonLandscape" 
            id={pageInfo.id} 
            key={pageInfo.id} 
            onClick={() => props.menuClick(pageInfo.id)}>
            {pageInfo.title}
        </button>
    );
    } else {
        //generate one disabled 'button' for the "pageShown"
        let pageInfo= props.pages[(pageShown - 1)];
        pagesButtons = <button 
        disabled
        className="buttonLandscape noClick" 
        id= {pageShown} 
        key= {pageShown} 
        onClick={() => props.menuClick({pageShown})}>
        {pageInfo.title}
    </button>
    }
    

    return (
        <div className="menuLandscape">
            {pagesButtons}
        </div>
    )
}
export default menuLandscape;