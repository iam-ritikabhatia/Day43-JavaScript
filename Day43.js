// this method is same as toISOString() method


console.log(new Date().toJSON());



// This method will return the day of the month

console.log(new Date().getDate());


// This method will return the time in Miliseconds.

console.log(new Date().getTime());


// This method will return the current year.

console.log(new Date().getFullYear());

// This method will return the hours.

console.log(new Date().getHours());

// This method will return the day.

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

const dayNumber = new Date().getDay(); // typeof number

const dayName = days[dayNumber];

console.log(dayName);


// new Date().getMonth() method will return the number of the month

// Note:- 0 represents January

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  const monthNumber = new Date().getMonth(); // typeof number
  
  console.log(months[monthNumber]);


  // this method return the seconds.

console.log(new Date().getSeconds());





console.log(new Date().toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "long",
}));


console.log(new Date().toLocaleString('default', {
    weekday: "short",
    year: "2-digit",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
}));