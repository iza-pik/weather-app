import { zeroPadding } from "./zeroPadding";

export const getHoursMinutes = ms => {
  const date = new Date(ms);
  return `${zeroPadding(date.getHours())}:${zeroPadding(date.getMinutes())}`;
};
