function transporMatriz(A) {

  console.log("Matriz Original:");
  console.log(A);

  const transposta = [];
  for (let i = 0; i < A[0].length; i++) {
      transposta.push([]);
      for (let j = 0; j < A.length; j++) {
          transposta[i].push(A[j][i]);
      }
  }

  console.log("Matriz Transposta:");
  console.log(transposta);
}

const matrizA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

transporMatriz(matrizA);
