import { useState } from "react"
import SendFunds from "./sendFunds"
import {payBillList, payBusinessList} from "../utilities/datas"

const PayBills = ({business}) => {
    const [activeTab, setActiveTab] = useState("pb")

    function mapData () {
        if(!business){
            return payBillList
        }else{
            return payBusinessList
        }
    }

    return(
        <div className={`paybills ${business && "paybills-biz"}`}>
            <div className="paybills-container">
                <div className="paybills-container-div">
                    <div className="paybill-tab-container">
                {
                    mapData().map(({name, id, text}) => (
                        <div className={id === activeTab ? "paybill-active-tab paybill-tab" : "paybill-tab"} key={id} onClick={() => setActiveTab(id)}>
                            <h1>{name}</h1>
                            <p>{text}</p>
                        </div>
                    ))
                }
                </div>
                </div>
                <div className={`paybills-container-div paybills-container-bg-div-grey ${business && "paybills-container-div paybills-container-div-biz paybills-container-bg-div-grey"}`}>
            {!business && <img src={`${process.env.PUBLIC_URL}/assets/images/paybill-top.svg`} alt="circle"/>}
            {business && <img src={`${process.env.PUBLIC_URL}/assets/images/paybillBusiness.svg`} alt="circle"/>}

                </div>
            </div>
            {!business && <div className="paybills-container">
            <div className="paybills-container-div-btm paybills-container-bg-div-grey">
            <img src={`${process.env.PUBLIC_URL}/assets/images/paybill-btm.svg`} alt="circle"/>
                </div>
                <div className="paybills-container-div">
                <div className="paybills-container-div-btm-text">
                <h2>Transact on the go</h2>
                <p>Stay on top of your business with our easy-to-use app</p>
                <button className="btn btn-primary mt-3 h-100 shadow-none w-4">Get Started</button>
                <div className="store-btn-container">
                    <button className="btn-store">
                    <div>
                    <img src={`${process.env.PUBLIC_URL}/assets/icons/appstore-icon.svg`} alt="circle"/>
                    <div>
                    <p>Download on the</p>
                    <h6>App Store</h6>
                    </div>
                    </div>
                    </button>
                    <button className="btn-store">
                    <div>
                    <img className="btn-storei" src={`${process.env.PUBLIC_URL}/assets/icons/playstore-icon.svg`} alt="circle"/>
                    </div>
                    <div>
                    <p>GET IT ON</p>
                    <h6>Google Play</h6>
                    </div>
                    </button>
                </div>
                </div>
                </div>
            </div>} { business && <SendFunds/>}
        </div>
    )
}


export default PayBills