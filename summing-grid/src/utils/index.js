const DOT_ONE = [4, 7, 10];
const DOT_TWO = [5, 8, 11];

export const getLetterFromLength = (length) => {
  let letter;
  switch (length) {
    case 4:
    case 5:
    case 6: {
      letter = "K";
      break;
    }
    case 7:
    case 8:
    case 9: {
      letter = "M";
      break;
    }
    case 10:
    case 11:
    case 12: {
      letter = "T";
      break;
    }
    default: {
      letter = null;
    }
  }
  return letter;
}

export const getDotPlacementFromLength = (length) => {
  let dot;
  if (DOT_ONE.includes(length)) {
    dot = 1;
  } else if (DOT_TWO.includes(length)) {
    dot = 2;
  }
  return dot;
}

export const convertNumTo3DigitRepresentation = (num) => {
  const numArr = num.toString().split("");
  const length = numArr.length;
  if (length < 4) return num;
  const letter = getLetterFromLength(length);
  const dot = getDotPlacementFromLength(length);
  if (!letter) return num;
  if (!dot) {
    return `${numArr.slice(0, 3).join("")}${letter}`;
  }
  const beforeDot = numArr.slice(0, dot).join("");
  const afterDot = numArr.slice(dot, 3).join("");
  return `${beforeDot}.${afterDot}${letter}`;
}

export const getSum = (...params) => {
  let result = 0;
  params.forEach(param => {
    const number = parseInt(param, 10);
      result += number;
  });
  return convertNumTo3DigitRepresentation(result);
}
