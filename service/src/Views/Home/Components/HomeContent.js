import Card from "../../../Components/Card/Card";
import VerticalText from "../../../Components/Text/VerticalText/VerticalText";
import './HomeContent.css';

const HomeContent = () => {
    return (
        <div className="home-content">  
            <h2 className="home-content-title">Dine In + Delivery</h2>
            <VerticalText class="middle dark" text="Menu" />
            <div className="products-cards">
                <Card title="Burger Thief" text="Lorem ipsum dolor sit amet, consecture" />
                <Card title="Burger Thief" text="Lorem ipsum dolor sit amet, consecture" />
                <Card title="Burger Thief" text="Lorem ipsum dolor sit amet, consecture" />
            </div>
            <div className="products-cards">
                <Card title="Burger Thief" text="Lorem ipsum dolor sit amet, consecture" />
                <Card title="Burger Thief" text="Lorem ipsum dolor sit amet, consecture" />
                <Card title="Burger Thief" text="Lorem ipsum dolor sit amet, consecture" />
            </div>
        </div>
    );
}

export default HomeContent;