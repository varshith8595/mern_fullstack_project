import './App.css'
import Topheading from './components/Topheading';
import Additem from './components/Additem';
import Itemslist from './components/Itemslist';
function App() {
  return (
    <div className='body__app'>
      <Topheading></Topheading>
      <Additem></Additem>
      <Itemslist></Itemslist>
    </div>
  )
}

export default App;
