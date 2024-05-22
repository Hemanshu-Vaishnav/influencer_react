import { useMemo } from "react";
import "./NationalAssociations.css";

const NationalAssociations = ({
  className = "",
  icon,
  statistics,
  rOINumberOfTradesDrawdown,
  propWidth,
  propPadding,
  propAlignSelf,
  propPadding1,
}) => {
  const nationalAssociationsStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propPadding, propAlignSelf]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div
      className={`national-associations ${className}`}
      style={nationalAssociationsStyle}
    >
      <div className="icon-wrapper">
        <img className="icon" alt="" src={icon} />
      </div>
      <div className="link-collection">
        <h1 className="statistics">{statistics}</h1>
        <div
          className="roi-number-of-trades-drawdow-wrapper"
          style={frameDivStyle}
        >
          <div className="roi-number-of">{rOINumberOfTradesDrawdown}</div>
        </div>
      </div>
    </div>
  );
};


export default NationalAssociations;
