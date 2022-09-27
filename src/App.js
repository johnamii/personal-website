import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Header = () => {

  return  (
    <div className='header'>
      Waiting to find some time to build my personal website, here's a ditto to pass the time
      <br/>
      <a href='https://github.com/johnamii'> github </a> ---
      <a href='https://www.linkedin.com/in/john-flanagan-343058230/'> linkedin </a>
    </div>
  )
}

const Body = () => {
  return (
    <div className='body'>
      BODY
    </div>
  )
}

const HomeScreen = () => {
  return (
    <div className='homescreen'>
      <Header/>
      <div className='center'>
        <div className='ditto-div' >
          <img src='ditto haha.gif' style={{height: '75%', width: '75%'}}/>
        </div>
      </div>
      
      
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
