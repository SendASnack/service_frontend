import "./HomeBackground.css";
import burguer from "./burguer.png";
import VerticalText from "../../../Components/Text/VerticalText/VerticalText";
import CircleLegend from "../../../Components/CircleLegend/CircleLegend";
import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";

const HomeBackground = (props) => {
  return (
    <div className="home-background">
      <div className="home-left-side">
        <LeftSideContent
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          title="Single Patty"
        />
      </div>
      <div className="home-background-image">
        <img src={burguer} alt="Burguer"></img>
        <CircleLegend price="7.99" />
      </div>
      <div className="home-right-side">
        <RightSideContent title="Sassy Burger" text="Our great burgers, Now with extra cheese" />
        <VerticalText class="bottom-right" text="Burguer" />
      </div>
    </div>
  );
};

export default HomeBackground;
