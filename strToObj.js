/**
 * #1 - string
 *
 * diberikan list stok barang dalam bentuk string,
 * coba rapikan sehingga list barang mudah dibaca
 *
 * boleh pakai built-in split
 */

function rapikanStok(str) {
  let arr = []
  let subString = ""
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ",") {
      subString += str[i]
    } else {
      arr.push(subString)
      subString = ""
    }
  }
  arr.push(subString)


  let opo = []
  for (let i = 0; i < arr.length; i++) {
    let subStr1 = []
    let sbt = ""
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[i][j] === " ") {
        
      }
      
    }
    
  }

  
  
  return arr
}
console.log(
  rapikanStok("hp 2, casing hp 5, laptop 1, headset 1, ikat kabel 12"),
);
// { hp: 2, 'casing hp': 5, laptop: 1, headset: 1, 'ikat kabel': 12 }
// console.log(rapikanStok("permen karet 13, cookies 7, permen 128, kelereng 1046, kotak 3"))
// { 'permen karet': 13, cookies: 7, permen: 128, kelereng: 1046, kotak: 3 }
