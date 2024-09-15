function reverseWords(str) {
    str = str.split(" ")
   const revStr = str.map( word => word.split("").reverse().join(""))
   return revStr.join(" ")
    
  }