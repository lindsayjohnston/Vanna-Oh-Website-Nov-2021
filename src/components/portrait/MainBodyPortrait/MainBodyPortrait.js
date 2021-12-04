import './MainBodyPortrait.css';
import MenuPortrait from '../MenuPortrait/MenuPortrait';

const mainBodyPortrait = (props) => {

let classes= "mainBodyPortrait";
//assign classes for 4:3 ratio for tablet 
//16:9 ratio for mobile
//ratio> 2.3 move face to left (galaxy fold)
console.log("ratio: " + props.screenRatio);
if(props.screenRatio > 1.7 ){
  console.log("mobile ratio!");
  classes+= " mobile";
}

    return (
      <div className={classes}>
        <div className="titleContainerPortrait">
          <h1 className="titlePortrait"> vanna oh! </h1>
        </div>
        <MenuPortrait pages={props.pages} />
      </div>
    )
}

export default mainBodyPortrait;