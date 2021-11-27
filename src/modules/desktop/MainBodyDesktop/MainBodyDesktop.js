import './MainBodyDesktop.css';



const mainBodyDesktop = (props) => {
    let bodyClasses= "mainDesktopBody";
    //function go here
    
    if (props.display !== true){
        bodyClasses += " hidden";
    }
    
    return (
        <div className={bodyClasses}>
            <p> this is the desktop body </p>
        </div>

    )

}

export default mainBodyDesktop;

