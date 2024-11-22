let books = ["War and Peace", "The Great Gatsby", "Moby Dick", "To Kill a Mockingbird", "Pride and Prejudice"];
let temperatures = [18, 21, 19, 22, 20, 17, 16];


let bookCount = books.length;
console.log("Number of books:", bookCount);


let shortestBook = books.reduce((shortest, current) => 
    current.length < shortest.length ? current : shortest
);
console.log("Shortest book title:", shortestBook);


let sortedBooks = [...books].sort();
console.log("Books sorted alphabetically:", sortedBooks);


let hasGreatGatsby = books.includes("The Great Gatsby");
console.log("Contains 'The Great Gatsby':", hasGreatGatsby);


let temperaturesOver20 = temperatures.filter(temp => temp > 20);
console.log("Temperatures over 20°C:", temperaturesOver20);


let averageTemperature = temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;
console.log("Average temperature:", averageTemperature.toFixed(2));


let temperaturesInFahrenheit = temperatures.map(temp => (temp * 9/5) + 32);
console.log("Temperatures in Fahrenheit:", temperaturesInFahrenheit);


let sortedTemperatures = [...temperatures].sort((a, b) => b - a);
console.log("Temperatures sorted in descending order:", sortedTemperatures);
