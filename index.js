const amount = []

for (let i = 0; i < 3; i++) {
    let rev = +prompt('Введите число');
    amount.push(rev);
} 

alert('Перейдите в консоль')

console.log(amount.reverse());
