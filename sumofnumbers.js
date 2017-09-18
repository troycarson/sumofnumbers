const test = [1, 2, 3, 4, 5];

function sumFor(test){
  let value = 0;
  for (num of test){
    value += num;
  }
  return value;
}

function sumWhile(test){
  let value = 0;
  let counter = 0;
  while (counter < test.length + 1){
    value += counter;
    counter ++;
  }
  return value;
}

function sumRecursion(test) {
  if (test.length == 0) {
    return 0;
  }
  return test[0] + sumRecursion(test.slice(1, test.length));
}

function sumTheSimpleWay(test){
  return _.reduce(test, function (memo, num) { return memo + num; }, 0);
}

console.log(sumFor(test));
console.log(sumWhile(test));
console.log(sumRecursion(test));
console.log(sumTheSimpleWay(test));