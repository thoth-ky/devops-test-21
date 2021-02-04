import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        This react app is hosted  in EC2 with Ansible!!!
      </header>
    </div>
  );
}

export default App;
