import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`clients-wrapper ${className}`}>
      <div className="clients">
        <div className="clients1">
          <h1 className="section-title">Top Channels</h1>
          <div className="description">
            We track the most subscribed Telegram Channels
          </div>
        </div>
        <div className="clients-logos">
          <div className="telegram-symbol">
            <img
              className="image-21-icon"
              loading="lazy"
              alt=""
              src="/image-21@2x.png"
            />
            <div className="stock-gainers-115k-container">
              <p className="stock-gainers">Stock Gainers</p>
              <p className="k-subs">115k Subs</p>
            </div>
          </div>
          <div className="telegram-symbol1">
            <img className="image-21-icon1" alt="" src="/image-21-1@2x.png" />
            <div className="bulls-and-bears-container">
              <p className="bulls-and-bears">Bulls and Bears</p>
              <p className="k-subs1">109k Subs</p>
            </div>
          </div>
          <div className="telegram-symbol2">
            <img className="image-21-icon2" alt="" src="/image-21-2@2x.png" />
            <div className="the-original-bull-container">
              <p className="the-original-bull">The Original Bull</p>
              <p className="k-subs2">166k Subs</p>
            </div>
          </div>
          <div className="telegram-symbol3">
            <img className="image-21-icon3" alt="" src="/image-21-3@2x.png" />
            <div className="the-original-bull-container1">
              <p className="the-original-bull1">The Original Bull</p>
              <p className="k-subs3">166k Subs</p>
            </div>
          </div>
          <div className="telegram-symbol4">
            <img className="image-21-icon4" alt="" src="/image-21-4@2x.png" />
            <div className="the-original-bull-container2">
              <p className="the-original-bull2">The Original Bull</p>
              <p className="k-subs4">166k Subs</p>
            </div>
          </div>
          <div className="telegram-symbol5">
            <img className="image-21-icon5" alt="" src="/image-21-2@2x.png" />
            <div className="the-original-bull-container3">
              <p className="the-original-bull3">The Original Bull</p>
              <p className="k-subs5">166k Subs</p>
            </div>
          </div>
          <div className="telegram-symbol6">
            <img className="image-21-icon6" alt="" src="/image-21-3@2x.png" />
            <div className="the-original-bull-container4">
              <p className="the-original-bull4">The Original Bull</p>
              <p className="k-subs6">166k Subs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default FrameComponent5;
