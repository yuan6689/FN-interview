const arr = [1, [2, [3, [4, 5]]], 6];

// 方法一 flat函数

console.log("flat函数", arr.flat(Infinity));

//方法二   正则 (里面的数字会被转化为 String)

console.log("正则", JSON.stringify(arr).replace(/\[|\]/g, "").split(","));

// 方法三 正则改良

console.log(
  "正则改良",
  JSON.parse("[" + JSON.stringify(arr).replace(/\[|\]/g, "") + "]")
);

// 方法四 ES5 flatten

const flatten = function (arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      return res.concat(flatten(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};

console.log("方法四 ES5 flatten", flatten(arr));

// 方法五 ES6 flatten some
const flatten6 = function (arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
};

console.log("ES6 flatten some", flatten6(arr));

// 方法六 ES6 flatten reduce
const flattenReduce = function (arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flattenReduce(cur) : cur);
  }, []);
};
console.log("ES6 flatten reduce", flattenReduce(arr));
