var kookaCounter = function(laughing) {
    let counter = 0
    let lastH = "z"
    for (let i=0; i<laughing.length; i++){
      if (laughing[i] == "a"){continue}
      if (laughing[i] != lastH){counter++, lastH = laughing[i] }
    }
    return counter
  }

