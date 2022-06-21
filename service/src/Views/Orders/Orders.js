import Button from '../../Components/Button/Button';
import FilterOption from '../../Components/FilterOption/FilterOption';
import Filters from '../../Components/Filters/Filters';
import Navbar from '../../Components/Navbar/Navbar';
import SearchAndFilters from '../../Components/SearchAndFilters/SearchAndFilters';
import Searchbar from '../../Components/Searchbar/Searchbar';
import VerticalText from '../../Components/Text/VerticalText/VerticalText';
import BurgerCard from '../../Components/BurgerCard/BurgerCard';
import './Orders.css';

const Orders = (props) => {
    return(
        <>
            <Navbar textClass="checkout-items-number-red" />
            <div className='orders'>
                <SearchAndFilters>
                    <Searchbar />
                    <Filters />
                </SearchAndFilters>
                <FilterOption>
                    <Button class="default-selected" buttonText="burgers" />
                    <Button class="default" buttonText="fries" />
                    <Button class="default" buttonText="beverages" />
                    <Button class="default" buttonText="promotions" />
                </FilterOption>

                <div className="orders-content">
                    <VerticalText class="middle dark" text="Menu" />
                    <div className="products-cards">
                        <BurgerCard path="/order-item" image="burguer.png" title="Burger Thief" text="Lorem ipsum dolor sit amet, consecture" />
                        <BurgerCard path="/order-item" image="burguer.png" title="Burger Thief" text="Lorem ipsum dolor sit amet, consecture" />
                        <BurgerCard path="/order-item" image="burguer.png" title="Burger Thief" text="Lorem ipsum dolor sit amet, consecture" />
                        <BurgerCard path="/order-item" image="burguer.png" title="Burger Thief" text="Lorem ipsum dolor sit amet, consecture" />
                        <BurgerCard path="/order-item" image="burguer.png" title="Burger Thief" text="Lorem ipsum dolor sit amet, consecture" />
                        <BurgerCard path="/order-item" image="burguer.png" title="Burger Thief" text="Lorem ipsum dolor sit amet, consecture" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Orders;