import React from 'react'
import people from './icons/icons/people.svg'
import cloud from './icons/icons/cloud-download.svg'
import chat from './icons/icons/chat.svg'
import tag from './icons/icons/tag.svg'

const Summary = () => {
    return (
        <div>
            <div class="card">   {/* Summary panel */}
                <div class="card-header text-center">
                    Summary of this month
                                    </div>
                <div class="card-body">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="row bg-danger">

                                        <div className="col-3">
                                            <img src={tag} className="summary-dox-img" alt="" height="50" width="50" title="Bootstrap" />
                                        </div>
                                        <div className="col-9">
                                            <h4 className="text-right">$9,587</h4>
                                            <h4 className="text-right">Income</h4>
                                            <hr />
                                            <h5 className="text-center">Hello</h5>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col">
        
                                <div className="card ">
                                    <div className="row bg-primary">

                                        <div className="col-3">
                                            <img src={cloud} className="summary-dox-img" alt="" height="50" width="50" title="Bootstrap" />
                                        </div>
                                        <div className="col-9">
                                            <h4 className="text-right">$9,587</h4>
                                            <h4 className="text-right">Income</h4>
                                            <hr />
                                            <h5 className="text-center">Hello</h5>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="row bg-warning">
                                        <div className="col-3">
                                            <img src={people} className="summary-dox-img" alt="" height="50" width="50" title="Bootstrap" />
                                        </div>
                                        <div className="col-9">
                                            <h4 className="text-right">$9,587</h4>
                                            <h4 className="text-right">Income</h4>
                                            <hr />
                                            <h5 className="text-center">Hello</h5>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="row bg-success">

                                        <div className="col-3">
                                            <img src={chat} className="summary-dox-img" alt="" height="50" width="50" title="Bootstrap" />
                                        </div>
                                        <div className="col-9">
                                            <h4 className="text-right">$9,587</h4>
                                            <h4 className="text-right">Income</h4>
                                            <hr />
                                            <h5 className="text-center">Hello</h5>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary
