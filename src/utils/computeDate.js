const DAYS = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

export const computeDate = (dt, fulldt = false) => {
  if (fulldt) {
    return new Date(dt * 1000).toDateString();
  } else {
    let date = new Date(dt * 1000);
    return {
      date: `${date.getDate()}/${date.getMonth()+1}`,
      day: DAYS[date.getDay()],
    };
  }
};

export const getTime = (dt) => {
  let time = new Date(dt * 1000).getHours();
  return time > 12 ? `${time - 12} PM` : `${time} AM`;
};
