function problem3(number) {
  var answer;
  let check = 0;
  for (let num = 1; num <= number; num++) {
    let changeString = num.toString();
    let threeArray = changeString.match(/3/g);
    let sixArray = changeString.match(/6/g);
    let nineArray = changeString.match(/9/g);

    if (threeArray != null) {
      check += threeArray.length;
    }
    if (sixArray != null) {
      check += sixArray.length;
    }
    if (nineArray != null) {
      check += nineArray.length;
    }
  }
  answer = check;
  return answer;
}
module.exports = problem3;
