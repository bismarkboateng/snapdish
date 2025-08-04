import { Activity } from "./recent-activity.types";

export const getTypeColor = (type: Activity["type"]) => {
  switch (type) {
    case "donation":
      return "bg-[#009379] text-white";
    case "request":
      return "bg-[#53b6ff] text-white";
    case "fulfilled":
      return "bg-[#3ec70b] text-white";
    case "expired":
      return "bg-[#6e6e6e] text-white";
    default:
      return "bg-[#e5e7eb] text-[#1f1f1f]";
  }
};

export const getTypeLabel = (type: Activity["type"]) => {
  switch (type) {
    case "donation":
      return "Donated";
    case "request":
      return "Requested";
    case "fulfilled":
      return "Fulfilled";
    case "expired":
      return "Expired";
    default:
      return "Activity";
  }
};
