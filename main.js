// Morning challenges

// 1. Practice Syntax

const changeToCapital = (arr) => {
    return arr.map(item => {
        return item.charAt(0).toUpperCase() + item.substring(1)
    });
    
}
console.log(changeToCapital(["charlie", "rob"]));

const removeVowels = (arr) => {
    return arr.filter(letter => {
        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            return false
        } else {
            return true
        }
    })
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
    return arr.map(string => {
        let subArr = string.split(" ");
        for (let i = 1; i < subArr.length; i++) {
            camelCasedWord = subArr[i].charAt(0).toUpperCase() + subArr[i].substring(1)
            return subArr[0] + camelCasedWord
        }
    });
}
console.log(getCamelCasing(["please camel", "join casing", "these disco", "with shoes"]));

const calculateScrabblePoints = (array) => {
    console.log(array);
    let totalNum = 0
    array.forEach(item => {
        // console.log(item.value);
        totalNum = totalNum + item.value
        // return totalNum
    })
    return totalNum
}
console.log(calculateScrabblePoints([{ letter: "a", value: 1}, { letter: "k", value: 5}, { letter: "c", value: 3}]));

// 3. Array's and Objects

const convertMilesToKm = (arr) => {
    let kmObject = {};
    convertedKM
    arr.forEach(item => {

    })
}
console.log(convertMilesToKm([10, 5]));