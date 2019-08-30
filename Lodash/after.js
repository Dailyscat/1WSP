/**
 * The opposite of `before`. This method creates a function that invokes
 * `func` once it's called `n` or more times.
 *
 * @since 0.1.0
 * @category Function
 * @param {number} n The number of calls before `func` is invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * const saves = ['profile', 'settings']
 * const done = after(saves.length, () => console.log('done saving!'))
 *
 * forEach(saves, type => asyncSave({ 'type': type, 'complete': done }))
 * // => Logs 'done saving!' after the two async saves have completed.
 */
function after(n, func) {
  if (0 >= n) {
    return func();
  }

  return function() {
    n -= 1;
    if (n === 0) {
      func();
    }
  };
}

function after(n, func) {
  if (typeof func != "function") {
    throw new TypeError("Expected a function");
  }
  n = n || 0;
  return function(...args) {
    if (--n < 1) {
      return func.apply(this, args);
    }
  };
}

// 클로져를 사용하는건 알고 있었는데 if의 조건 자체에서
// --n을 사용해서 라인 하나를 줄였다.
// 또 내 경우에는 함수 호출의 횟수 만을 따졌는데
// 함수에 인자가 들어갈 경우를 생각해서
// rest 파라미터를 사용하여 인수들을 배열로 만들어서 apply를 사용해서
// 호출해준다.
// 재밌당ㅋㅋㅋㅋㅋ
