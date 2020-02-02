import React from 'react'
import gear from './icons/icons/gear.svg'
import person from './icons/icons/person.svg'
import list from './icons/icons/list.svg'
import listtask from './icons/icons/list-task.svg'
import table from './icons/icons/table.svg'

const Sidebar = () => {
    return (
        <div>
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action active bg-dark text-center">
                    FREELANCER
                             </a>
                <a href="#" class="list-group-item list-group-item-action"><img src={person} alt="" width="32" height="32" title="Bootstrap" /> Overview</a>
                <a href="#" class="list-group-item list-group-item-action"><img src={person} alt="" width="32" height="32" title="Bootstrap" /> Members</a>
                <a href="#" class="list-group-item list-group-item-action"><img src={listtask} alt="" width="32" height="32" title="Bootstrap" /> Rapports</a>
                <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true"><img src={table} alt="" width="32" height="32" title="Bootstrap" /> Schedule</a>
                <a href="#" class="list-group-item list-group-item-action"><img src={list} alt="" width="32" height="32" title="Bootstrap" /> Invoice</a>
                <a href="#" class="list-group-item list-group-item-action"><img src={table} alt="" width="32" height="32" title="Bootstrap" /> Marketing</a>
                <a href="#" class="list-group-item list-group-item-action"><img src={gear} alt="" width="32" height="32" title="Bootstrap" />Setting</a>
            </div>
        </div>
    )
}

export default Sidebar
