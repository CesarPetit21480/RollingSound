import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <div style={{ textAlign: "center",}} className="error-container text-white">
      <h5 style={{fontSize:"35px"}}>ERROR</h5> 
  
      <h1 className="error-code">
        4
        <span className="zero-image">
          <img src="./public/Logo.png" alt="Cero" />
        </span>
        4
      </h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}


export default NotFoundPage;

/* 
const NotFoundPage = () => {
  return (
    <div className="mt-5 pt-5 pb-5 d-flex justify-content-center">
      NotFoundPage
    </div>
  )
}

export default NotFoundPage */
