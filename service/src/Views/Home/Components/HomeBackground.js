import './HomeBackground.css';
import burguer from './burguer.png';
import VerticalText from '../../../Components/Text/VerticalText/VerticalText';

const HomeBackground = (props) => {
    return (
        <div className='home-background'>
            <div className='home-left-side'>
            </div>
            <div className='home-right-side'>
                <VerticalText class="bottom-right" text="Burguer"/>
            </div>
        </div>
    );
}

export default HomeBackground;