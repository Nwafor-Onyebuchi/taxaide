
const BusinessHeader = () => {
    return(
        <div className="text-center">
        <div className="business-header">
          <div className="text">
          <h1>Manage payroll, compliance & HR in real time</h1>
          <p>Make income tax remittances to the state internal revenue <br/> service for your employees.</p>
          <button className="btn btn-primary">Create free account</button>
          </div>
        </div>
        <img className="business-header-img" src={`${process.env.PUBLIC_URL}/assets/images/business-header-image.svg`} alt="circle"/>
        </div>
    )
}


export default BusinessHeader