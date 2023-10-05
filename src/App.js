
import './App.css';
import TextInput from './components/TextInput';
import Checkbox from './components/Checkbox';
import Header from './components/Header';
import Category from './components/Category';
import Items from './components/Items';
import { useState } from 'react';
import Radiobuttons from './components/Radiobuttons';

const subjectGrade = [
  {id:1, courseNo: 101, courseName: 'English', Units: 3 , Grade: "A"},
  {id:2, courseNo: 202, courseName: 'Math', Units: 3, Grade: "A"},
  {id:3, courseNo: 303, courseName: "Chinese", Units: 3, Grade: "B"},
]

function App() {

  const calculateQPI = (grades) => {
    const gradeToPoints = {
      'A': 4.0,
      'B+': 3.5,
      'B': 3.0,
      'C+': 2.5,
      'C': 2.0,
      'D': 1.0,
      'F': 0.0,
    };

    // Calculate total points and total units
    let totalPoints = 0;
    let totalUnits = 0;

    for (const subject of data) {
      const grade = subject.Grade;
      const units = subject.Units;

      if (gradeToPoints.hasOwnProperty(grade)) {
        totalPoints += gradeToPoints[grade] * units;
        totalUnits += units;
      }
    }

    // Calculate QPI
    if (totalUnits === 0) {
      return 0; // Avoid division by zero
    } else {
      return (totalPoints / totalUnits).toFixed(2);
    }
  };

  const[textValue, setTxtValue] = useState('')
  const[form, setForm] = useState({
    CourseNo: 0,
    CourseName: "",
    Units: 0,
    Grade:""
  })
  const[showOnlyStock, setShowOnlyStock]=useState(false)
  const[data, setData]=useState(subjectGrade)

  const handleClick=()=>{
    alert('Hatdog')
  }

  const handleForm=(e) => setForm({...form, [e.target.id]: e.target.value})

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)

    setData([...data, {id: data.length + 1, CourseNo: form.CourseNo, CourseName: form.CourseName, Units: form.Units, Grade: form.Grade}])
  }
  

  return (
    <div className="App">
      <TextInput value={textValue} onChange={(e)=> setTxtValue(e.target.value)} />
      <div style={{display:"flex", flexDirection: 'row'}}>
      <div style={{display:"flex", flexDirection:"column"}}>
        <form style={{ gap:10, marginBottom:20}} onSubmit={handleSubmit}>
          <div>
            <label htmlFor='CourseNo'>CourseNo: </label>
            <br/>
            <input id="CourseNo" type='number' value={form.CourseNo} onChange={handleForm}/>
          </div>

          <div>
            <label htmlFor='CourseName'>CourseName: </label>
            <br/>
            <input id="CourseName" type='text' value={form.CourseName} onChange={handleForm}/>
          </div>

          <div>
            <label htmlFor='Units'>Units: </label>
            <br/>
            <input id="Units" type='number' value={form.Units} onChange={handleForm}/>
          </div>
          <Radiobuttons></Radiobuttons>
        </form>

        

        <button onClick={handleSubmit}>Submit</button>
      </div>
      {/* <text>My hatdog my</text> */}
      
      {/* <Checkbox value={showOnlyStock} onChange={(e)=> setShowOnlyStock(e.target.checked)}/>
      <button type='submit'>Submit</button> */}

      <table style={{display:'flex', flexDirection: "column" , border: "2px"}}>
        <tbody>
        <Header></Header>
        {/* <Category></Category> */}
        <Items items={data} includePrice query={textValue} showOnlyStock={showOnlyStock}/>
        {/* <tr>
          <td colSpan="2" style={{textAlign: 'right',padding:"2px"}}>QPI</td>
          
          <td style={{paddingLeft: "27.5px"}}>{data.reduce((total, subjectGrade)=> total+parseInt(subjectGrade.stock), 0)}</td>
        </tr> */}
        </tbody>
        <td style={{textAlign:"end", paddingRight:"100px"}}>Total QPI: {calculateQPI(data)}</td>
      </table>
      </div>
    </div>
  );
}

export default App;
