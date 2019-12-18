/*
 * @lc app=leetcode id=1021 lang=javascript
 *
 * [1021] Remove Outermost Parentheses
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  let parentCount = 0;
  let result = "";

  for (parentheses of S) {
    if (parentheses === "(") {
      if (parentCount) {
        result += parentheses;
      }
      parentCount++;
    } else {
      parentCount--;
      if (parentCount) {
        result += parentheses;
      }
    }
  }

  return result;
};

// 17과 22에서 left, right를 구분하고
// parentCount가 증가, 감소 되는 부분을 구별하여
// 내부에 있는 괄호만 추가되도록 설정했다.

// @lc code=end
