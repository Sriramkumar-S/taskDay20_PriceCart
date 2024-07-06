/* eslint-disable react/no-unescaped-entities */
import './PriceCart.css'

const PriceCart = (data) => {
    console.log(data)
    return <>
        <div className="card border-primary mb-3 card-div" >
            <div className="card-header text-center">
                <p>{data.priceCartData.subscriptionType}</p>
                <h2>${data.priceCartData.price}/month</h2>
            </div>
            <div className="card-body text-secondary">
                <div style={{ textAlign: "left", paddingBottom: "15px" }}>
                    {data.priceCartData.features[0].enabled && <i className="fa fa-check" aria-hidden="true"></i>}
                    {!data.priceCartData.features[0].enabled && <i className="fa fa-times" aria-hidden="true"></i>}
                    <span className="card-text feature" style={{ opacity: (data.priceCartData.features[0].enabled) ? "1" : "0.5" }}>{data.priceCartData.features[0].name}</span>
                </div>
                <div style={{ textAlign: "left", paddingBottom: "15px" }}>
                    {data.priceCartData.features[1].enabled && <i className="fa fa-check" aria-hidden="true"></i>}
                    {!data.priceCartData.features[1].enabled && <i className="fa fa-times" aria-hidden="true"></i>}
                    <span className="card-text feature" style={{ opacity: (data.priceCartData.features[1].enabled) ? "1" : "0.5" }}>{data.priceCartData.features[1].name}</span>
                </div>
                <div style={{ textAlign: "left", paddingBottom: "15px" }}>
                    {data.priceCartData.features[2].enabled && <i className="fa fa-check" aria-hidden="true"></i>}
                    {!data.priceCartData.features[2].enabled && <i className="fa fa-times" aria-hidden="true"></i>}
                    <span className="card-text feature" style={{ opacity: (data.priceCartData.features[2].enabled) ? "1" : "0.5" }}>{data.priceCartData.features[2].name}</span>
                </div>
                <div style={{ textAlign: "left", paddingBottom: "15px" }}>
                    {data.priceCartData.features[3].enabled && <i className="fa fa-check" aria-hidden="true"></i>}
                    {!data.priceCartData.features[3].enabled && <i className="fa fa-times" aria-hidden="true"></i>}
                    <span className="card-text feature" style={{ opacity: (data.priceCartData.features[3].enabled) ? "1" : "0.5" }}>{data.priceCartData.features[3].name}</span>
                </div>
                <div style={{ textAlign: "left", paddingBottom: "15px" }}>
                    {data.priceCartData.features[4].enabled && <i className="fa fa-check" aria-hidden="true"></i>}
                    {!data.priceCartData.features[4].enabled && <i className="fa fa-times" aria-hidden="true"></i>}
                    <span className="card-text feature" style={{ opacity: (data.priceCartData.features[4].enabled) ? "1" : "0.5" }}>{data.priceCartData.features[4].name}</span>
                </div>
                <div style={{ textAlign: "left", paddingBottom: "15px" }}>
                    {data.priceCartData.features[5].enabled && <i className="fa fa-check" aria-hidden="true"></i>}
                    {!data.priceCartData.features[5].enabled && <i className="fa fa-times" aria-hidden="true"></i>}
                    <span className="card-text feature" style={{ opacity: (data.priceCartData.features[5].enabled) ? "1" : "0.5" }}>{data.priceCartData.features[5].name}</span>
                </div>
                <div style={{ textAlign: "left", paddingBottom: "15px" }}>
                    {data.priceCartData.features[6].enabled && <i className="fa fa-check" aria-hidden="true"></i>}
                    {!data.priceCartData.features[6].enabled && <i className="fa fa-times" aria-hidden="true"></i>}
                    <span className="card-text feature" style={{ opacity: (data.priceCartData.features[6].enabled) ? "1" : "0.5" }}>{data.priceCartData.features[6].name}</span>
                </div>
                <div style={{ textAlign: "left", paddingBottom: "15px" }}>
                    {data.priceCartData.features[7].enabled && <i className="fa fa-check" aria-hidden="true"></i>}
                    {!data.priceCartData.features[7].enabled && <i className="fa fa-times" aria-hidden="true"></i>}
                    <span className="card-text feature" style={{ opacity: (data.priceCartData.features[7].enabled) ? "1" : "0.5" }}>{data.priceCartData.features[7].name}</span>
                </div>
                <button type="button" className="btn btn-primary button">Button</button>
            </div>
        </div>
    </>

}

export default PriceCart