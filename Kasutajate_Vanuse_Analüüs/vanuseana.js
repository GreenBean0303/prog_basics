const users = [ 
    { name: "John", age: 15 }, 
    { name: "Alice", age: 30 }, 
    { name: "Bob", age: 18 }, 
    { name: "Jane", age: 35 }, 
    { name: "Tom", age: 40 }, 
    { name: "Sara", age: 29 } 
]; 
const isOlderThan25 = user => user.age > 25;
const addIsAdultField = user => ({
    ...user,
    isAdult: user.age >= 18
});

const logUser = user => {
    console.log(`Nimi: ${user.name}, Täiskasvanu: ${user.isAdult}`)
}

const olderThan25 = users.filter(isOlderThan25)
const usersThatAreAdult = users.map(addIsAdultField);

usersThatAreAdult. forEach(logUser)

const averageAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;
console.log("Kasutajate keskmine vanus:", averageAge)