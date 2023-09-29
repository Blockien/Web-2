async function getFirstResolved(promiseArray) {
    return Promise.race(promiseArray);
  }
  