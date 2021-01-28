// （1）需求: 取出所有小于100的数字
let newNums = []
for (let n of nums) {
  if (n < 100) {
    newNums.push(n)
  }
}

// （2）需求:将所有小于100的数字进行转化: 全部*2
let new2Nums = []
for (let n of newNums) {
  new2Nums.push(n * 2)
}
console.log(new2Nums);


// （3）需求:将所有new2Nums数字相加,得到最终的结果
let total = 0
for (let n of new2Nums) {
  total += n
}

console.log(total);