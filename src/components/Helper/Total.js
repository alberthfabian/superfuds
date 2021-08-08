export const totalValue = price_real => {
  switch (price_real?.length) {
    case 4:
      return `${price_real.substr(0, 1)}.${price_real.substr(price_real.length - 3, 5)}`
    case 5:
      return `${price_real.substr(0, 2)}.${price_real.substr(price_real.length - 3, 5)}`
    case 6:
      return `${price_real.substr(0, 3)}.${price_real.substr(price_real.length - 3, 5)}`
    case 7:
      return `${price_real.substr(0, 1)}.${price_real.substr(1, 3)}.${price_real.substr(price_real.length - 3, 5)}`
    default:
      break;
  };
};