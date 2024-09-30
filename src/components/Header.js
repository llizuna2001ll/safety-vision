import "../style/Header.css";

function Header() {
    return(
          <div className="wrapper">
          <div className="info_container">
              <li><i className="lni lni-map-marker"></i><strong>47 Av Med Balafrej Lot Ennassr Sidi Moumen, Casablanca</strong></li>
              <li><i className="lni lni-phone"></i><strong>05 22 02 35 05</strong></li>
              <li><i>@</i><strong>safety.vision.k@gmail.com</strong></li>
          </div>
          </div>
    );
}

export default Header;
