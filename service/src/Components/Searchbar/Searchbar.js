import './Searchbar.css';

const Searchbar = () => {
    return (
    <div className="search-bar" data-testid="searchbar">
        <input className='search-bar-input' type="search" placeholder="Search"></input>
    </div>
    )
}

export default Searchbar;