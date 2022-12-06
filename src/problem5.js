function problem5(money) {
  var answer = [];

  const coins = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  let numCoins = {};

  for (let i = 0; i < coins.length; i++) {
    let coin = coins[i];

    let times = Math.floor(money/coin);
    numCoins[coin] = times;

    money = money % coin;
  }

for (let numsCoinsKey in numCoins) {
  answer.push(numCoins[numsCoinsKey]);
}
  return answer.reverse();
}

module.exports = problem5;
