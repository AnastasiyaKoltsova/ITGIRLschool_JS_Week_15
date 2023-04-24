const n = prompt("Введите число:");
const num = Number(n);
const str = num.toString();
let sum = 0;
let reversed = "";

for (let i = 0; i < str.length; i++) {
    alert( str[i] );

    sum += Number(str[i]);
    reversed = str[i] + reversed;
}

console.log("Цифр в числе:", str.length);
console.log("Сумма цифр:", sum);
console.log("Обратный порядок:", reversed);