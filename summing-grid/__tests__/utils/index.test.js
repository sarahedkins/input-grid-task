import {
  getLetterFromLength,
  getDotPlacementFromLength,
  convertNumTo3DigitRepresentation,
  getSum,
} from '../../src/utils';


describe('getLetterFromLength', () => {
  it('should return a letter or falsey', () => {
    expect(getLetterFromLength(1)).toBeFalsy();
    expect(getLetterFromLength(4)).toBe("K");
    expect(getLetterFromLength(6)).toBe("K");
    expect(getLetterFromLength(7)).toBe("M");
    expect(getLetterFromLength(9)).toBe("M");
    expect(getLetterFromLength(10)).toBe("T");
    expect(getLetterFromLength(12)).toBe("T");
  });
})

describe('getDotPlacementFromLength', () => {
  it('should return 1 or 2 or undefined', () => {
    expect(getDotPlacementFromLength(350)).toBeFalsy();
    expect(getDotPlacementFromLength(7)).toBe(1);
    expect(getDotPlacementFromLength(11)).toBe(2);
  });
})

describe('convertNumTo3DigitRepresentation', () => {
  it('should return num if smaller than length 4', () => {
    expect(convertNumTo3DigitRepresentation(234)).toBe(234);
  });
  it('should return num if not in letter range', () => {
    expect(convertNumTo3DigitRepresentation(10000000000000)).toBe(10000000000000);
  });
  it('should return without a dot, if not in dot range', () => {
    expect(convertNumTo3DigitRepresentation(123400)).toBe('123K');
  });
  it('should return with dot and number', () => {
    expect(convertNumTo3DigitRepresentation(12340)).toBe('12.3K');
    expect(convertNumTo3DigitRepresentation(1234)).toBe('1.23K');
  });
})

describe('getSum', () => {
  it('should return the sum to display', () => {
    expect(getSum('500', '650', '1')).toBe('1.15K');
  });
})
