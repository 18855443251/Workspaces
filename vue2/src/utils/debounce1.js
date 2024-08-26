export function debounce(fn, delay = 2000) {
  let timer = null;
  return function (...params) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, params);
    }, delay);
  };
}
// 节流在单位时间（3s）内随便触发多少次，只要过了单位时间（3s）就会执行一次。
export function throttle(fn, wait = 3000) {
  let previous = 0;
  // 使用闭包返回一个函数并且用到闭包函数外面的变量previous
  return function (...params) {
    let now = new Date().getTime();
    if (now - previous > wait) {
      fn.apply(this, params);
      previous = now;
    }
  };
}
