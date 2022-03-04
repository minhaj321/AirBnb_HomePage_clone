import logo from './logo.svg';
import './App.css';
import Header from './components/header.js'
import SearchBar from './components/SearchBar';
import HelpBar from './components/HelpBar';
import CuriosityBooking from './components/CuriosityBooking';
import DiscoverExperience from './components/DiscoverExperience';
import CardsComponent from './components/CardsComponent';
import INspirationComponent from './components/INspirationComponent';
import DestinationSection from './components/DestinationSection';
import DetailSection from './components/DetailSection';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <div className='first_div'> 
      <Header/>
      <SearchBar/>
      <HelpBar/>
      <CuriosityBooking/>
        <DiscoverExperience/>
        <CardsComponent/>
        <INspirationComponent/>
        <DestinationSection/>
        <DetailSection/>
        <Footer/>
      </div>
      <div className='second_div'>
      </div>
    </div>
  );
}

export default App;
