import React from 'react';

const Items = (props) => {
  console.log(props)
  return (
    <>
      {props.items
        .filter((item) => (
          (item.courseName && item.courseName.toLowerCase().includes(props.query.toLowerCase())) ||
          (item.courseNo && item.courseNo.toString().includes(props.query.toLowerCase()))
        ))
        .map((item) => (
          <tr key={item.id} onClick={() => alert(`${item.courseName} - Grade: ${item.Grade}`)}>
            <td>{item.courseNo}</td>
            <td>{item.courseName}</td>
            <td style={{ textAlign: 'center' }}>{item.Units}</td>
            <td style={{ textAlign: 'center' }}>{`${item.Grade}`}</td>
          </tr>
        ))}
    </>
  );
};

export default Items;
