import moment from "moment";

const useDateFormat = (date: string) => {
  return moment(date).subtract(10, "days").calendar();
};

export default useDateFormat;
