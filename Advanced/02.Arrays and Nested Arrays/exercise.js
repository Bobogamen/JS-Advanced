//1. Print an Array with a Given Delimiter

function printWithDelimiter(input, delimiter) {
      console.log(input.join(delimiter));
}

// printWithDelimiter(['One', 'Two', 'Three', 'Four', 'Five'], '-');
// printWithDelimiter(['How about no?', 'I','will', 'not', 'do', 'it!'], '_');


//2. Print Every N-th Element from an Array 

function printElement(input, step) {

      let output = [];

      for (let i = 0; i < input.length; i += step) {
            const element = input[i];

            output.push(element);
      }

      return output;
}

// printElement(['5', '20', '31', '4', '20'], 2);
// printElement(['dsa','asd', 'test', 'tset'], 2);
// printElement(['1', '2','3', '4', '5'], 6);

//3. Add and Remove Elements

function addRemove(input) {

      let array = [];
      let counter = 0;

      for (let command of input) {

            counter++;
            if (command == 'add') {
                  array.push(counter);
            } else if (command == 'remove') {
                  array.pop();
            }
      }

      if (array.length == 0) {
            console.log('Empty')
      } else {
            for (const element of array) {
                  console.log(element);
            }
      }
}

// addRemove(['add', 'add', 'add', 'add']);
// addRemove(['add', 'add', 'remove', 'add', 'add']);


//4. Rotate Array

function rotateArray(array, rotationTimes) {
      for (let i = 0; i < rotationTimes; i++) {
            array.unshift(array.pop());
      }
      console.log(array.join(' '));
}

// rotateArray(['1','2','3','4'], 2);
// rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);


//5. Extract Increasing Subsequence from Array

const solve = arr => arr.filter((e, index) => e >= Math.max(...arr.slice(0, index)));

// console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));

// extractIncSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// extractIncSubsequence([1, 2, 3, 4]);
// extractIncSubsequence([20, 3, 2, 15, 6, 1]);


//6. List of Names

function listNames(input) {

      input.sort((a, b) => a.localeCompare(b));

      for (let i = 1; i <= input.length; i++) {
            console.log(i + '.' + input[i - 1]);
      }
}

// listNames(["John", "Bob", "Christina", "Ema"]);


//7. Sorting numbers

function sortingNums(nums) {
      let output = [];

      nums.sort((a, b) => a - b);

      while (nums.length > 0) {
            output.push(nums.shift());
            output.push(nums.pop());
      }
      return output;
}

// sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);


//8. Sort an Array by 2 Criteria

function sortBy2Criteria(arr) {

      arr.sort((x, y) => x.length - y.length).sort((a, b) => {

            if (a.length === b.length) {
                  return a.localeCompare(b);
            }
      });

      for (const element of arr) {
            console.log(element);
      }
}

// sortBy2Criteria(['alpha','beta','gamma']);
// sortBy2Criteria(['Isacc', 'Theodor','Jack', 'Harrison', 'George']);
// sortBy2Criteria(['test', 'Deny','omen', 'Default']);


//9. Magic Matrices

function magicMatrices(matrix) {
      let sumRow = matrix[0].reduce((a, v) => a + v, 0);

      for (const row of matrix) {
            const currentRowSum = row.reduce((a, v) => a + v, 0);

            if (currentRowSum != sumRow) {
                  return false;
            }
      }

      let col = 0;
      let sumCol = 0;

      for (let i = 0; i < matrix.length; i++) {
            for (let i = 0; i < matrix.length; i++) {
                  sumCol += matrix[i][col];
            }

            if (sumCol != sumRow) {
                  return false;
            }

            col++;
            sumCol = 0;
      }
      return true;
}

// magicMatrices([[4, 5, 6],
//                [6, 5, 4],
//                [5, 5, 5]]);

// magicMatrices([[[11, 32, 45], 
//                 [21, 0, 1], 
//                 [21, 1, 1]]]);

// magicMatrices([[[1, 0, 0], 
//                 [0, 0, 1], 
//                 [0, 1, 0]]]);


//10 Tic-Tac-Toe

function ticTacToe(moves) {
      let table = [[false, false, false],
                   [false, false, false],
                   [false, false, false]];

      let swap = false;

      for (let i = 0; i < moves.length; i++) {
            if (i > 4) {
                  switch (winnerChecker(table)) {
                        case 0: console.log("Player X wins!");
                              printTable(table);
                              return;
                        case 1: console.log("Player O wins!");
                              printTable(table);
                              return;
                  }
            }

            let row = Number(moves[i].split(' ')[0]);
            let col = Number(moves[i].split(' ')[1]);

            if (swap) {
                  if (table[row][col] == false && i % 2 != 0) {
                        table[row][col] = 'X';
                  } else if (table[row][col] == false && i % 2 == 0) {
                        table[row][col] = 'O';
                  } else {
                        console.log("This place is already taken. Please choose another!");
                        swap = false;
                  }
            } else {
                  if (table[row][col] == false && i % 2 == 0) {
                        table[row][col] = 'X';
                  } else if (table[row][col] == false && i % 2 != 0) {
                        table[row][col] = 'O';
                  } else {
                        console.log("This place is already taken. Please choose another!");
                        swap = true;
                  }
            }

            if (table.every(x => x.every(y => y != false))) {
                  console.log("The game ended! Nobody wins :(");
                        printTable(table);
                        return;
            }
      }

      function winnerChecker(table) {

            let firstWin = 'XXX';
            let secondWin = 'OOO';
      
            let row1 = table[0].join('');
            let row2 = table[1].join('');
            let row3 = table[2].join('');
            let col1 = table[0][0] + table[1][0] + table[2][0];
            let col2 = table[0][1] + table[1][1] + table[2][1];
            let col3 = table[0][2] + table[1][2] + table[2][2];
            let diag1 = table[0][0] + table[1][1] + table[2][2];
            let diag2 = table[2][0] + table[1][1] + table[0][2];
      
            if (row1 == firstWin) {
                  return 0;
            } else if (row1 == secondWin) {
                  return 1;
            } else if (row2 == firstWin) {
                  return 0;
            } else if (row2 == secondWin) {
                  return 1;
            } else if (row3 == firstWin) {
                  return 0;
            } else if (row3 == secondWin) {
                  return 1;
            } else if (col1 == firstWin) {
                  return 0;
            } else if (col1 == secondWin) {
                  return 1;
            } else if (col2 == firstWin) {
                  return 0;
            } else if (col2 == secondWin) {
                  return 1;
            } else if (col3 == firstWin) {
                  return 0;
            } else if (col3 == secondWin) {
                  return 1;
            } else if (diag1 == firstWin) {
                  return 0;
            } else if (diag1 == secondWin) {
                  return 1;
            } else if (diag2 == firstWin) {
                  return 0;
            } else if (diag2 == secondWin) {
                  return 1;
            }
            return true;
      }

      function printTable(table) {
            for (const row of table) {
                  console.log(row.join('\t'));
            }
      }
}

// ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
// ticTacToe(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
// ticTacToe(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);
ticTacToe(["0 1", "0 0", "0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);


