// Exercises
// Given the following array, write a function called printEvens that console.logs all of the even numbers

var nestedArr = [[1,2,3],[4,5,6],[7,8],[9,10,11,12]];

function printEvens(){
	for (var i = 0; i < nestedArr.length; i++) {
		for (var j = 0; j < nestedArr[i].length; j++) {
			if (nestedArr[i][j]%2===0) {
				console.log(nestedArr[i][j])
			}
		}
	}
}

printEvens(); 

// Given the following array, write a function called sumTotal returns the sum of all numbers in the array

var nestedArr = [[[1,2],[3,4]],[[5,6]]];

function sumTotal(){
	var sum = 0
	for (var i = 0; i < nestedArr.length; i++) {
		for (var j = 0; j < nestedArr[i].length; j++) {
			for (var k = 0; k < nestedArr[i][j].length; k++) {
				sum += nestedArr[i][j][k]
			}
		}
	}
	return sum
}

sumTotal(); // 21
// Optional Bonus

// Given the following array, write a function called countVowels, 
//which returns the count of all of the vowels in each string regardless of case. To see if a value is an array, you can not use typeof since that will return 'object', so one way to do this is by using the Array.isArray function.

var arr = []
Array.isArray(arr) // true
Array.isArray('Hello') // false

var nestedArr = ['Elie', ['Matt', ['Tim']],['Colt',['Whisky',['Janey'], 'Tom']], 'Lorien'];

allVowels() // 13

function countVowels(){
	var vowels = 0
	for (var i = 0; i < nestedArr.length; i++) {
		console.log(nestedArr[i] + ' first loop')
		for (var j = 0; j < nestedArr[i].length; j++) {
					console.log(nestedArr[i][j] + ' second loop')
			for (var k = 0; k < nestedArr[i][j].length; k++) {
						console.log(nestedArr[i][j][k] + ' third loop')
				var split = nestedArr[i][j][k].split('')
				// for (var l = 0; l < split.length; l++) {
				// 	if (split[l] == 'i') {
				// 		vowels++
				// 	}
				// }
			}
		}
	}
	return vowels
}

// Write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the right. For the value at the end of the array, rotate should move it back to the beginning.
function rotate(arr, num){
    var amount = num % arr.length;
    for(var i=0; i < amount; i++){
      arr.unshift(arr.pop());
    }
    return arr;
}

rotate([1,2,3], 1) // [3,1,2]
rotate([1,2,3], 2) // [2,3,1]
rotate([1,2,3], 3) // [1,2,3]

// Write a function called makeXOGrid which takes in two parameters, rows and columns, and returns an array of arrays with the number of values in each subarray equal to the columns parameter and the number of subarrays equal to the rows parameter. The values in the sub-arrays should switch between "X" and "O".

makeXOGrid(1,4) 

/*/
[["X","O","X","O"]]
/*/

makeXOGrid(3,2) 

/*/
[["X","O"],["X","O"],["X","O"]]
/*/

makeXOGrid(3,3) 
/*/
[["X","O","X"],["O","X","O"],["X","O","X"]]
/*/

