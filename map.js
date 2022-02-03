const numbers = [1, 2, 3, 4, 5];

// const mapped = numbers.map(number => number * 2)

// console.log(mapped)

const mapped = numbers.map((num, index) => {
    console.log(index);
    return num * 2
})

console.log(mapped);