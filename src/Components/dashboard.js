import React from 'react'
import MainContent from './MainContent'
import Sidebar from './Sidebar'

const Dashboard = () => {
    return (
        <div>
          <div className="container-fluid">
              <div className="row no-gutters">
                  <div className="col-2 sidebarcard">
                      <Sidebar />

                  </div>
                  <div className="col-10">
                        <MainContent />
                  </div>
              </div>
          </div>


        </div>
    )
}

export default Dashboard
