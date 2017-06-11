function nextBigger(n){
  var arr = n.toString().split("");
  for(var i = arr.length - 1; i >= 0; i--){
    var start = arr.slice(0, i);
    var originalEnd = arr.slice(i, arr.length)
    var end = arr.slice(i, arr.length).sort().reverse();
    var newArr = [start, end];
    if(Number(newArr.join("").split(",").join("")) > n){
      var newEnd = end.reverse();
      for(var j = 0; j < newEnd.length; j++){
        if(newEnd[j] > originalEnd[0]){
          var solutionEnd = [];
          solutionEnd.push([newEnd[j]]);
          newEnd.splice(newEnd.indexOf(newEnd[j]), 1)
          solutionEnd.push(newEnd);
          return Number(start.join("")  + solutionEnd.join("").split(",").join(""));
        }
      }
    }
  }
  return -1;
}
