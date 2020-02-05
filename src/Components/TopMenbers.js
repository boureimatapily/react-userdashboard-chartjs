import React from 'react'
import top1 from './icons/icons/people.svg'
import moi from './moi.jpg'


const Members = [
  {
    id:"1",
    image:'moi',
    name1:'Boureima Tapily',
    name2:'Codetrain',
    view:'215',
    commemt:'27'
  },
  {
    id:"2",
    image:'top1',
    name1:'Mohamed ZAK',
    name2:'Codetrain',
    view:'105',
    commemt:'27'
  },
  {
    id:"3",
    image:'top1',
    name1:'Awal',
    name2:'Codetrain',
    view:'204',
    commemt:'27'
  }
]

const TopMenbers = () => {
  return (
    <div>

        <table className="table table-striped">
          <tbody>
            <tr>
              <td colSpan="2">Top Active Members</td>
              <td>  view</td>
              <td>COMMENTS</td>
            </tr>
            {
              Members.map(member =>(
                <tr key={member.id}>
              <td><img src={top1} alt="Avatar" height="30" width="30" /></td>
              <td>
                <h5>{member.name1}</h5>
                <h6>{member.name2}</h6>
              </td>
              <td> {member.view}</td>
              <td>{member.commemt}</td>
            </tr>

              ))
            }
            
          </tbody>
        </table>




    </div>
  )
}

export default TopMenbers
