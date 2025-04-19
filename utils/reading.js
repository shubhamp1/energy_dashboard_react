export const getReadings = async (length = 1200) => {
  const current = Date.now();
  const hour = 1000 * 60 * 60;

  return [...new Array(length)].map((_, index) => ({
    time: current - index * hour,
    value: Math.random() * 0.7 + 0.4,
  }));
};

export const groupByDay = (readings) => {
  const groupedByDay = readings.reduce((curr, { time, value }) => {
    const readingDate = new Date(time);
    const day = new Date(
      readingDate.getFullYear(),
      readingDate.getMonth(),
      readingDate.getDate()
    ).getTime();

    if (!curr[day]) curr[day] = 0;
    curr[day] += value;
    return curr;
  }, {});

  return Object.entries(groupedByDay).map(([day, value]) => ({
    time: Number(day),
    value,
  }));
};

export const sortByTime = (readings) => {
  return [...readings].sort(
    (readingA, readingB) => readingA.time - readingB.time
  );
};

// new code
export const groupByHour = (readings) => {
  const today = Date.now();
  const oneHour = 24 * 60 * 1000;
  const last24 = readings.filter(({ time }) => time >= today - 24 * oneHour);
  const grouped = last24.reduce((acc, { time, value }) => {
    const date = new Date(time);
    const hour = date.getHours();
    if (!acc[hour]) acc[hour] = 0;
    acc[hour] += value;
    return acc;
  }, {});

  return Object.entries(grouped).map(([hour, value]) => ({
    time: Number(hour),
    value,
  }));
};
