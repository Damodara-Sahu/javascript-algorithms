import {
  majorityElement,
  majorityMooreVoting,
  majorityElementSorting,
  majorityElementVariant2
} from './169-majority-element';

describe('majority element ', () => {
  it('empty array', () => {
    expect(majorityElementVariant2([])).toEqual([]);
  });

  it('one element array', () => {
    expect(majorityElementVariant2([1])).toEqual(1);
  });

  it('majority Element', () => {
    expect(majorityElement([3,2,3])).toEqual(3);
    expect(majorityElement([8,8,7,7,7])).toEqual(7);
  });

  it('voting algorithm', () => {
    expect(majorityMooreVoting([3,2,3])).toEqual(3);
    expect(majorityMooreVoting([8,8,7,7,7])).toEqual(7);
  });

  it('majority element by sorting', () => {
    expect(majorityElementSorting([3,2,3])).toEqual(3);
    expect(majorityElementSorting([8,8,7,7,7])).toEqual(7);
  });

  it('majority Element II', () => {
    expect(majorityElementVariant2([3,2,3])).toEqual([3]);
    expect(majorityElementVariant2([1,1,1,3,3,2,2,2])).toEqual([1,2]);
  });
});
