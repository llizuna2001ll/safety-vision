import "../style/Header.css";

function Header() {
    return(
          <div className="wrapper">
          <div className="sm-container">
              <li><i className="lni lni-facebook-oval"></i></li>
              <li><i className="lni lni-instagram-original"></i></li>
              <li><i className="lni lni-twitter-original"></i></li>
          </div>
          <div className="info_container">
              <li><i className="lni lni-phone"></i>+212 61802337</li>
              <li><i><strong>@</strong></i>itsys.k@gmail.com</li>
          </div>
          </div>
    );
}

export default Header;