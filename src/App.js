import logo from './logo.svg';
import './App.css';
import Header from './compunents/Header/Header';
import Pricing from './compunents/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <h1 className='text-6xl'>This is Telwind</h1>

     <Pricing></Pricing>
    </div>
  );
}

export default App;
