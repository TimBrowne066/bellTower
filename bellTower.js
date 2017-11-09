class BellTower {
  timeToInt = (time) => {
    let noColon = time.replace(/:/g,'')
    let integer = Number(`${noColon}`)
    return integer;
  }

  numberOfChimes = (time) => {
    if (time == 0) {
      return 0
    } else if (((time/100) % 12) == 0) {
      return 12
    } return (time/100) % 12
  }

  countBells = (startTime, endTime) => {
    let totalChimes = 0
    let startInteger = timeToInt(startTime)
    let endInteger = timeToInt(endTime)

    if(startInteger < endInteger){
      while(startInteger <= endInteger) {
        if (startInteger % 100 == 0)
        totalChimes += numberOfChimes(startInteger);
        startInteger++;
      }
    } else if (startInteger > endInteger) {
      while (startInteger <= 2400) {
        if (startInteger % 100 == 0)
        totalChimes += numberOfChimes(startInteger);
        startInteger++;
      }
      let i = 1;
      while (i <= endInteger) {
        if (i % 100 == 0)
          totalChimes += numberOfChimes(i);
        i++;
      }
    } else {
      totalChimes = 78;
    }
    return totalChimes
  }
}
