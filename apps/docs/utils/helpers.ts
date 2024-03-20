export const findMaxArray = (arr: Array<number>) =>
  arr.reduce((a, b) => Math.max(a, b), -Infinity);
export const findMinArray = (arr: Array<number>) =>
  arr.reduce((a, b) => Math.min(a, b), Infinity);

export const selectRange = function (
  index: number,
  selectedItemArray: number[]
) {
  if (selectedItemArray.length === 0) {
    return selectedItemArray.push(index);
  }

  const max = Math.max(...selectedItemArray);
  const min = Math.min(...selectedItemArray);

  if (index === min) {
    selectedItemArray.length = 1;
    selectedItemArray[0] = index;
  } else if (index < min) {
    selectedItemArray.length = 2;
    selectedItemArray[0] = index;
    selectedItemArray[1] = max;
  } else if (index > min && index < max) {
    selectedItemArray.length = 2;
    selectedItemArray[0] = min;
    selectedItemArray[1] = index;
  } else {
    selectedItemArray.length = 2;
    selectedItemArray[0] = max;
    selectedItemArray[1] = index;
  }
};

export const priceFormatter = (price: number | bigint, max?: number) => {
  const priceFormatted = Intl.NumberFormat("en", {
    style: "currency",
    currency: "TND",
    minimumFractionDigits: 0,
  }).format(price);
  if (max && price == max) return priceFormatted + "+";
  return priceFormatted;
};
