const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        count: 1
      },
    ]
  },
  methods: {
    /**
     * @Description：由于html页面价格需要使用过滤器filters，此methods中的方法getFinalPrice(price)弃用
     * @UseFun：
              toFixed(2)    保留2位小数
     */
    // getFinalPrice(price) {
    //   return '¥' + price.toFixed(2)
    // }
    increment(index) {
      this.books[index].count++
    },
    decrement(index) {
      this.books[index].count--
    },
    removeHandle(index) {
      this.books.splice(index, 1)
    }
  },
  // computed: 计算属性()，有缓存
  computed: {
    totalPrice() {
      /**
       * @Description：写法1、普通的for循环
       */
      // let totalPrice = 0
      // for (let i = 0; i < this.books.length; i++) {
      //   totalPrice += this.books[i].price * this.books[i].count
      // }
      // return totalPrice

      /**
       * @Description：写法2、for (let i in this.books)
       */
      // let totalPrice = 0
      // for (let i in this.books) {
      //   const book = this.books[i]
      //   totalPrice += book.price * book.count
      // }
      //
      // return totalPrice

      /**
       * @Description：写法3、for (let i of this.books)
       */
      // let totalPrice = 0
      // for (let item of this.books) {
      //   totalPrice += item.price * item.count
      // }
      // return totalPrice

      /**
       * @Description：写法4、高阶函数reduce
       * @Use高阶函数：
                3、数组Arr.reduce(第一个参数是回调函数,第二个参数一般初始值为0)
                    reduce的第一个参数回调函数(preValue, n){
                      return 的结果赋给preValue
                    }
                    作用：对数组中所有的内容进行汇总
       */
      return this.books.reduce(function (preValue, book) {
        return preValue + book.price * book.count
      }, 0)
    }
  },
  /**
   * @Description：过滤器
   * CoseSteps：
              html页面价格使用  {{变量价格 | 过滤器filters的方法showPrice(变量价格)}}
   */
  filters: {
    showPrice(price) {
      return '¥' + price.toFixed(2)
    }
  }
})





