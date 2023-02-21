https://www.codewars.com/kata/564e7fc20f0b53eb02000106/train/javascript

function consonantCount(str) {
    let counter = 0
    for (let i=0; i<str.length; i++)
      if (str[i] != "a" || str[i] != "e" || str[i] != "i" || str[i] != "o" || str[i] != "u"){
      counter ++
    }
    return counter
    }