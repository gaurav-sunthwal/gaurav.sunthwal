import "../Style/NotFound.css";
import pageNotFoundImg from "../img/404-pageNotFound.gif" 
function NotFound() {
  return (
    <>
      <div className="notFoundText">
        <div className="notFound">
          <img src={pageNotFoundImg} alt="" />
          <h1>404 | This page could not be found.</h1>
        </div>
      </div>
    </>
  );
}

export default NotFound;
