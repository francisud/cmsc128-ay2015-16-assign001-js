function numberDelimited(number, singleChar, place){
	//stack for getting each digit of number
	if((!isNumeric(number))){
		alert('invalid input');
		return;
	}
	
	if(number > 1000000){
		alert('invalid input');
		return;
	}
	
	if(place > number.length){
		alert('invalid input');
		return;
	}
	
	var stack = [];
	
	//getting each digit
	while(number > 0){
		var digit = number % 10;
		stack.push(digit);
		number = parseInt(number / 10);
	}
	
	var string = "";
	
	//for creating the string and placing the delimiter
	while(stack.length != 0){
		if(stack.length % place == 0)		//for checking the position for the delimiter
			string = string.concat(singleChar);
		var charGetter = stack.pop();
		string = string.concat(charGetter);		
	}	
	console.log(string);
	return string;
}

function wordsToCurrency(numberWord, currency){
	//splits the string by space
	var splitted = numberWord.split(" ");	
	var stack = [];
	
	if(!(currency == 'JPY' || currency == 'PHP' || currency == 'USD')){
		alert('invalid input');
		return;
	}
		
	//transferring to a linkedlist
	for(var i = splitted.length-1; i > -1 ; i--){
		stack.push(splitted[i]);
	}
	
	var values = {
		'zero': 0,
		'one': 1,
		'two': 2,
		'three': 3,
		'four': 4,
		'five': 5,
		'six': 6,
		'seven': 7,
		'eight': 8,
		'nine': 9,
		'ten': 10,
		'eleven': 11,
		'twelve': 12,
		'thirteen': 13,
		'fourteen': 14,
		'fifteen': 15,
		'sixteen': 16,
		'seventeen': 17,
		'eighteen': 18,
		'nineteen': 19,
		'twenty': 20,
		'thirty': 30,
		'forty': 40,
		'fifty': 50,
		'sixty': 60,
		'seventy': 70,
		'eighty': 80,
		'ninety': 90,
		'hundred': 100,
		'thousand': 1000,
		'million' : 1000000		
	};
	
	var sum = 0;					//final sum of all values
	
	var currentAdding = 0;		//all the current values added together that will still be added to sum
	var currentValue = 0;		//value of keyword from values
	
	var currentWord;				//for getting the word being pop
	
	var fromHundredThousand = false;		//boolean for checking if the number is at the hundred thousands
	var fromHundred = false; 
		
	while(stack.length != 0){
		
		fromHundredThousand = false;
		currentWord = stack.pop();		
		currentValue = values[currentWord];
		
		//for checking if word is in the key-value pair
		//reference: http://stackoverflow.com/questions/1098040/checking-if-a-key-exists-in-a-javascript-object
		if(!(currentWord in values )) {
			alert('invalid input');
			return;
		}
				
		if(currentWord == 'million' || currentWord == 'thousand'){
			
			//for hundred thousands
			if(fromHundred == true && currentWord == 'thousand'){
				sum = sum + currentAdding;
				sum = sum * 1000;
				currentAdding = 0;
				fromHundredThousand = true;
				fromHundred = false;				
			}
			
			//from million and thousands
			if((currentWord == 'million' || currentWord == 'thousand') && fromHundredThousand == false){
				currentAdding = currentAdding * currentValue;
				sum = currentAdding;
				currentAdding = 0;
			}
		}		
		
		//for hundreds
		else if(currentWord == 'hundred'){
			currentAdding = currentAdding * currentValue;
			sum = sum + currentAdding;
			currentAdding = 0;
			fromHundred = true;
		}
		
		//for starting digit of each place
		else{
			currentAdding = currentAdding + currentValue;
			
			if(stack.length == 0)
				sum = sum + currentAdding;			
		}
	}	
	
	//concatenates the currency at the fromt of the string, then concatenate the sum
	sum = currency.concat(sum);
	console.log(sum);
	return sum;
}


