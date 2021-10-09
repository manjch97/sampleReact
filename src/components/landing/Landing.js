import "./Landing.scss";
import PreLoginHeader from "../common/header/PreLoginHeader";
import Splash from '../common/header/Splash'
import PaypalComponent from "../payment/PaypalComponent";

const Landing = () => {
    
    return (
      <div>
        {/* <PaypalComponent/> */}
        <Splash/>
        <PreLoginHeader />
      </div>
    );
}

export default Landing;
