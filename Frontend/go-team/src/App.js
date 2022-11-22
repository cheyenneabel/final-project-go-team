import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PageSwitch from './PageSwitch';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header/>
          <div className='page'>
            <PageSwitch />
          </div>

          <Footer />


      </BrowserRouter>
    </div>
  );
}

export default App;
