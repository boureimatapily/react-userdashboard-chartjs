import React from 'react'

const SummaryItem = (props) => {
    return (
        <div>
            <div className="card summaryItemCard">
                <div className={props.name}>

                    <div className="col-3">
                        <img src={props.tag} className="summary-dox-img" alt="" height="50" width="50" title="Bootstrap" />
                    </div>
                    <div className="col-9">
                         <h4 className="text-right">{props.text1}</h4>
                        <h4 className="text-right">{props.text2}</h4>
                        <hr />
                        <h5 className="text-center">{props.text3}</h5>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SummaryItem
