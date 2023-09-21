
import './App.css';
import TextInput from './components/TextInput';
import Checkbox from './components/Checkbox';
import Header from './components/Header';
import Category from './components/Category';
import Items from './components/Items';
import { useState } from 'react';

const sportingGoods = [
  {id:1, name: "Football", price: 49.99, stock: 0},
  {id:2, name: "BaseBall", price: 9.99, stock: 1},
  {id:3, name: "BasketBall", price: 29.99, stock: 2},
]

function App() {

  const[textValue, setTxtValue] = useState('watashi ashley gengki des')
  const[showOnlyStock, setShowOnlyStock]=useState(false)

  const handleClick=()=>{
    alert('Hatdog')
  }

  return (
    <div className="App">
      {textValue}
      <text>My hatdog my</text>
      <TextInput value={textValue} onChange={(e)=> setTxtValue(e.target.value)} />
      <Checkbox value={showOnlyStock} onChange={(e)=> setShowOnlyStock(e.target.checked)}/>
      <button onClick={handleClick}>Submit</button>

      <table>
        <tbody>
        <Header></Header>
        <Category></Category>
        <Items items={sportingGoods} includePrice query={textValue} showOnlyStock={showOnlyStock}/>
        </tbody>
      </table>
    </div>
  );
}

export default App;
