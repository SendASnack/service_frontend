import './SearchAndFilters.css';

const SearchAndFilters = (props) => {
    return (
        <div className="search-and-filters">
            {props.children}
        </div>
    );
}

export default SearchAndFilters;