
import './App.css';
import Footer from './Components/Footer/Footer';
import HomeBanner from './Components/HomeBanner/HomeBanner';
import MasterWrapper from './Components/MasterWrapper/MasterWrapper';
import Navbar from './Components/Navbar/Navbar';
import Ps from './Components/ProductAndServices/Ps';
import Screen from './Components/Screen/Screen';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomeBanner/>
      <Screen/>
      <MasterWrapper/>
      <Footer/>
    </div>
  );
}

export default App;
