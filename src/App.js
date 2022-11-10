import './App.css';
import { Provider } from 'react-redux';
import store from './store/index';
import Categories from './components/Categories';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Categories />
    </div>
  </Provider>
  );
}

export default App;
