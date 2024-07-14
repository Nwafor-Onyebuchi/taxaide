

const IndividualHeader = () => {

      
    return(
        <div className="individual-header">
            <div className="individual-header-container">
                    <div className="text">
                        <h2>
                        Secure & seamless online transactions
                        </h2>
                        <p>
                        Providing you with the best online payment experience
                        </p>
                        <button className="btn btn-primary shadow-none">Create free account</button>
                    </div>
                    <div className="images">
                    <div className="images-box">
                    <div className="fifth-image"></div>
                    <div className="sixth-image"></div>
                    <img className="second-image"  src={`${process.env.PUBLIC_URL}/assets/images/second-img.svg`} alt="circle"/>
                        <img className="first-image" src={`${process.env.PUBLIC_URL}/assets/images/first-img.svg`} alt="circle"/>
                        <img className="third-image"  src={`${process.env.PUBLIC_URL}/assets/images/third-img.svg`} alt="circle"/>
                        <img className="fourth-image"  src={`${process.env.PUBLIC_URL}/assets/images/fourth-image.png`} alt="circle"/>
                    </div>
                    </div>
                    </div>
        </div>
    )
}


export default IndividualHeader