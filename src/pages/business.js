import { PaymentTool, PayBills, BusinessHeader } from "../components";


const Business = () => {
    const business = true
    return(
        <>
        <BusinessHeader/>
        <PaymentTool business={business}/>
        <PayBills business={business} />
        </>
    )
}

export default Business