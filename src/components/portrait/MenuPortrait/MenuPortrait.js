import "./MenuPortrait.css";

const menuPortrait = (props) => {
    const pagesInfo= props.pages;
    const pagesButtons = pagesInfo.map((pageInfo) => 
        <button key={pageInfo.id}>
            {pageInfo.title}
        </button>
    );
    
    return (
        <div className="menuPortrait">
            <div className="menuContainer">
                {pagesButtons}
                {/* <button>
                    Example
                </button>
                <button>
                    Example
                </button> */}

            </div>

        </div>
    )
}

export default menuPortrait;