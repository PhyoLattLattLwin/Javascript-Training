let num = [12, 111, 9, 8,3, 1, 4, 5, 7];
function filter(x,y) {
    return y-x;
}
num.sort(filter);
console.log(num);

let result = num.find(x=> x<7)
console.log(result);