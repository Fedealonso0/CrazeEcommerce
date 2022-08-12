import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';



function App() {
  return (
    <div>
      <NavBar />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Ecommerce de Fede en proceso</p>
        <a className="App-link" href="https://www.youtube.com/">
          ¿No te sale? ¡Buscalo aca!
        </a>
      </header>
    </div>
    </div>
  );
}

export default App;
