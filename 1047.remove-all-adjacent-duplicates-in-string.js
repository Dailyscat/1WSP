/*
 * @lc app=leetcode id=1047 lang=javascript
 *
 * [1047] Remove All Adjacent Duplicates In String
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  let copy = S.slice();
  let found = false;

  do {
    let transfer = [];
    for (let i = 0; i < copy.length; i++) {
      if (copy[i] === copy[i + 1]) {
        transfer = copy.split("");
        transfer.splice(i, 2);
        copy = transfer.join("");
        found = true;
        break;
      }
      if (copy.length - 1 === i) {
        found = false;
      }
    }

    if (copy === "") found = false;
  } while (found);

  return copy;
};
// @lc code=end
