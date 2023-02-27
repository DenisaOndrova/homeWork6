

//DOMÁCÍ ÚKOLY
//1. úkol


const parseDate = (date) => {


	return {
		day: Number(date.slice(0, 2)),
		month: Number(date.slice(3, 5)),
		year: Number(date.slice(6)),
	}
}

const formattedDate = parseDate('10.04.1995');
console.log(formattedDate);

//ukol2

const formatDate = (day, month, year) => {
  return day + '.' + month + '.' + year;
};

const dateToFormat = { day: 12, month: 3, year: 2015 };
const formattedDate2 = formatDate(dateToFormat.day, dateToFormat.month, dateToFormat.year);
console.log(formattedDate2);

//ukol3

const round = (number) => {
  const wholeNumber = Math.trunc(number)
  const decimalNumber = number - wholeNumber

  if (decimalNumber < 0.5) {
    return wholeNumber
  } else if (decimalNumber > 0.5) {
    return Math.ceil(number)
  } else {
    if (wholeNumber % 2 === 0) {
      return wholeNumber
    } else {
      return Math.ceil(number)
    }
  }
}
console.log(round(7.6))