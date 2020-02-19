
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var res=[];
  if (!matrix) {return [];}
  let i=0;
  while(i<matrix.length){
    for (let j=0; j<matrix[i].length; j++){
      res.push(matrix[i][j]);
    } 
    if (i<matrix.length-1) {
      i++;
      for (let j=matrix[i].length-1; j>=0; j--){
        res.push(matrix[i][j]);
      } 
    }
    i++;
  }
  return res;
}
