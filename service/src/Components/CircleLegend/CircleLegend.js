import './CircleLegend.css';

const CircleLegend = (props) => {
    return (
        <div className="circle-legend-wrapper">
            <div className="circle-legend">
                <span className="legend-price">${props.price}</span>
            </div>
        </div>
    );
}

export default CircleLegend;