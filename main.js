//Ukol z lekce 4


// 1. nazev oblibeneho filmu

const title = {
	Name: 'When Marnie Was There'
}

/* Do konzole jsem napsala následující:
a - title.Name.lenght
b - title.Name.toUpperCase()
c - title.Name.slice(0,5)
d - title.Name.slice(0,-5)
*/

//2. ukol

const email = prompt('Enter your e-mail address:');
const atIndex = email.indexOf('@');
const userName = email.slice(0,atIndex);
const domain = email.slice(atIndex+1);



const cutEmail = {
	userName: userName,
	domain: domain,
};
document.body.innerHTML = '<h1><b>User details:</b></h1>';
document.body.innerHTML ='<p><b>User name:</b> ' + cutEmail.userName + '</p>';
document.body.innerHTML += '<p><b>Domain</b>: ' + cutEmail.domain + '</p>';