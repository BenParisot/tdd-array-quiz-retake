const bigNumber = require('../lib/index');

describe('bigNumber function', () => {
  it('filters out numbers larger than 5 and returns them in a string', () => {
    const nums = [1, 3, 5, 7, 2];
    const expected = ['Wow, 7 is so big!'];
    expect(bigNumber(nums)).toEqual(expected);
  });
});
