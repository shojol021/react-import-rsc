import './App.css';
import Countries from './components/Countries/Countries';
import Country from './components/Country/Country';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
    </div>
  );
}

export default App;
