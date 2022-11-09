import logo from './logo.svg';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeContainer from './component/CakeContainer';

function App() {
  console.log("store", store)
  return (
    <Provider store={store}>
 <div className="full row p1 flexJCC"><h3>ADD USERS USING REDUX</h3></div>
      <div className="full row p3 ">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
