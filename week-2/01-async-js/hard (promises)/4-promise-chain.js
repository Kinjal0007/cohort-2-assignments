/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

async function wait(n) {
    return new Promise((resolve) => {
      setTimeout(resolve, n * 1000);
    });
  }
  async function calculateTime(t1, t2, t3) {
    return new Promise(async (resolve) => {
      let before = new Date().getTime();
      let one = await wait(t1);
      let two = await wait(t2);
      let three = await wait(t3);
      let after = new Date().getTime();
      resolve(after - before);
    });
  }

module.exports = calculateTime;
