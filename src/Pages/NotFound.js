import { Link } from "react-router-dom";

function NotFound(){

    return(
        <div className="container text-center position-absolute top-50 start-50 translate-middle">
            <h1 className="text-danger text-center">Page Not Found 404</h1> 
            <h4>Sorry This Page Not Found ! </h4>
            <h4>You can go back to <Link className="nav-link active text-primary" aria-current="page" to="/">Home</Link></h4>
        </div>
    )

}

export default NotFound