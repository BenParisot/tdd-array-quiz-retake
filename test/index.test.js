const bigNumber = require('../lib/index');

describe('bigNumber function', () => {
  it('filters out numbers larger than 5 and returns them in a string', () => {
    const nums = [1, 3, 5, 7, 2];
    const expected = ['Wow, 7 is so big!'];
    expect(bigNumber(nums)).toEqual(expected);
  });
  it('tests another array', () => {
    const nums = [3, 5, 10, 7, 1];
    const expected = ['Wow, 10 is so big!', 'Wow, 7 is so big!'];
    expect(bigNumber(nums)).toEqual(expected);
  });
});
