import "./MenuPortrait.css";

const menuPortrait = (props) => {
    const pagesInfo= props.pages;
    let pageShown= props.pageShown;
    let pagesButtons= null;
    let menuContainerClasses= "hidden";
    let pageTitleContainerClasses="hidden";
    if(props.pageShown === "home"){
        menuContainerClasses= "menuContainerPortrait fadeIn";
        // pageTitleContainerClasses ="hidden fadeOut"
        //generate all the buttons for the menu
       pagesButtons = pagesInfo.map((pageInfo) => 
        <button className="buttonPortrait" 
            id={pageInfo.id} 
            key={pageInfo.id} 
            onClick={() => props.menuClick(pageInfo.id)}>
            {pageInfo.title}
        </button>
    );
    } else {
        //generate one disabled 'button' for the "pageShown"
        menuContainerClasses= "hidden";
        // pageTitleContainerClasses ="menuContainerPortrait fadeIn"
        let pageInfo= props.pages[(pageShown - 1)];
        pagesButtons = <button 
        disabled
        className="buttonPortrait" 
        id= {pageShown} 
        key= {pageShown} 
        onClick={() => props.menuClick({pageShown})}>
        {pageInfo.title}
    </button>
    }
    
    
    return (
        <div className="menuPortrait">
            <div className={menuContainerClasses}>
                {pagesButtons}
            </div>
            <div className={pageTitleContainerClasses}>
                <button disabled className="buttonPortrait">{pagesButtons}</button>
            </div>
        </div>
    )
}

export default menuPortrait;