
function bigNumber(nums) {
  const newArray = nums.filter(num => num > 5);
  return newArray.map(num => num = `Wow, ${num} is so big!`);
}

module.exports = bigNumber;
