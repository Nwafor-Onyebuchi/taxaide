import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-right">
        <img
              src={`${process.env.PUBLIC_URL}/assets/icons/taxpay-logo-nav.svg`}
              height={68}
              width={157}
              alt="logo"
            />
              <div className="icons">
            <img src={`${process.env.PUBLIC_URL}/assets/icons/instagram-ic.svg`} alt="logo"/>
            <img src={`${process.env.PUBLIC_URL}/assets/icons/facebook-ic.svg`} alt="logo"/>
            <img src={`${process.env.PUBLIC_URL}/assets/icons/twitter-ic.svg`} alt="logo"/>
            </div>
            <p>2015-2022 Taxaide Technologies Limited. All rights reserved</p>
          
        </div>
        <div className="footer-about-us">
        <div>
        <Link className="footer-link"><h2>About Us</h2></Link>
        <Link className="footer-link"><p>About</p></Link>
        <Link className="footer-link"> <p>Legal & privacy</p></Link>
        </div>
        <div>
        <h2>Products</h2>
        <Link className="footer-link"><p>TBook®</p></Link>
        <Link className="footer-link"><p>TaxiTWithhold®</p></Link> 
        <Link className="footer-link"> <p>TaxiTPayroll®</p></Link>
        </div>
        </div>
    </div>
  );
}

export default Footer;
