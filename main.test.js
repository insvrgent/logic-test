// const jest = require('jest');
const {dividedBy, sort, isPalindrome} = require('./main');

test('dividedBy', () => {
    expect(dividedBy(5)).toMatch(/12fish4bash/);
});
test('sort array in ascending order', () => {
    const inputArray = 
    [
        5, 2, 8, 1, 9, 7,
        5, 3, 8, 1, 2, 5,
        3
    ];
    const resArray = 
    [
      1, 1, 2, 2, 3, 3,
      5, 5, 5, 7, 8, 8,
      9
    ];
    expect(sort(inputArray, true)).toStrictEqual(resArray);
});
test('kasur rusak = true', () => {
    expect(isPalindrome("kasur rusak")).toBe(true);
});
test('hahaha = false', () => {
    expect(isPalindrome("hahaha")).toBe(false);
});