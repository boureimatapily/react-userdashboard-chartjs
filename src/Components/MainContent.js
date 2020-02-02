import React from 'react'
import list from './icons/icons/list.svg'
import moi from './moi.jpg'
import Summary from './Summary'
import Activity from './Activity'
import TopMenbers from './TopMenbers'




const MainContent = () => {
    return (
        <div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col">

                        <div class="card"> {/* Main panel */}
                            <div class="card-header">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-3">
                                            <button><img src={list} alt="" width="32" height="32" title="list" /> </button>
                                        </div>
                                        <div className="col-9 text-right">
                                            <img src={moi} alt="moi" class="rounded-circle" width="45" height="60" /> <b>Boureima TAPILY </b>
                                            <img src={list} alt="" width="32" height="32" title="list" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <Summary />
                                <div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-6">
                                                <Activity />
                                            </div>
                                            <div className="col-6">
                                                <TopMenbers />
                                            </div>
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

export default MainContent
