function getWords(camelCaseString) {
    // This function splits camelCase into words
    return camelCaseString.match(/([A-Z]?[a-z]+|[A-Z]+(?![a-z]))/g) || [];
}

function camelToTitleCase(camelCaseString) {
    // Use getWords to split the camel-cased string into individual words
    let words = getWords(camelCaseString);
    
    // Map over the array to capitalize the first letter of each word
    let titleCaseString = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    
    // Return the resulting title case string
    return titleCaseString;
}