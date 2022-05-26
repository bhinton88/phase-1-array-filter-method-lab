// Code your solution here

function findMatching(array, string) {
    return array.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array, string) {
    console.log(string.toLowerCase())
    return array.filter(driver => driver.substring(0,string.length).toLowerCase() === string.toLowerCase())
  }

  //string.length allows the function to look at the le

function matchName(array,string) {
    return array.filter(drivers => drivers.name === string)
}


