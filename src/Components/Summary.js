import React from 'react'
import people from './icons/icons/people.svg'
import cloud from './icons/icons/cloud-download.svg'
import chat from './icons/icons/chat.svg'
import tag from './icons/icons/tag.svg'
import SummaryItem from './SummaryItem'

const Summary = () => {
    return (
        <div>
            <div class="card">   {/* Summary panel */}
                <div class="card-header text-center summaryCardheader bg-dark">
                    Summary of this month
                                    </div>
                <div class="card-body">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <SummaryItem 
                                name='row bg-danger'
                                tag={tag}
                                text1='$9,587' 
                                text2='Income'
                                text3='Hello'
                                /> 

                            </div>
                            <div className="col">
                            <SummaryItem 
                                name='row bg-primary'
                                tag={cloud}
                                text1='$1.575' 
                                text2='Download'
                                text3='Hello'
                                />  
                            </div>
                            <div className="col">
                            <SummaryItem 
                                name='row bg-warning'
                                tag={people}
                                text1='$957' 
                                text2='New view'
                                text3='Hello'
                                />
                            </div>
                            <div className="col">
                            <SummaryItem 
                                name='row bg-success'
                                tag={chat}
                                text1='$300' 
                                text2='Comment'
                                text3='Hello'
                                />
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary
