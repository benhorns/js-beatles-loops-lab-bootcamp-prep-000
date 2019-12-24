// add solution here
function theBeatlesPlay (musicians, instruments){
  const array = [];
    for (var i =0; i<4; i++) {
      array.push(  musicians[i] + " plays " + instruments[i] )
    }
  return array
}

function johnLennonFacts (facts){
let countdown = 4
  while(facts > 0){
    facts.push ("!!!")
  }
return facts
}
