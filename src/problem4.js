function problem4(word) {
  var answer = '';
  let alphabetObject = {};
  let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowerCase = 'abcdefghijklmnopqrstuvwxyz';

  for (let ind = 0; ind < upperCase.length; ind++) {
    alphabetObject[upperCase[ind]] = upperCase[upperCase.length-(ind+1)];
    alphabetObject[lowerCase[ind]] = lowerCase[lowerCase.length-(ind+1)];
  }
  for (let wordInd = 0; wordInd < word.length; wordInd++) {
    if (word[wordInd] == ' ') {
      answer += ' ';
    } else {
      answer = answer + alphabetObject[word[wordInd]];
    }
  }
  return answer;
}

module.exports = problem4;
