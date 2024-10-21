function numberAdder (a,b) {
    return (a+b);

}
console.log(numberAdder(6,100));



function multiplyNumberAdder (...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(multiplyNumberAdder(6,100,50,100));


let students =["kimi", "victor", "ella", "precious","jomi"];

console.log()