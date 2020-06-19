/*
写一个RecentCounter类来计算最近的请求。
它只有一个方法：ping(int t)，其中t代表以毫秒为单位的某个时间。
返回从 3000 毫秒前到现在的ping数。
任何处于[t - 3000, t]时间范围之内的ping都将会被计算在内，包括当前（指t时刻）的 ping。
保证每次对 ping 的调用都使用比之前更大的 t 值。
* */

class RecentCounter {
  constructor () {
    this.queue = []
  }

  ping (t) {
    this.queue.push(t)
    while (this.queue[0] < t - 3000) this.queue.shift()
    return this.queue.length
  }
}

const obj = new RecentCounter()
console.log(obj.ping(3000))
