const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array){
  const recordObj = (array.find( listObj => { return listObj.result === 'W'}))

  if (recordObj){
    return recordObj.year
  }

  return undefined
}

superbowlWin(record)

