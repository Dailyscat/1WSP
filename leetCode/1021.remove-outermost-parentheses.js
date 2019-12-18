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
// @lc code=end
