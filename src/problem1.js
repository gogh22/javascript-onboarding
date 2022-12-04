function problem1(pobi, crong) {
  var answer;
  let pobiBigNumber = 0;
  let crongBigNumber = 0;

  if (pobi[0] > pobi[1] || crong[0] > crong[1] || pobi[0] == pobi[1] || crong[0] == crong[1] || pobi[1] - pobi[0] != 1) {
    answer = -1;
  } else {
    for (let ind = 0; ind < 2; ind++) {
      let pobiNum = String(pobi[ind]);
      let pobiDoubleNum = 1;
      let pobiPlusNum = 0;
      for (let i = 0; i < pobiNum.length; i++) {
        pobiDoubleNum *= parseInt(pobiNum[i]);
        pobiPlusNum += parseInt(pobiNum[i]);
      }
      if (pobiDoubleNum >= pobiPlusNum) {
        if (pobiBigNumber < pobiDoubleNum) {
          pobiBigNumber = pobiDoubleNum;
        }
      } else if (pobiDoubleNum < pobiPlusNum) {
        if (pobiPlusNum > pobiBigNumber) {
          pobiBigNumber = pobiPlusNum;
        }
      }
    }

    //crong
    for (let ind = 0; ind < 2; ind++) {
      let crongNum = String(crong[ind]);
      let crongDoubleNum = 1;
      let crongPlusNum = 0;
      for (let i = 0; i < crongNum.length; i++) {
        crongDoubleNum *= parseInt(crongNum[i]);
        crongPlusNum += parseInt(crongNum[i]);
      }
      if (crongDoubleNum >= crongPlusNum) {
        if (crongBigNumber < crongDoubleNum) {
          crongBigNumber = crongDoubleNum;
        }
      } else if (crongDoubleNum < crongPlusNum) {
        if (crongPlusNum > crongBigNumber) {
          crongBigNumber = crongPlusNum;
        }
      }
    }

    // 최종적으로 누가 더 큰지 비교하는 곳
    if (crongBigNumber > pobiBigNumber) {
      answer = 2;
    } else if (crongBigNumber < pobiBigNumber) {
      answer = 1;
    } else if (crongBigNumber == pobiBigNumber) {
      answer = 0;
    }
  }

  return answer;
}

module.exports = problem1;
