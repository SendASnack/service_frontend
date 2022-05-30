import './HomeBackground.css';
import burguer from './burguer.png';

const HomeBackground = (props) => {
    return (
        <div className='home-background'>
            <div className='home-left-side'>
            </div>
            <div className='home-right-side'>
                <h1 className="vertical-text">Burguer</h1>
            </div>
        </div>
    );
}

export default HomeBackground;