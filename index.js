// code your solution here

function superbowlWin(record) {

  const res = record.find((year) => year.result === "W")
  if(res){
    return res.year
  }
}
