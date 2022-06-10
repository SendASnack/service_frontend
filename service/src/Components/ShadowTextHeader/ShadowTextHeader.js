import ShadowText from '../Text/ShadowText/ShadowText';
import './ShadowTextHeader.css';

const ShadowTextHeader = (props) => {
    return (
    <div className='shadow-text-header'>
        <ShadowText text={props.text} />
        <p>{props.text}</p>
    </div>
    )
}

export default ShadowTextHeader;