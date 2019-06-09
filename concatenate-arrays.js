function concat(arrayOne, arrayTwo){
  let concatArray = [];

  for(let i = 0; i < arrayOne.length; i++){
    concatArray.push(arrayOne[i]);
  }
  for(let i = 0; i < arrayTwo.length; i++){
    concatArray.push(arrayTwo[i]);
  }
  return concatArray;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);
