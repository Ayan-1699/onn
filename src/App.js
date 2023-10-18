import './App.css';
// import { NavBar } from './Components/NavBar/NavBar';
import Card from './Components/PlayCards/Card';
import Sidebar from './Components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      {/* <div className='Header'>
        <NavBar/>
      </div> */}
      {/* <div className='Side'>
      </div> */}
      <div className='Body'>
        <div className='Side'><Sidebar/></div>
        <div className='Content'><Card/></div>
      </div>
      <div className='Footer'>
        footer
      </div>
      
    </div>
  );
}

export default App;
