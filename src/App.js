import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';


 let a = "john"
function App() {
  return (
    <div className="App">
      
      <Navbar></Navbar>
       <div className='container'>
      <Form labelname="Please Enter the text"></Form>
      </div>
      
      <div className='container mt-3'>
      <About></About>
      </div>
    </div>
  );
}

export default App;
