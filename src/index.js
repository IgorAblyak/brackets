module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) return false;

  let sumString = [];
  for(let item of bracketsConfig) {
    let subArray = item.join('');
    sumString.push(subArray);
  }

  let refBrackets = sumString.join('');
  let stack = []

  for(let bracket of str) {
    let bracketsIndex = refBrackets.indexOf(bracket)
    if(bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1)
    } else {
      if(stack.pop() !== bracketsIndex) {
        return false;
      }
    }
  }
  return stack.length === 0
}
