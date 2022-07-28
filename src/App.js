import './App.css';

// redux
import { Provider } from 'react-redux';
import store from './redux/store';

import Menu from './components/Menu';
import Body from './components/Body'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
            <Body />
      </div>
    </Provider>
  );
}

export default App;
