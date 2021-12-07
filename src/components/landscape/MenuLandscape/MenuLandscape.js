import './MenuLandscape.css';

const menuLandscape = (props) =>{
    const pagesInfo= props.pages;
    const pagesButtons = pagesInfo.map((pageInfo) => 
        <button className="buttonLandscape" 
            id={pageInfo.id} 
            key={pageInfo.id} 
            onClick={() => flipCardHandler(pageInfo.id, pageInfo)}>
            {pageInfo.title}
        </button>
    );

    
    function flipCardHandler(id, pageInfoArray){
        alert( id + " clicked");
       
    }
    

    return (
        <div className="menuLandscape">
            {pagesButtons}
        </div>
    )
}
export default menuLandscape;