import { bitwiseComplement, findComplement, bitwiseComplementUseReduce, flipBitByBit  } from './number-complement';

describe('bitwise complement test case', () => {
  it('flip bit by bit', () => {
    expect(flipBitByBit (5)).toEqual(2);
    expect(flipBitByBit (1)).toEqual(0);
  });

  it('use toString and parseInt', () => {
    expect(bitwiseComplement(5)).toEqual(2);
    expect(bitwiseComplement(1)).toEqual(0);

    expect(findComplement(5)).toEqual(2);
    expect(findComplement(1)).toEqual(0);
  });

  it('use reduce', () => {
    expect(bitwiseComplementUseReduce(5)).toEqual(2);
    expect(bitwiseComplementUseReduce(1)).toEqual(0);
  });
  
});
