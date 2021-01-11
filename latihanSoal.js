// let nama = "Budi"
// let nilai = 160

// // conditonal 
// // 1. type and dilambangkan dengan  && => artinya kedua syarat kondisi harus terpenuhi
// // 2. type or dilambangkan dengan || => artinya salah satu kondisi terpenuhi 

// if ( nilai > 100 || nilai < 0) console.log("nilai Invalid")
// else if (nilai >= 80) console.log(nama, "nilainya A")
// else if (nilai >= 65) console.log(nama, "nilainya B")
// else if (nilai >= 50) {
//     console.log(nama, "nilainya C")
// } else if (nilai >= 35) {
//     console.log(nama ,"nilainya D")
// } else {
//     console.log(nama ,"nilainya E")
// }

// // soal kedua

// let name = "Aan"
// let age = 34
// let money = 400000

// if (name === '' || name === undefined) {
//     console.log("Anda tidak dapat masuk")
// } else {
//     let hargaMinuman
//     if (typeof age !== "number") {
//         console.log("Age harus berupa angka")
//     } else {
//         if (age < 17) {
//             console.log("anda hanya bisa memesan jus")
//             hargaMinuman = 50000
//         } else {
//             console.log("anda hanya bisa memesan anggur")
//             hargaMinuman = 300000
//         }
        
//         if (money < hargaMinuman) console.log("uang tidak cukup")
//         else console.log("anda bisa memesan minuman. Sisa uang anda ",  money - hargaMinuman) 
//     }
// }

// let random  = Math.round(Math.random() * 4) + 1
// switch (random) {
//     case 1:
//         console.log("coba lagi")
//         break;
//     case 2:
//         console.log("object")
//         break;
//     default:
//         console.log("")
//         break
// }

// perulangan Looping 
// 1. while => 
// 2. for =>

let angka = 0
let condition = true
while (condition) {
    angka++
    if (angka == 20) {
        condition = false
    }
    console.log(angka)
}