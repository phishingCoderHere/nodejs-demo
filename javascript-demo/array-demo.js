const arr = [1, 2, 34, 5]

const arr2 = [...arr]


console.log('arr', arr);
console.log('arr2', arr2);
arr2[0] = 222
console.log('arr', arr);
console.log('arr2', arr2);
