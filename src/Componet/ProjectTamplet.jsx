// import projectImg from "../img/Project-1.webp";
import "../Style/ProjectTamplet.css";
function projectTamplet(props) {
  console.log(props);
  return (
    <>
      <div className="whloeCard">
        <div className="card">
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <div className="imgSec">
              <img src={props.imgName} alt="" />
            </div>
            <div className="info">
              <div className="cardText">
                <h2>{props.tital}</h2>
                <p>{props.discraption}</p>
              </div>
              <div className="alltags">
                {props.tags?.map(tag => {
                  return <span className="tag">{tag}</span>
                })}
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default projectTamplet;
