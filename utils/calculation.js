export const COST_PER_KWH = 0.138;
export const FOORPRINT_PER_KWH = 0.00002532;

const getTotalConsumption = (readings) => {
  return readings.reduce((accur, { _, value }) => accur + value, 0);
};

export const calculateCost = (readings) => {
  return Math.round(getTotalConsumption(readings) * COST_PER_KWH);
};

export const calculateConsumption = (readings) => {
  return Math.round(getTotalConsumption(readings));
};

export const calculateFootprint = (readings) => {
  return (getTotalConsumption(readings) * FOORPRINT_PER_KWH).toFixed(4);
};
