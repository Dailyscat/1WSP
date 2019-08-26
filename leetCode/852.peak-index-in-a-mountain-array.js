/*
 * @lc app=leetcode id=852 lang=javascript
 *
 * [852] Peak Index in a Mountain Array
 */
/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  let max = Math.max(...A);
  return A.indexOf(max);
};

// 바이너리 서치 알고리즘 적용하여 다시 풀어보기

var peakIndexInMountainArray = function(A) {
  function binarySearch(A, i, j) {
    let p = Math.floor((i + j) / 2);

    if (A[p] > A[p - 1] && A[p] > A[p + 1]) {
      return p;
    } else if (A[p] > A[p - 1] && A[p] < A[p + 1]) {
      return binarySearch(A, p, j);
    } else {
      return binarySearch(A, i, p);
    }
  }
  return binarySearch(A, 0, A.length - 1);
};

// 24,26 단락에 return을 안 붙였을 때 결과 값 undefined
// 이유는 재귀를 돌았을 때 함수가 실행되고 나서 결과적으로 22줄의 p 값이 리턴돼도
// 그 리턴 값의 함수는 단순히 실행만 되었기 때문에 실행된 binarySearch를 감싸고 있는 binarySearch는
// 동기적으로 계속 흘러가기 때문에 return 값이 존재하지 않게 됐다.
