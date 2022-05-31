import Button from '../../../Components/Button/Button';
import './LeftSideContent.css';

const LeftSideContent = (props) => {
    return (
        <div className="left-side-content">
            <h1 className="left-side-content-title">{props.title}</h1>
            <p className="left-side-content-text">{props.text}</p>
            <Button class="order" buttonText="order now" />
        </div>
    );
}

export default LeftSideContent;