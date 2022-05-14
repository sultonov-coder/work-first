import './App.css';
import Header from './components/Header'
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Base from './pages/Base'
import Main from './components/Main'
import First from './pages/First'
import Second from './pages/Second'
import Third from './pages/Three'
import Fourth from './pages/Four'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Header />
        <div className="body">
          <div className="left">
          <Main/>
          </div>
          <div className="right">
            
              <Routes>
                <Route path="/" exact element = {<Base/>}/>
                <Route path="/first" element = {<First/>}/>
                <Route path="/second" element = {<Second/>}/>
                <Route path="/third" element = {<Third/>}/>
                <Route path="/fourth" element = {<Fourth/>}/>
              </Routes>
          </div>
          
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
