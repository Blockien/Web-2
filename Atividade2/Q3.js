const promise1 = Promise.resolve('Result 1');
const promise2 = Promise.resolve('Result 2');
const promise3 = Promise.resolve('Result 3');

const results = await Promise.all([promise1, promise2, promise3]);

console.log(results); 
