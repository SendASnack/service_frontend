import './Profile.css';
import Navbar from '../../Components/Navbar/Navbar';
import CardInfo from './Components/CardInfo';
import InfoData from './Components/InfoData';
import ActiveCard from './Components/ActiveCard';
import SetDefaultCard from './Components/SetDefaultCard';

const Profile = () => {
    return (
        <>
            <Navbar />
            <div className='profile'>
                <div className='profile-cards-wrapper'>
                    <div className='profile-card-info'>
                        <CardInfo>
                            <InfoData title="Name" content="Pedro Monteiro" />
                            <InfoData title="Email" content="pmapm@ua.pt" />
                            <InfoData title="Phone No." content="969698252" />
                            <InfoData class="address" title="Address" content="Rua das Salsichas, Aveiro, Portugal 6300-101" />
                            <ActiveCard title="Payment Methods" />
                            <SetDefaultCard />
                            <SetDefaultCard /> 
                        </CardInfo>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;