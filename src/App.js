import './App.css';

import Menu from './components/Menu';
import Body from './components/Body'

function App() {
  return (
    <div className="App">
      <div>
        <Body />
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
}

export default App;
