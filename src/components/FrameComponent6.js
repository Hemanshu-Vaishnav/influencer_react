import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={`nav-parent ${className}`}>
      <header className="nav">
        <div className="logo">
          <div className="logo-buttons-parent">
            <img
              className="logo-buttons-icon"
              loading="lazy"
              alt=""
              src="/frame@2x.png"
            />
            <div className="divider" />
          </div>
          <h1 className="influencer-trades">
            <p className="influencer">{`Influencer `}</p>
            <p className="trades">Trades</p>
          </h1>
        </div>
        <div className="nav-inner">
          <div className="label-parent">
            <div className="label1">Telegram Channel Performance</div>
            <div className="label2">Contact</div>
          </div>
        </div>
        <div className="auth">
          <div className="auth-buttons">
            <button className="button1">
              <div className="login">Login</div>
            </button>
            <button className="button2">
              <div className="sign-up">Sign up</div>
            </button>
          </div>
        </div>
      </header>
      <div className="hero-section">
        <div className="text-parent">
          <div className="text">
            <h1 className="find-the-best">
              Find the best trading telegram channel
            </h1>
          </div>
          <button className="button3">
            <div className="label3">View More</div>
          </button>
        </div>
        <img
          className="hero-section-child"
          loading="lazy"
          alt=""
          src="/group-238.svg"
        />
      </div>
    </section>
  );
};



export default FrameComponent6;
