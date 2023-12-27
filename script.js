function makeObjectDeepCopy(obj) {
    let copiedObj = {};
  
    for(let key in obj){
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object') {
          copiedObj[key] = makeObjectDeepCopy(obj[key]);
        } else {
          copiedObj[key] = obj[key];
        }
      }
    }
  
    return copiedObj;
}

function selectFromInterval(numbersArr, firstIntervalValue, secondIntervalValue) {
  let intervalArr = []
  
  const checknumbersArrValidation = Array.isArray(numbersArr) && numbersArr.every((element) => typeof element === 'number');
  const checkIntervalParams = typeof firstIntervalValue === 'number' && typeof secondIntervalValue === 'number';

  if (!checknumbersArrValidation || !checkIntervalParams) {
      throw new Error('Ошибка');
  }
  
  let intervalStart;
  let intervalEnd;

  if (firstIntervalValue > secondIntervalValue){
      intervalStart = secondIntervalValue;
      intervalEnd = firstIntervalValue;
  }else{
      intervalStart = firstIntervalValue;
      intervalEnd = secondIntervalValue;
  }

  intervalArr = numbersArr.filter((element) => element >= intervalStart && element <= intervalEnd);
 
  return intervalArr;
}

const myIterable = {
  from: 1,
  to: 4,

  [Symbol.iterator]: function() {
      if (typeof this.from !== 'number' || typeof this.to !== 'number' || isNaN(this.from) || isNaN(this.to)) {
          throw new Error('Ошибка');
      }

      if (this.from > this.to) {
          throw new Error('Ошибка');
      }

      return {
          item: this.from,
          last: this.to,

          next (){
              if (this.item <= this.last) {
                  return {
                      value: this.item++,
                      done: false
                  }
              } else {
                  return {done: true}
              }
          }
      };
  }
};