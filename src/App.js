import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Horor from './components/Horor';
import Action from './components/Action';
import "./style/landingPage.css";

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
    
      <div className="horor">
        <Horor />
      </div>
      
      <div className="action">
        <Action />
      </div>
    </div>
  );
}

export default App;
