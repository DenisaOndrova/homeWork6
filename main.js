//ukol1
/*
let userEmail = prompt('Vložte Váš e-mail');

let email = validator.isEmail(userEmail);

let paragraph = document.querySelector('.msg');

if (email){
		paragraph.textContent='E-mail is in the right format';
		paragraph.classList.add('msg--valid')
	} else {
		paragraph.textContent='E-mail is not in the correct format'
		paragraph.classList.add('msg--invalid')
}
*/

//ukol2
/*
const ellipseArea = (width,height) => {
return ((width/2)*(height/2))*Math.PI
}
console.log(ellipseArea(1,2))

//ukol 3 

const max2 = (smallN,biggerN) => {
if (smallN<biggerN){
	return biggerN
} else {
	return smallN
}
}
console.log(max2(10,8))

*/

//ukol 4

const inputStr = prompt('Vložte DIČ')
const isDIC = (inputStr) => {


	if (inputStr.length < 11){
		console.log('Délka je menší jak 11 - false')
		return false

	} else if (inputStr.length > 12) {
		console.log('Délka je větší jak 12 - false')
		return false
	}

	const prefix = inputStr.slice(0,2)
	

	if (prefix !== 'CZ') {
		console.log ('Počáteční písmena nejsou CZ- false')
		return false
	} else {
		console.log('Počátek je CZ')
	}

	const digits = inputStr.slice(3,12)

	if (!validator.isInt(digits)){
		console.log('Nejsou to čísla')
		return false

	} else {
		console.log('jsou to čísla - vše je v pořádku')
		return true
	}

}

isDIC(inputStr)