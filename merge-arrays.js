function merge(arrayOne, arrayTwo){
  let mergedArray = [];

  for(let i = 0; i < arrayOne.length; i++){
    mergedArray.push(arrayOne[i]);
  }
  for(let i = 0; i < arrayTwo.length; i++){
    mergedArray.push(arrayTwo[i]);
  }
  return mergedArray.sort();
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
