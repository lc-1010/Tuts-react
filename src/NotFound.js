import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry NotFound</h2>
            <p>not found your page</p>
            <Link to="/">go back home page</Link >
        </div>
    );
}

export default NotFound;