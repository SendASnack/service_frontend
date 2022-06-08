import './Searchbar.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Searchbar = () => {
    return (
    <div className="search-bar" data-testid="searchbar">
        <input className='search-bar-input' type="search" placeholder="Search"></input>
    </div>
    )
}

export default Searchbar;