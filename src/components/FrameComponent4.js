import NationalAssociations from "./NationalAssociations";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`frame-parent ${className}`}>
      <div className="section-title-wrapper">
        <h1 className="section-title1">View Detail Reports</h1>
      </div>
      <div className="membership-organizatios-parent">
        <div className="membership-organizatios">
          <div className="membership-icons">
            <button className="icon1">
              <div className="rectangle-parent">
                <div className="frame-child" />
                <img className="icon2" alt="" src="/icon.svg" />
              </div>
            </button>
          </div>
          <div className="equity-curves-parent">
            <h1 className="equity-curves">Equity Curves</h1>
            <div className="membership-details">
              <div className="easy-on-the">
                Easy on the eyes equity curves to track the growth of account
                over time
              </div>
            </div>
          </div>
        </div>
        <NationalAssociations
          icon="/icon-1.svg"
          statistics="Statistics"
          rOINumberOfTradesDrawdown="ROI, Number of Trades, Drawdowns. All you need to know."
        />
        <div className="associations">
          <NationalAssociations
            icon="/icon-2.svg"
            statistics="Automation"
            rOINumberOfTradesDrawdown="Connect your broker and automate "
            propWidth="unset"
            propPadding="24px 17px"
            propAlignSelf="stretch"
            propPadding1="0px 7px"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
