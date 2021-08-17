import moment from "moment";

const useDateFormat = (date: string) => {
  return moment(date).utc().calendar()
};

export default useDateFormat;
