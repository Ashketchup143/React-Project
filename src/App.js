import './App.css';
import TextInput from './components/TextInput';
import Header from './components/Header';
import Items from './components/Items';
import { useState } from 'react';

const subjectGrade = [
   { id: 1, courseNo: '101', courseName: 'English', Units: 3, Grade: "A" },
   { id: 2, courseNo: '202', courseName: 'Math', Units: 3, Grade: "A" },
   { id: 3, courseNo: '303', courseName: "Chinese", Units: 3, Grade: "B" },
];

const formStyle = {
  border: '2px solid #ccc',
  padding: '20px',
  borderRadius: '5px',
};

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

    for (const subject of grades) {
      const grade = subject.Grade;
      const units = parseInt(subject.Units);

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

  const [textValue, setTxtValue] = useState('');
  const [form, setForm] = useState({
    CourseNo: '',
    CourseName: '',
    Units: 0,
    Grade: ''
  });
  const [showOnlyStock, setShowOnlyStock] = useState(false);
  const [data, setData] = useState(subjectGrade);
  const [selectedGrade, setSelectedGrade] = useState('');

  const handleForm = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const handleGradeChange = (grade) => {
    setSelectedGrade(grade);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedGrade)
    console.log(`CourseNo: ${form.CourseNo}, CourseName: ${form.CourseName}, Units: ${form.Units}, Grade: ${selectedGrade}`);

    // Check if all form fields are filled
    if (form.CourseNo && form.CourseName && form.Units && selectedGrade) {
      console.log(selectedGrade)
      setData([
        ...data,
        {
          id: data.length + 1,
          courseNo: form.CourseNo,
          courseName: form.CourseName,
          Units: parseInt(form.Units),
          Grade: selectedGrade
        }
      ]);

      // Clear the form fields and selectedGradeset
      setForm({
        CourseNo:'',
        CourseName: '',
        Units: 0,
        Grade: ''
      });
      setSelectedGrade('');
    } else {
      alert('Please fill out all form fields and select a grade.');
    }
  };

  return (
    <div className="App" style={{backgroundColor:"#3E3D3C"}}>
      <div style={{display: "flex", flexDirection:"column", backgroundColor:"white", border:"1px", padding:"25px", borderRadius:"25px", height:"500px"}}>
      <TextInput value={textValue} onChange={(e) => setTxtValue(e.target.value)} style={{width:"50px"}}  />
      <div style={{ display: "flex", flexDirection: 'row' }}>
        <div style={{ display: "flex", flexDirection: "column", border:"1px"}}>
          <form style={{ gap: 10, marginBottom: 20,  }} onSubmit={handleSubmit}>
            <div>
              <label htmlFor='CourseNo'>CourseNo: </label>
              <br />
              <input id="CourseNo" type='text' value={form.CourseNo} onChange={handleForm} />
            </div>

            <div>
              <label htmlFor='CourseName'>CourseName: </label>
              <br />
              <input id="CourseName" type='text' value={form.CourseName} onChange={handleForm} />
            </div>

            <div>
              <label htmlFor='Units'>Units: </label>
              <br />
              <input id="Units" type='number' value={form.Units} onChange={handleForm} />
            </div>

            <div>
              <label>Grade: </label>
              <br />
              <div>
  <input
    type="radio"
    id="A"
    name="grade"
    value="A"
    checked={selectedGrade === 'A'}
    onChange={() => handleGradeChange('A')}
  />
  <label htmlFor="A">A</label>
</div>
<div>
  <input
    type="radio"
    id="B+"
    name="grade"
    value="B+"
    checked={selectedGrade === 'B+'}
    onChange={() => handleGradeChange('B+')}
  />
  <label htmlFor="B+">B+</label>
</div>
<div>
  <input
    type="radio"
    id="B"
    name="grade"
    value="B"
    checked={selectedGrade === 'B'}
    onChange={() => handleGradeChange('B')}
  />
  <label htmlFor="B">B</label>
</div>
<div>
  <input
    type="radio"
    id="C+"
    name="grade"
    value="C+"
    checked={selectedGrade === 'C+'}
    onChange={() => handleGradeChange('C+')}
  />
  <label htmlFor="C+">C+</label>
</div>
<div>
  <input
    type="radio"
    id="C"
    name="grade"
    value="C"
    checked={selectedGrade === 'C'}
    onChange={() => handleGradeChange('C')}
  />
  <label htmlFor="C">C</label>
</div>
<div>
  <input
    type="radio"
    id="D"
    name="grade"
    value="D"
    checked={selectedGrade === 'D'}
    onChange={() => handleGradeChange('D')}
  />
  <label htmlFor="D">D</label>
</div>
<div>
  <input
    type="radio"
    id="F"
    name="grade"
    value="F"
    checked={selectedGrade === 'F'}
    onChange={() => handleGradeChange('F')}
  />
  <label htmlFor="F">F</label>
</div>
            </div>

          </form>

          <button onClick={handleSubmit}>Submit</button>
        </div>

        <table style={{ display: 'flex', flexDirection: 'column', marginLeft: '50px', border: '2px solid #ccc', borderRadius: '5px' }}>
          <tbody>
            <Header></Header>
            <Items key={data.length} items={data} includePrice query={textValue} showOnlyStock={showOnlyStock} />
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2" style={{ textAlign: 'right', padding: '2px' }}>
                Total QPI:
              </td>
              <td style={{ paddingLeft: '27.5px' }}>{calculateQPI(data)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    </div>
  );
}

export default App;