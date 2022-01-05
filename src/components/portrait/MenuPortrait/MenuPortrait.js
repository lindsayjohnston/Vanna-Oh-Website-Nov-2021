import "./MenuPortrait.css";


const menuPortrait = (props) => {
    const pagesInfo= props.pages;
    const pageShown= props.pageShown;
    let pagesButtons= null;
    let menu= null;

    if(props.pageShown === "home"){
       pagesButtons = pagesInfo.map((pageInfo) => 
        <button className="buttonPortrait" 
            id={pageInfo.id} 
            key={pageInfo.id} 
            onClick={() => props.menuClick(pageInfo.id)}>
            {pageInfo.title}
        </button>);

        menu= <div key= {Math.random()} className= "menuContainerPortrait fadeIn">{pagesButtons}</div>;
   
    } else {
        //generate one disabled 'button' for the "pageShown"
        let pageInfo= props.pages[(pageShown - 1)];
        pagesButtons = <button
            disabled
            className="buttonPortrait"
            id={pageShown}
            key={pageShown}
            onClick={() => props.menuClick({ pageShown })}>
            {pageInfo.title}
        </button>
        menu= <div key= {Math.random()} className= "menuContainerPortrait fadeIn">{pagesButtons}</div>
    }
    
    
    return (
        <div className="menuPortrait">
            {menu}
        </div>
    )
}

export default menuPortrait;