// Morning challenges

// 1. Practice Syntax

const changeToCapital = (arr) => {
    const newArr = []
    arr.forEach(item => {
        newArr.push(item.charAt(0).toUpperCase() + item.substring(1))
    });
    return newArr
}
console.log(changeToCapital(["charlie", "rob"]));

const removeVowels = (arr) => {
    arr.filter(letter => {
        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
           arr.pop(letter)
        }
    })
    return arr
}
console.log(removeVowels(["c", "r", "a"]));

const meanAverage = (arr) => {
    let totalNum = 0
    arr.forEach(num => {
        totalNum += num
    });
    return totalNum/arr.length
}
console.log(meanAverage([25, 50, 175, 50]));

// 2. Practice Problem Solving

const getLongWords = (arr) => {
    return arr.filter(word => word.length > 6)
}
console.log(getLongWords(["spray", "limit", "disco", "exuberant", "destruction", "present"]));

const getCamelCasing = (arr) => {
    arr.forEach(string => {
        console.log(string.split(" ")); 
    });
}
console.log(getCamelCasing(["please camel", "join casing", "these disco", "with shoes"]));