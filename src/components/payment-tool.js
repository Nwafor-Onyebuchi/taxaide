import AOS from "aos";
import { useEffect } from "react";


const PaymentTool = ({business}) => {

    useEffect(() => {
        AOS.init();
      }, []);

    return(
        <div className="payment-tool">
            <h1>Payments tools designed for you</h1>
            <p>Explore payment features that provides you with every possible solution</p>
            <div className="payment-tool-container">
            <div data-aos="fade-in-left">
            <img src={`${process.env.PUBLIC_URL}/assets/icons/friendliy.svg`} alt="circle"/>
            <h6>User Friendly</h6>
            {!business ? <p>Highly responsive and easy to navigate</p> : <p>Buy and sell popular digital currencies, keep track of them in the one place.</p>}
            </div>
            <div>
            <img src={`${process.env.PUBLIC_URL}/assets/icons/secure.svg`} alt="circle"/>
            <h6>Secure</h6>
            {!business ? <p>Your data is secure. It is continuously monitored, audited, and stored in an encrypted form.</p> : <p>All cash balances are covered by FDIC insurance, up to a maximum of $250,000.</p>}
            </div>
            <div>
            <img src={`${process.env.PUBLIC_URL}/assets/icons/fast.svg`} alt="circle"/>
            <h6>Fast</h6>
            {!business ? <p>Transacting takes only a few seconds - it's convenient and safe.</p>: <p>Supports a variety of the most popular digital currencies and always uptodate.</p>}
            </div>
            </div>
        </div>
    )
}


export default PaymentTool