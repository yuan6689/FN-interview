const arr = [1, 1, "1", 17, true, true, false, false, "true", "a", {}, {}];

// 方法1 Set to Array

const unique1 = Array.from(new Set(arr));
console.log("方法1 Set to Array", unique1);

// 方法2 slipce 双循环

const unique2 = function (arr) {
  const res = [...arr]; //浅拷贝一下
  for (let i = 0; i < res.length; i++) {
    for (let j = i + 1; j < res.length; j++) {
      if (res[i] === res[j]) {
        res.splice(j, 1);
        j--;
      }
    }
  }
  return res;
};

console.log("方法2 slipce 双循环", unique2(arr));

// 方法3 使用 indexOf
//这里的第n次出现的值的index != 第一次出现的值的index
//indexOf中使用的是 ===
const unique3 = (arr) => {
  const res = arr.filter((item, index, array) => {
    return array.indexOf(item) === index;
  });
  return res;
};

console.log("方法3 使用 indexOf", unique3(arr));

// 方法4 include
const unique4 = (arr) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.includes(arr.at(i)) ? null : res.push(arr.at(i));
  }
  return res;
};

console.log("方法4 includ", unique4(arr));

// 方法5 Map

const unique5 = (arr) => {
  const res = [];
  const myMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!myMap.get(arr[i])) {
      myMap.set(arr[i], true);
      res.push(arr[i]);
    }
  }
  return res;
};

console.log("方法5 Map", unique5(arr));
