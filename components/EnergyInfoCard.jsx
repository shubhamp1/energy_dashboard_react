import React from "react";

const EnergyInfoCard = ({ label, value, unit }) => {
  return (
    <div className="flex flex-col f-bold  info-card roundedMore shadow-2 bg-super-light-grey">
      <div className="label darkgray">{label}</div>
      <div className="value darkgray">{value}</div>
      <div className="unit darkgray">{unit}</div>
    </div>
  );
};

export default EnergyInfoCard;
