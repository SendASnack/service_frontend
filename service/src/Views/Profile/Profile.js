import './Profile.css';
import Navbar from '../../Components/Navbar/Navbar';
import CardInfo from './Components/CardInfo';
import InfoData from './Components/InfoData';
import ActiveCard from './Components/ActiveCard';
import SetDefaultCard from './Components/SetDefaultCard';
import InputCard from './Components/InputCard';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';

const Profile = () => {
    return (
        <>
            <Navbar textClass="checkout-items-number-red" />
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
                        <div className='input-cards'>
                        <InputCard>
                            <Input type="password" label="Password" value="password" />
                            <Input type="password" label="New password" value="new-password" />
                            <div className='align-button-center'>
                                <Button class="input-card-button" buttonText="change password" />
                            </div>
                        </InputCard>
                        <InputCard>
                            <Input type="tel" label="Phone No." value="" />
                            <div className='align-button-center'>
                                <Button class="input-card-button" buttonText="change phone no." />
                            </div>
                        </InputCard>
                        <InputCard>
                            <Input type="text" label="City" value="city" />
                            <Input type="text" label="Street" value="street" />
                            <Input class="no-margin-bottom" type="text" label="Postal-Code" value="postal-code" />
                            <div className='align-button-center'>
                                <Button class="input-card-button" buttonText="change address" />
                            </div>
                        </InputCard>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;