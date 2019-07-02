function arrayToObj(array) {
   return array.reduce((prevValue, currVal) => {
      prevValue[currVal[0]] = currVal[1];
      return prevValue;
   }, {});
};

module.exports = arrayToObj;
