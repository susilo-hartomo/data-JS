// Conditonal
// 1.  if , if else, if elseIf ..... else => bisa pake nested id di dalam if

let x = 40
let kelakuan = "buruk"
if (x > 90) {
    console.log("Nilai A")
} else if (x > 80) {
    console.log("Nilai B")
} else if (x > 70) {
    console.log("Nilai C")
} else {
    console.log("Nilai D")
    if (kelakuan == "baik") {
        console.log("Masih bisa remidial")
    } else {
        console.log("Maaf anda kena DO")
    }
}


// 2. swicth case 
// mengatasi syarat if yang selalu sama
let asal = "semarang"
switch (asal) {
    case "jakarata":
        console.log("suku betawi")
        break;
    case "bandung":
        console.log("suku sunda")
        break;
    default:
        console.log("suku jawa")
        break;
}
