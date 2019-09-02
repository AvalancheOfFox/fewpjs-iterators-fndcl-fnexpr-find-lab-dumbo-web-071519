const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" }
]

function superbowlWin(array){
  const recordObj = (array.find( listObj => { return listObj.result === 'W'}))

  if (recordObj){
    return recordObj.year
  }

  return undefined
}

superbowlWin(record)

