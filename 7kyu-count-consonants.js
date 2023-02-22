https://www.codewars.com/kata/564e7fc20f0b53eb02000106/train/javascript

function consonantCount(str) {
    let counter = 0
    let consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
    for (let i=0; i<str.length; i++)
        if (consonants.includes(str[i])){counter ++}
    return counter
    }
    