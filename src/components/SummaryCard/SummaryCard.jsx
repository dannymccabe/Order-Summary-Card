import "./summarycard.scss";
import backgroundImage from "../../images/illustration-hero.svg";
import musicIcon from "../../images/icon-music.svg";

const SummaryCard = () => {
  return (
    <div className="card">
      <img
        src={backgroundImage}
        alt="bg-illustration"
        className="background-image"
      />
      <div className="text-container">
        <h1 className="title">Order Summary</h1>
        <p className="paragraph">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="plan-container">
            <div className="music-icon">
                <img src={musicIcon} alt="music" />
             </div>   
          <div className="plan-price">
            <h4 className="plan-title">Annual Plan</h4>{" "}
            <p className="price">$59.99/year</p>{" "}
          </div>

          <a href="#" className="change-link">
            Change
          </a>
        </div>
        <button className="payment-button">Proceed to Payment</button>
        <button className="cancel-button"> Cancel Order</button>
      </div>
    </div>
  );
};

export default SummaryCard;
