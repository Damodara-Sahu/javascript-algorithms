import { firstUniqueChar, countSymbols } from './387-first-unique-character-in-string';

describe('firstUniqueChar', () => {

  it('find unique string', ()=> {
    expect(firstUniqueChar('leetcode')).toEqual(0);
    expect(firstUniqueChar('loveleetcode')).toEqual(2);

  });

  it('there is no unique string', ()=> {
    expect(firstUniqueChar('loleeoe')).toEqual(-1);
  });

});

describe('countSymbols', () => {
  it('unique string', ()=> {
    expect(countSymbols('adam')).toEqual(['a', 'd', 'm']);
    expect(countSymbols('mama')).toEqual(['m', 'a']);
    expect(countSymbols('aaaaaaaaaa')).toEqual(['a']);
  });
});
