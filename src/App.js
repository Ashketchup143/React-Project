
import './App.css';
import TextInput from './components/TextInput';
import Checkbox from './components/Checkbox';
import Header from './components/Header';
import Category from './components/Category';
import Items from './components/Items';

const sportingGoods = [
  {name: "Football", price: 49.99},
  {name: "BaseBall", price: 9.99},
  {name: "BasketBall", price: 29.99},
]

function App() {
  return (
    <div className="App">
      <text>My hatdog my</text>
      <TextInput/>
      <Checkbox/>
      <table>
        <tbody>
        <Header></Header>
        <Category></Category>
        <Items items={sportingGoods}/>
        </tbody>
      </table>
    </div>
  );
}

export default App;
