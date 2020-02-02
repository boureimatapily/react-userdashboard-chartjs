import React from 'react'
import MainContent from './MainContent'
import Sidebar from './Sidebar'

const Dashboard = () => {
    return (
        <div>
          <div className="container-fluid">
              <div className="row">
                  <div className="col-3">
                      <Sidebar />

                  </div>
                  <div className="col-9">
                        <MainContent />
                  </div>
              </div>
          </div>


        </div>
    )
}

export default Dashboard
