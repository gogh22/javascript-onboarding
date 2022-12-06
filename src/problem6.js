function problem6(forms) {
  var answer = [];
  let nickNameObj = {};

  for (form of forms) {
    let emailAdress = form[0];
    let nickName = form[1];

    for (let ind = 0; ind < nickName.length; ind++) {
      sliceName = nickName.substr(ind, ind+2);
      if (sliceName.length === 2) {
        if (sliceName in nickNameObj) {
          nickNameObj[sliceName] += 1;
        } else {
          nickNameObj[sliceName] = 1;
        }
      }
    }
  }

  let pairs = Object.entries(nickNameObj);
  pairs.sort((a, b) => b[1] - a[1]);
  let sortedObj = Object.fromEntries(pairs);
  let maxString = pairs[0][0];

  for (f of forms) {
    let email = f[0];
    let name = f[1];
    if (name.includes(maxString)) {
      answer.push(email);
    }
  }
  return answer.sort();
}

module.exports = problem6;
