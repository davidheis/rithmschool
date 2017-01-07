
// to show you how stupid it is to buy a lottery ticket, just try 
// and hit this jackpot, play as much as you want. This is 1 in 10 000 you could change it to 
// reflect a jackpot which might be something like 1 in 14 000 000
// :)

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

function multipleLetterCount(str){
	var finalObj = {};
	for (var i = 0; i < str.length; i++) {
		if(!str[i] in finalObj) {
			finalObj[str[i]] = 1;
		} else{
			finalObj[str[i]]++;
		}
	}
	console.log(finalObj);
}

function arrayManipulation(arr, command, location, value){
	if (command === 'remove') {
		if (location === 'end') {
			return arr.pop()
		} 
		return arr.shift()
	} else if(command === 'add'){
		if (location === 'beginning') {
			 arr.unshift(value)
			 return arr
		} 
		arr.push(value)
		return arr
	}
}

function isPalindrome(str){
	str = str.replace(/ /g, '')
	for (var i = 0; i < str.length/2; i++) {
		if (str[i].toLowerCase() !== str[str.length-1-i].toLowerCase()) {
			return false
		}
	}
	return true
}

// Rock paper scissors game
function RPS(){
	var userChoice = prompt('Choose rock, paper or scissors').toLowerCase()
	var answers = ['rock', 'paper', 'scissor']

	function determineComputer(num){
		if(num <= .33){
			return 'rock'
		}else if(num <= .66){
			return 'paper'
		}
		return 'scissor'
	}

	var computerChoice = determineComputer(Math.random())

	if(!userChoice || answers.indexOf(userChoice) === -1){
		return 'Please select a valid option.'
	}

	if(userChoice === computerChoice){
		return 'Tie!'
	}

	if(userChoice === 'rock' && computerChoice === 'paper'){
		return 'You lose, computer picked ' + computerChoice
	}

	if(userChoice === 'paper' && computerChoice === 'scissor'){
		return 'You lose, computer picked ' + computerChoice
	}

	if(userChoice === 'scissor' && computerChoice === 'rock'){
		return 'You lose, computer picked ' + computerChoice
	}
	return 'You win! Computer picked ' + computerChoice
}

function displayEvenNumbers(){
    var numbers = [1,2,3,4,5,6,7,8]
    var evenNumbers = []
    for(var i=0; i<numbers.length; i++){
        if(numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i])
        } 
    }
    return evenNumbers;
}
displayEvenNumbers()

var programmingLanguages = {
    java: {
        yearCreated: 1995,
        creator: "James Gosling"
    },
    javaScript: {
        yearCreated: 1995,
        creator: "Brendan Eich"
    }
}
var instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};

function addProgrammingLanguage(nameOfLanguage, yearLanguageCreated, creatorOfLanguage){
    // how can we access the programming languages object?
    // We can't use dot notation, because we don't know the name of
    // the key until the function is called.
    // Instead we use bracket notation where the key is the
    // nameOfLanguage that is being passed to the function.
    programmingLanguages[nameOfLanguage] = {
        // Creating the object which will be the value of the
        // key.  We can directly assign the yearLanguageCreated
        // and creatorOfLanguage to the appropriate keys here.
        yearCreated: yearLanguageCreated,
        creator: creatorOfLanguage
    }
}

// Usage example: Adding a key of ruby to the programming language object,
// with the value of 1995 for the key "yearCreated" and the value
// "Yukihiro Matsumoto" for creatorOfLanguage
addProgrammingLanguage("ruby", 1995, "Yukihiro Matsumoto");

function displayCities(){
	var cities = instructorData.additionalData.moreDetails.citiesLivedIn
	for (var i = 0; i < cities.length; i++) {
		console.log(cities[i])
	}
}

function displayHometownData(){
	var hometown = instructorData.additionalData.moreDetails.hometown
	for (var key in hometown) {
		console.log(hometown[key])
	}
}

function addDetail(key, value){
	var moreDetails = instructorData.additionalData.moreDetails
	moreDetails[key] = [value]
	return moreDetails
}

function removeDetail(key){
	var moreDetails = instructorData.additionalData.moreDetails
	delete moreDetails[key]
	return moreDetails
}

var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        this.snacks.push(snack);
        return this;
    }
  }
}

//Using a for loop, console.log all of the numbers in the primeNumbers array.
function primeNumbers(){
	var getPrimes = nestedData.innerData.numberData.primeNumbers
	for (var i = 0; i < getPrimes.length; i++) {
		console.log(getPrimes[i])
	}
}

//Using a for loop, console.log all of the even Fibonnaci numbers.
function evenFibonnaci(){
	var getEvensFibonnaci = nestedData.innerData.numberData.fibonnaci
	for (var i = 0; i < getEvensFibonnaci.length; i++) {
		if (getEvensFibonnaci[i] % 2 === 0) {
			console.log(getEvensFibonnaci[i])
		}
	}
}

//Console.log the value "second" inside the order array.
console.log(nestedData.innerData.order[1])

// Invoke the addSnack function and add the snack "chocolate".
nestedData.innerData.addSnack('chocolate')

// Inside of the addSnack function there is a special keyword called this. What does the word this refer to inside the addSnack function?

// Given the following nested object:

var nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
      french: {
          hello: "Bonjour"
      }
    }
  }
}
// Write a function addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value of whatever you'd like.
nestedObject.addSpeaker = function(speakerName){
	this.speakers.push({
		name: speakerName
	})
}
// or 

function addSpeaker(speakerName){
  nestedObject.speakers.push({
    name: speakerName
  })
}

// Write a function addLanguage that adds a language to the languages object. The language object you add should have a key with the name of the language and the value of another object with a key of "hello" and a value of however you spell "hello" in the language you add.
function addLanguage(newLanguage, sayHello){
	nestedObject.data.languages[newLanguage] = {
		hello: sayHello
	}
}
// Write a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). The country you add should be an object with the key as name of the country and the value as an object with the keys of "capital" and "population" and their respective values.
function addCountry (countryName, capital, population){
	nestedObject.data.continents.europe.countries[countryName] = {
		capital: capital,
		population: population
	}
}


















