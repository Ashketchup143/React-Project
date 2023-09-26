
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

  const[textValue, setTxtValue] = useState('')
  const[form, setForm] = useState({
    nameItem: '',
    priceItem: 0,
    stockItem: 0,
  })
  const[showOnlyStock, setShowOnlyStock]=useState(false)
  const[data, setData]=useState(sportingGoods)

  const handleClick=()=>{
    alert('Hatdog')
  }

  const handleForm=(e) => setForm({...form, [e.target.id]: e.target.value})

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)

    setData([...data, {id: data.length + 1, name: form.nameItem, price: form.priceItem, stock: form.stockItem}])
  }

  return (
    <div className="App">
      <form style={{display:"flex", flexDirection: 'column', gap:10, marginBottom:20}} onSubmit={handleSubmit}>
        <div>
          <label htmlFor='nameItem'>Name: </label>
          <br/>
          <input id="nameItem" type='text' value={form.nameItem} onChange={handleForm}/>
        </div>

        <div>
          <label htmlFor='priceItem'>Price: </label>
          <br/>
          <input id="priceItem" type='number' value={form.priceItem} onChange={handleForm}/>
        </div>

        <div>
          <label htmlFor='stockItem'>Stock: </label>
          <br/>
          <input id="stockItem" type='number' value={form.stockItem} onChange={handleForm}/>
        </div>
        <button onClick={handleSubmit}>Submit</button>

      </form>
      <text>My hatdog my</text>
      <TextInput value={textValue} onChange={(e)=> setTxtValue(e.target.value)} />
      <Checkbox value={showOnlyStock} onChange={(e)=> setShowOnlyStock(e.target.checked)}/>
      <button type='submit'>Submit</button>

      <table>
        <tbody>
        <Header></Header>
        <Category></Category>
        <Items items={data} includePrice query={textValue} showOnlyStock={showOnlyStock}/>
        <tr>
          <td colSpan="2" style={{textAlign: 'right',padding:"2px"}}>Total</td>
          <td style={{paddingLeft: "27.5px"}}>{data.reduce((total, sportingGoods)=> total+parseInt(sportingGoods.stock), 0)}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
