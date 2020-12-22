import './App.css';

//bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

//components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div style= {{minHeight: '85.9vh'}}>a</div>
      <Footer />
    </div>
  );
}

export default App;
