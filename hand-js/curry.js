const currying1 = (fn) => {
  const exec = (sumArgs = []) => {
    if (sumArgs.length >= fn.length) {
      return fn(...sumArgs);
    } else {
      return (...args) => {
        console.log([...args, ...sumArgs]);
        return exec([ ...args, ...sumArgs,]);
      }
    }
  };
  return exec();
};

const currying2 = (fn) =>{
  let judge = (...args) => {
    if(fn.length <= args.length) return fn(...args);
    return (...arg) => judge(...args, ...arg);
  }
  return judge;
}

function sum(a, b, c, d){
  return a + b + c + d;
}

console.log(currying2(sum)(1)(3)(2)(4));