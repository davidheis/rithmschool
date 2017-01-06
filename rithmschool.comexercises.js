
// to show you how stupid it is to buy a lottery ticket, just try 
// and hit this jackpot, play as much as you want. Jackpot is 1 in 14 000 000
// function guess(x){
// 	var limit = 10001
// 	var count = 0
// 	var random = Math.floor(Math.random() * limit)
// 	if (x === random) {
// 		return '1st go!!!'
// 	}
// 	if (x > limit - 1 || x < 0) {
// 		return 'number must be lower than 100, and more than 0'
// 	} else {
// 		while(x !== random){
// 		console.log(random)
// 		random = Math.floor(Math.random() * limit)
// 		count++
// 	}
// 		return 'You got it! ' + x + ' was your number. It took ' + count + ' tries.'

// 	}
// }

function average(arr){
	var sum = 0
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i]
	}
	return sum/arr.length
}

function createStudent(firstName, lastName){
	var studentObj = {
		firstName: firstName,
		lastName: lastName
	}
	return studentObj
}

var tim = createStudent("Tim", "Garcia");
var matt = createStudent("Matt", "Lane");
var elie = createStudent("Elie", "Schoppik");

var students = [tim, matt, elie];

function findStudentByFirstName(name){
	for (var i = 0; i < students.length; i++) {
		if (students[i].firstName === name) {
			return true
		} 
		return false
	}
}

function extractEveryThird(arr){
	var newArr = []
	for (var i = 0; i < arr.length; i++) {
		if ((arr.indexOf(arr[i]) + 1) % 3 === 0) {
			newArr.push(arr[i])
		} 
	}
	return newArr
}

function countEvensAndOdds(arr){
	var oddCount = 0
	var evenCount = 0
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			evenCount++
		}else{
			oddCount++
		}
	}
	var obj = {
		oddCount: oddCount,
		evenCount: evenCount
	}
	return obj

}

function onlyCapitalLetters(str){
	var arr = []
	str = str.split('')
	for (var i = 0; i < str.length; i++) {
		if (str[i] === str[i].toUpperCase()) {
			arr.push(str[i])
		}
	}
	return arr.join('').toString()
}

(function displayFullName(firstName, lastName){
	return firstName + lastName
})()

function createCalculator(){
    return {
        add: function(a,b){
            return a + b;
        },
        subtract: function(a,b){
            return a - b;
        },
        multiply: function(a,b){
            return a * b;
        },
        divide: function(a,b){
            return a / b;
        }
    }
}

function difference(a, b){
	return a - b
}

function product(a, b){
	return a * b
}

function printDay(num){
	var dates = {
		1: 'Sunday',
		2: 'Monday',
		3: 'Tuesday',
		4: 'Wednesday',
		5: 'Thursday',
		6: 'Friday',
		7: 'Saturday'
	}
	return dates[num]
}

function lastElement(arr){
	return arr[arr.length - 1]
}

function numberCompare(num1, num2){
	if (num1>num2) {
		return 'First is greater.'
	} else if(num1<num2){
		return 'Second is greater.'
	}
	return 'Numbers are equal.'
	
}

function singleLetterCount(word, letter){
	var count = 0
	for (var i = 0; i < word.length; i++) {
		if (word[i].toLowerCase() === letter.toLowerCase()) {
			count++
		}
	}
	return count
}





