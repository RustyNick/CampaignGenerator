import './App.css';
import Header from './componets/Header';
import ViewPage from './componets/ViewPage';


function App() {
  return (
    <div className="App">
      
      <Header/>
      <div className='container__center container__marginTop ' >
      <ViewPage/>
      </div>
      
    </div>
  );
}

export default App;
