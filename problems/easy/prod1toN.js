// Write a program that takes an argument n and returns the product of 1,…,n.
export const prod1toN = (n) => {
    // Your code here...
    let produce = 1;
    for (let i = 0; i < n; i++) {
        produce *= i + 1;
    }
    return produce;
};
const tests = [
    [prod1toN, [5], 120],
    [prod1toN, [9], 362880],
    [prod1toN, [13], 6227020800],
    [prod1toN, [1], 1],
];

export default tests;
