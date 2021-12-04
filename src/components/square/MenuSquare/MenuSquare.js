import './MenuSquare.css';

const menuSquare = (props) =>{
    const pagesInfo= props.pages;
    const pagesButtons = pagesInfo.map((pageInfo) => 
        <button className="buttonSquare" key={pageInfo.id}>
            {pageInfo.title}
        </button>
    );

    return (
        <div className="menuSquare">
            {pagesButtons}
        </div>

    )
  
}

export default menuSquare;
