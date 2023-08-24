import './App.css';
import BikeContainer from './components/BikeContainer';
import {Provider} from 'react-redux';
import store from './redux/store';
import HooksBikeContainer from './components/hooksBikeContainer';

function App() {
  return (
    <Provider store={store}> 
    <div className="App">
      <HooksBikeContainer />
      <BikeContainer />   
    </div>
    </Provider>
  );
}

export default App;
