function problem2(cryptogram) {
  var answer;
  let stack = [];
  stack.push(cryptogram[0]);

  for (let stringInd = 1; stringInd < cryptogram.length; stringInd++) {
    if (stack[stack.length-1] == cryptogram[stringInd]) {
      stack.pop();
    } else {
      stack.push(cryptogram[stringInd]);
    }
  }
  answer = stack.join("");
  return answer;
}

module.exports = problem2;
