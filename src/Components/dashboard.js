import React from 'react'

const Dashboard = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <div class="list-group">
                            <a href="#" class="list-group-item list-group-item-action active">
                                FREELANCER
                             </a>
                            <a href="#" class="list-group-item list-group-item-action"> Overview</a>
                            <a href="#" class="list-group-item list-group-item-action">Members</a>
                            <a href="#" class="list-group-item list-group-item-action">Rapports</a>
                            <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">Schedule</a>
                            <a href="#" class="list-group-item list-group-item-action">Invoice</a>
                            <a href="#" class="list-group-item list-group-item-action">Marketing</a>
                            <a href="#" class="list-group-item list-group-item-action"><img src="/assets/img/bootstrap.svg" alt="" width="32" height="32" title="Bootstrap" />Setting</a>
                        </div>
                    </div>

                    <div className="col-8">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
