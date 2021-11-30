import "./MenuPortrait.css";

const menuPortrait = (props) => {
    const pagesInfo= props.pages;
    const pagesButtons = pagesInfo.map((pageInfo) => 
        <button className="buttonPortrait" key={pageInfo.id}>
            {pageInfo.title}
        </button>
    );
    
    return (
        <div className="menuPortrait">
            <div className="menuContainer">
                {pagesButtons}
            </div>

        </div>
    )
}

export default menuPortrait;