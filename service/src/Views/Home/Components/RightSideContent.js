import './RightSideContent.css';

const RightSideContent = (props) => {
    return (
        <div className="right-side-content">
            <h1 className="right-side-content-title">{props.title}</h1>
            <p className="right-side-content-text">{props.text}</p>
        </div>
    );
}

export default RightSideContent;