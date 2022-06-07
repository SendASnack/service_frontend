import './Searchbar.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Searchbar = () => {
    return (
    <div className="search-bar">
        <input className='search-bar-input' type="search" placeholder="Search"></input>
    </div>
    )
}

export default Searchbar;