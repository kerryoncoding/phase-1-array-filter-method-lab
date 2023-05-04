// Code your solution here

function findMatching(driverArray, matchName){
   let newNameArray = []
   driverArray.filter(function (element) { if (element.toLowerCase() === matchName.toLowerCase()){
      newNameArray.push(element)
   }
   })
   return newNameArray
}

function fuzzyMatch(driverArray, firstLetters) {
   let newNameArray = []
   driverArray.filter(function(element){if (element.substring(0,firstLetters.length) === firstLetters){
      newNameArray.push(element)
   }
   })
   return newNameArray
}

function matchName(driverArray, match) {
   let newNameArray = []
   driverArray.filter(function(element){if (element.name === match) {
      newNameArray.push(element)
   }
})
   return newNameArray
}