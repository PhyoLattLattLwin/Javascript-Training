let now = new Date();
console.log(typeof now);
console.log(now);
console.log(now.getDay());
console.log(now.getMonth()+1);
console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());

let noww = new Date();
let nowww = noww.toString();
console.log(typeof nowww);

let birthDate = new Date("8/5/1995 10:12:15");
console.log(birthDate);
birthDate.setDate(12);