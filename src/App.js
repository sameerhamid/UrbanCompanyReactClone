// import { Route, Routes } from 'react-router-dom';
import './app.css';
// import Home from './components/navbar/home/Home';
// import RegisterAsProfessional from './components/register/RegisterAsProfessional';
// import Card from './components/cards/Card';
import Navbar from './components/navbar/Navbar';
import HereoSection from './components/heroSection/HereoSection';
import CardsCarsual from './components/carasual/CardsCarsual';
import Networthy from './components/newAndNetWorthy/Networthy';
import BookedServices from './components/mostBookedServices/BookedServices';
import Saloon from './components/saloonForWomen/Saloon';


function App() {
  return (
    <div className="appContainer">
      <div className='innerCont'>
        <Navbar />
        <HereoSection />

        <CardsCarsual />
        <Networthy />
        <BookedServices />

        <Saloon />
        {/* {<Card />} */}
      </div>
    </div>
  );
}

export default App;
