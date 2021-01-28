/**
 * @Description： （1）取出所有小于100的数字
                  （2）需求:将所有小于100的数字进行转化: 全部*2
                  （3）需求:将所有new2Nums数字相加,得到最终的结果
 * @Use高阶函数：
            1、filter
              其回调函数有一个要求: 必须返回一个boolean值
              true: 当返回true时, 函数内部会自动将这次回调的n加入到新的数组中
              false: 当返回false时, 函数内部会过滤掉这次的n
            2、map
            3、reduce
              作用：对数组中所有的内容进行汇总
 */
const oldNumArr = [10, 20, 111, 222, 444, 40, 50]

/**---------------------------- 一、演示过程 ----------------------------*/
// 10, 20, 40, 50
let newNums = oldNumArr.filter(function (n) {
  // （1）需求: 取出所有小于100的数字
  return n < 100
})
// console.log(newNums);

// 20, 40, 80, 100
let new2Nums = newNums.map(function (n) { // 20
  // （2）需求:将所有小于100的数字进行转化: 全部*2
  return n * 2
})
console.log(new2Nums);

let newNumArr1 = new2Nums.reduce(function (preValue, n) {
  // （3）需求:将所有new2Nums数字相加,得到最终的结果
  return preValue + n
}, 0)
console.log("一、演示过程结果--"+newNumArr1);


// let newNumArr = oldNumArr.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
// console.log(newNumArr);
/**---------------------------- 二、完整代码 ----------------------------*/
let newNumArr2 = oldNumArr.filter(function (n) {
  // （1）需求: 取出所有小于100的数字
  return n < 100
}).map(function (n) {
  // （2）需求:将所有小于100的数字进行转化: 全部*2
  return n * 2
}).reduce(function (prevValue, n) {
  // （3）需求:将所有new2Nums数字相加,得到最终的结果
  return prevValue + n
}, 0)
console.log("二、完整代码结果--"+newNumArr2);



// 第一次: preValue 0 n 20
// 第二次: preValue 20 n 40
// 第二次: preValue 60 n 80
// 第二次: preValue 140 n 100
// 240