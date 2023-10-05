import React from 'react'

const Header = () => {
  return (
    <tr>
      <td style={{fontWeight: "bold", color: "red"}}>CourseNo</td>
      <td style={{fontWeight: "bold", paddingLeft: "20px", color: "red"}}>CourseName</td>
      <td style={{paddingLeft: "20px", fontWeight: "bold", color: "red"}}>Units</td>
      <td style={{ paddingLeft: "20px", fontWeight: "bold", color: "red"}}>Grade</td>

    </tr>
  )
}

export default Header
