import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Heading from './component/Heading';
import Main from './component/Main';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Heading/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
