// add solution here
function theBeatlesPlay (musicians, instruments){
  const array = [];
    for (var i =0; i<4; i++) {
      array.push(  musicians[i] + " plays " + instruments[i] )
    }
  return array
}

function johnLennonFacts(facts) {
//                       ^^^^^
// your function has to accept the argument here

  var data = facts.slice(); // make a copy of the passed array

  var i = 0;

  while (i < data.length) { // fix misspelled length

    data[i] += '!!!'; // use += to add the !!!

    i++; // increment after adding the !!!
  }

  return data
}
