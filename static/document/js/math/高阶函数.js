/**
 * @Description：高阶函数filter/map/reduce
 * @Remark：
          filter中的回调函数有一个要求: 必须返回一个boolean值
          true: 当返回true时, 函数内部会自动将这次回调的n加入到新的数组中
          false: 当返回false时, 函数内部会过滤掉这次的n
 */
const nums = [10, 20, 111, 222, 444, 40, 50]

// let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
// console.log(total);

let total = nums.filter(function (n) {
  return n < 100
}).map(function (n) {
  return n * 2
}).reduce(function (prevValue, n) {
  return prevValue + n
}, 0)
console.log(total);

// 1.filter函数的使用
// // 10, 20, 40, 50
// let newNums = nums.filter(function (n) {
//   return n < 100
// })
// // console.log(newNums);
//
// // 2.map函数的使用
// // 20, 40, 80, 100
// let new2Nums = newNums.map(function (n) { // 20
//   return n * 2
// })
// console.log(new2Nums);
//
// // 3.reduce函数的使用
// // reduce作用对数组中所有的内容进行汇总
// let total = new2Nums.reduce(function (preValue, n) {
//   return preValue + n
// }, 0)
// console.log(total);

// 第一次: preValue 0 n 20
// 第二次: preValue 20 n 40
// 第二次: preValue 60 n 80
// 第二次: preValue 140 n 100
// 240