import '../style/LearnMore.css';
import {Link} from "react-router-dom";

function LearnMore(props) {
    return (
        <Link to={props.destination}>
        <button className="learn-more">
  <span className="circle" aria-hidden="true">
  <span className="icon arrow"></span>
  </span>
            <span className="button-text">Learn More</span>
        </button>
        </Link>
    );
}

export default LearnMore;