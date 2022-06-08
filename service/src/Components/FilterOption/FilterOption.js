import { Button } from 'react-bootstrap';
import './FilterOption.css';

const FilterOption = (props) => {
    return (
        <div className='filter-option' data-testid="filter-option">
            {props.children}
        </div>
    )
}

export default FilterOption;