// use the rest parameter to collect all swaps info
function shuffleIt(arr,...swaps){
  // clone arr to avoid mutation
  const result = arr;
  // use deconstruction to swop the values
  swaps.forEach(([i, j]) => {[result[i], result[j]] = [result[j], result[i]]
  });
  // return the result
  return result;
  
};

//codeWars alternative
// ar shuffleIt=(arr,...ex)=>{
//   for ([a,b] of ex) [arr[a],arr[b]]=[arr[b],arr[a]];
//   return arr;
// }