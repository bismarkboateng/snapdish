export const getVariantStyles = (variant: string) => {
    switch (variant) {
      case "compact":
        return "p-4";
      case "full":
        return "p-12 min-h-[400px] flex items-center justify-center";
      default:
        return "p-8";
    }
  };