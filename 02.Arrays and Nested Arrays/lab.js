//1. Even Position Element

function evenElements(input) {

      let output = '';

      for (let i = 0; i < input.length; i++) {

            if (i % 2 == 0) {
                  output += input[i];
                  output += ' ';
            }
      }

      console.log(output);
}

// evenElements(['20', '30', '40', '50', '60']);
// evenElements(['5', '10']);


//2. Last K Numbers Sequence

function lastKNumbers(n, k) {

      let result = [1];

      for (let i = 1; i < n; i++) {

            result[i] = sumLastK(result, k);
      }

      function sumLastK(array = result, k) {

            k = array.length > k ? k : array.length;

            let sum = 0;

            for (let i = 1; i <= k; i++) {

                  sum += array[array.length - i];

            }
            return sum;
      }
      return result;
}

// console.log(lastKNumbers(6, 3));
// console.log(lastKNumbers(8, 2));


//3. Sum First Last

function sumFirstLast(input) {

      let sum;

      sum = Number(input.shift());
      sum += Number(input.pop());

      console.log(sum);

}

// sumFirstLast(['20', '30', '40']);
// sumFirstLast(['5', '10']);


//4. Negative / Positive Numbers

function negativePositiveNumbers(input) {

      let output = [];

      for (let i = 0; i < input.length; i++) {

            let currnet = input[i];

            if (currnet < 0) {
                  output.unshift(currnet);
            } else {
                  output.push(currnet);
            }
      }

      console.log(output.join('\n'));
}

// negativePositiveNumbers([7, -2, 8, 9]);
// negativePositiveNumbers([3, -2, 0, -1]);


//5. Smallest Two Numbers

function smallestTwoNumbers(input) {

      input.sort((a, b) => a - b);

      console.log(input[0] + ' ' + input[1]);
}

// smallestTwoNumbers([30, 15, 50, 5]);
// smallestTwoNumbers([3, 0, 10, 4, 7, 3]);


//6. Bigger Half

function biggerHalf(input) {

      input.sort((a, b) => a - b);

      let length;

      if (input.length % 2 == 0) {
            length = input.length / 2;
      } else {
            length = input.length / 2 + 1;
      }

      length = parseInt(length);

      let output = [];

      for (let i = 0; i < length; i++) {
            output[i] = input.pop(i);
      }

      return output.sort((a, b) => a - b);
}

// biggerHalf([4, 7, 2, 5]);
// biggerHalf([3, 19, 14, 7, 2, 19, 6]);


//7. Piece of Pie

function pieceOfPie(pie, flavor1, flavor2) {

      let start = pie.indexOf(flavor1);
      let end = pie.indexOf(flavor2) + 1;

      let output = pie.slice(start, end);

      return output;
}

// pieceOfPie(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'], 'Key Lime Pie', 'Lemon Meringue Pie');
// pieceOfPie(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie');


//8. Process Odd Positions

function oddPositions(input) {

      let output = [];

      for (let i = 1; i < input.length; i += 2) {
            output.push(input[i] * 2);
      }

      console.log(output.reverse().join(' '));
}

// oddPositions([10, 15, 20, 25]);
// oddPositions([3, 0, 10, 4, 7, 3]);


//9. Biggest Element

function biggestElement(input) {

      let max = Number.MIN_VALUE;

      for (const row of input) {
            for (const element of row) {
                  if (element > max) {
                        max = element;
                  }
            }

      }
      return max;
}

// biggestElement([[20, 50, 10], [8, 33, 145]]);


//10.  Diagonal Sums

function diagonalSums(input) {

      let firstSum = 0;
      let secondSum = 0;

      for (let i = 0; i < input.length; i++) {
            firstSum += input[i][i];
            secondSum += input[input.length - 1 - i][i];
      }
      console.log(firstSum + ' ' + secondSum);
}

// diagonalSums([[20, 40], [10, 60]]);
// diagonalSums([[3, 5, 17],  [-1, 7, 14], [1, -8, 89]]);


//11.  Equal Neighbors

function equalNeighbors(matrix) {

      let pairCounter = 0;

      for (let row = 0; row < matrix.length - 1; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                  if (matrix[row][col] == matrix[row + 1][col]) {
                        pairCounter++;
                  }
                  if (matrix[row][col] == matrix[row][col + 1]) {
                        pairCounter++;
                  }
                  if (row == matrix.length - 2 && matrix[row + 1][col] == matrix[row + 1][col + 1]) {
                        pairCounter++;
                  }
            }
      }

      return pairCounter;
}

// 0,0   0,1   0,2   0,3   0,4
// 1,0   1,1   1,2   1,3   1,4

// equalNeighbors([['2', '3', '4', '7', '0'],
//                 ['4', '0', '5', '3', '4'],
//                 ['2', '3', '5', '4', '2'],
//                 ['9', '8', '7', '5', '4']]);

// equalNeighbors([['test', 'yes', 'yo', 'ho'],
//                 ['well', 'done', 'yo', '6'],
//                 ['not', 'done', 'yet', '5']]);

// equalNeighbors([[2, 2, 5, 7, 4],
//                 [4, 0, 5, 3, 4],
//                 [2, 5, 5, 4, 2]]);

