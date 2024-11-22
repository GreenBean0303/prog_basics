function analyzeMenu(menuItems){

    const cheapItems = menuItems.filter(item => item.price < 10)
    const cheapItemNames = cheapItems.map(item => item.name)
    cheapItems.forEach(item => console.log(`Toote nimi: ${item.name}, Hind: ${item.price}`));
    const totalCost = cheapItems.reduce((sum, item) => sum + item.price, 0);
    return {
        cheapItems: cheapItemNames,
        totalCost: totalCost
    }
}

const menu = [
    {name: "soup", price:"5",category:"starter"},
    {name: "chicken", price:"15",category:"main"},
    {name: "cheesecake", price:"7",category:"dessert"}
]
const result = analyzeMenu(menu);
console.log(result)