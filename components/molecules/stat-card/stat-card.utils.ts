export const getChangeColor = (changeType: string) => {
    switch (changeType) {
      case "positive":
        return "text-[#3ec70b]";
      case "negative":
        return "text-[#e02e2e]";
      default:
        return "text-[#6e6e6e]";
    }
  };