function wordsToNum(numberWord){
	
	//splits the string by space
	var splitted = numberWord.split(" ");	
	var stack = [];
		
	//transferring to a linkedlist
	for(var i = splitted.length-1; i > -1 ; i--){
		stack.push(splitted[i]);
	}
	
	var values = {
		'zero': 0,
		'one': 1,
		'two': 2,
		'three': 3,
		'four': 4,
		'five': 5,
		'six': 6,
		'seven': 7,
		'eight': 8,
		'nine': 9,
		'ten': 10,
		'eleven': 11,
		'twelve': 12,
		'thirteen': 13,
		'fourteen': 14,
		'fifteen': 15,
		'sixteen': 16,
		'seventeen': 17,
		'eighteen': 18,
		'nineteen': 19,
		'twenty': 20,
		'thirty': 30,
		'forty': 40,
		'fifty': 50,
		'sixty': 60,
		'seventy': 70,
		'eighty': 80,
		'ninety': 90,
		'hundred': 100,
		'thousand': 1000,
		'million' : 1000000		
	};
	
	var sum = 0;					//final sum of all values
	
	var currentAdding = 0;		//all the current values added together that will still be added to sum
	var currentValue = 0;		//value of keyword from values
	
	var currentWord;				//for getting the word being pop
	
	var fromHundredThousand = false;		//boolean for checking if the number is at the hundred thousands
	var fromHundred = false; 
		
	while(stack.length != 0){
		
		fromHundredThousand = false;
		currentWord = stack.pop();		
		currentValue = values[currentWord];
		
		//for checking if word is in the key-value pair
		//reference: http://stackoverflow.com/questions/1098040/checking-if-a-key-exists-in-a-javascript-object
		if(!(currentWord in values )) {
			alert('invalid input');
			return;
		}
				
		if(currentWord == 'million' || currentWord == 'thousand'){
			
			//for hundred thousands
			if(fromHundred == true && currentWord == 'thousand'){
				sum = sum + currentAdding;
				sum = sum * 1000;
				currentAdding = 0;
				fromHundredThousand = true;
				fromHundred = false;				
			}
			
			//from million and thousands
			if((currentWord == 'million' || currentWord == 'thousand') && fromHundredThousand == false){
				currentAdding = currentAdding * currentValue;
				sum = currentAdding;
				currentAdding = 0;
			}
		}		
		
		//for hundreds
		else if(currentWord == 'hundred'){
			currentAdding = currentAdding * currentValue;
			sum = sum + currentAdding;
			currentAdding = 0;
			fromHundred = true;
		}
		
		//for starting digit of each place
		else{
			currentAdding = currentAdding + currentValue;
			
			if(stack.length == 0)
				sum = sum + currentAdding;			
		}
	}
	
	console.log(sum);
	return sum;
}


function numToWords(number){
	
	if((!isNumeric(number))){
		alert('invalid input');
		return;
	}
	
	if(number > 1000000){
		alert('invalid input');
		return;
	}
		
	//to get each digit in the number, then pushed in the stack to pop in correct order
	var stack = [];
	while(number > 0){
		var digit = number % 10;
		stack.push(digit);
		number = parseInt(number / 10);
	}
		
	var twentyAbove = ['spacer', 'spacer', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
	var lessThanTwenty = ['ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
	var ones = ['zero ', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine '];
	
	var word = "";
	
	//if the user entered 0
	if(number == 0 && stack.length == 0)
		word = 'zero';	
	
	while(stack.length != 0){
			
			//for millions place
			if(stack.length == 7){
				var digit = stack.pop();
				
				if(digit == 1){
					word = word.concat('one million ');
					break;
				}					
			}
			
			if(stack.length == 6 || stack.length == 3 ){
				var digit = stack.pop();
				if(digit != 0){
					word = word.concat(ones[digit]);
					word = word.concat('hundred ');
				}
			}
			
			if(stack.length == 5 || stack.length == 2 ){
				var size = stack.length;
				var digit1 = stack.pop();
				var digit2 = stack.pop();
				
				//twenty and above
				if(digit1 >= 2){
					word = word.concat( twentyAbove[digit1] );
					if(digit2 != 0)
						word = word.concat( ones[digit2] );
				}
				
				//ten to nineteen
				if(digit1 == 1){
					word = word.concat( lessThanTwenty[digit2] );
				}
				
				//checks the second digit
				if(digit1 == 0 && digit2 != 0){
					word = word.concat( ones[digit2] );
				}
					
				if(size == 5)
					word = word.concat('thousand ');				
			}			
			
			//for thousands and ones
			if(stack.length == 4 || stack.length == 1){
				var size = stack.length;
				var digit = stack.pop();
				
				//invalid input, i.e '0400'
				if(stack.length == 4 && digit == 0) {}
				
				else{
					word = word.concat( ones[digit] );
				}
				
				if(size == 4)
					word = word.concat('thousand ');
			}			
	}	
	return word;
}


//for checking if input is a number
//reference: http://stackoverflow.com/questions/9716468/is-there-any-function-like-isnumeric-in-javascript-to-validate-numbers
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
