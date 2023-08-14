// regular expression
// exec, test
// match, search

let reg = /secret/;

let email = "Hey buddy i am sending you a secret letter.";

let result = reg.exec(email);

let result1 = reg.test(email);

let result2 = email.match(reg);

let result3 = email.search(reg);

console.log(result2);

console.log(reg);

console.log(reg.source);


