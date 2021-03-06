import Navbar from '../../Components/Navbar/Navbar';
import HomeBackground from './Components/HomeBackground';
import HomeContent from './Components/HomeContent';
import './Home.css';

const Home = () => {
    return (
        <> 
            <Navbar />
            <HomeBackground />
            <HomeContent />
        </>
    );
}

export default Home;