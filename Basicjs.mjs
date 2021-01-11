// Buatlah linear function y = 7x + 5 dan carilah nilai dari x = 5

function f(x) {
    return 7 * x + 5
}

console.log("Nilai dari f(5) = " + f(5))

// Buatlah quadrat function f(x) = x^2 + 4x + 4 carilah nilai dari
// 1. f(3)

// buatlah function f(x) = ax^2 + bx + c
// 1. carilah nilai extrim jika a = 1, b=4 , c=4 ==> f(a,b,c) return (Xp, Yp)

function h(a, b, c) {
    var Xp = -(b / (2 * a))
    var Yp = a * Math.pow(Xp, 2) + b * Xp + c
    var nilaiextrim = [Xp, Yp]
    return nilaiextrim
}

var F1 = h(1, 4, 4)
console.log(F1)
var F2 = h(2, 5, 7)


function nama(invoke) {
    // action
    console.log(invoke)
}


// object
// nama, key_value , value, antara key_value dipisah tanda :
var sampo = {
    "nama": "lifeboy",
    "jenis_kemasan": "botol",
    "harga": 12000
}

console.log(sampo.nama)

// Array => vektor
// isinya kalo JS bebas (number, string, object, array(mariks), campur2)
var arr = [1, "ari", { "nama": "lifeboy", "jenis": "botol" }, [3, "ari"]]
// cara akses => nama[index]
var mauTampil = arr[3]
console.log(mauTampil)

// Sort => mengurutkan 
// method https://visualgo.net/bn/sorting
// reverse => membalik urutan
// urutkan ada macam string number
// number .sort(function(a,b) return (a-b)) => dari kecil ke besar


// Math
// Math.random() * 90 + 10  ==> angkanya hanya dari 0 samapai 1
// Math.floor() ke bawah
// Math.ceil() ke atas
// Math.round() sesuai kaidah
// Math.abs() mutlak
// Math.max()

// Conditions
// if => condition true => action

// if (conditons) {
//     actions
// }

// conditions nya pake logika matematika
//  dan => && 
// atau => ||

var n = 12
if (n < 10 || typeof (n) == "number") {
    console.log(n + " itu adalah angka kurang dari 10 atau bertipe Number")
}

if (n < 10) {
    n += 5
    b = n - 10
} else if (b < 20) {
    n += 7
}

var address = "ciputat"
var biayaPengiriman = 0

switch (adress) {
    case "jombang": // condition
        biayaPengiriman += 10000n// action
        break; // selesia
    case "ciputat":
        biayaPengiriman += 9000
        break;
    default:
        console.log("alamat  tidak dalam jangkauan")
        break;
}