// add solution here
function theBeatlesPlay (musicians, instruments){
  const array = [];
    for (var i =0; i<5; i++) {
      array.push(  musicians[i] + " plays " + instruments[i] )
    }
  return array
}
