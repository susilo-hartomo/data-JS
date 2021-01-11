// data
// Jenis - jenis data
// Data primitf
// 1. number => angka (integer, decimal)
// contoh
let x = 10;
const y = 0.6;
x = 20;
// y = 1.5; // ini y bentuk const tidak bisa di isi ulang
console.log('ini x :', x, 'ini y : ', y);
var z = 30;
console.log('Umurnya suradi adalah :', z);

// 2. bolean => nilai (true & false)
let nilai = true; // bisa di lambangkan dengan angka 1
nilai = false; // dengan angka 0
console.log(nilai);
// 3. string => huruf / tulisan (didalam tanda pelik (1 atau 2) atau backtic `)
let nama = "susil'o"; // petik 2
nama = 'suilo';
nama = `susilo ${x}`;
console.log(nama);

// Data non primitf
// 4. array => sekumpulan data didalam []
let arr = [1, 'aku', x, ['aku', 'dia', 'kolo']];
console.log('nilai array yang ke 0 : ', arr[0]);
console.log(`kata dia ada berada di dalam array ke 1 dari arr 3 : ${arr[3][1]}`);
// 5. object => sekumpulan data terdiri dari key dan value di dalam  {}
let obj = {
	0: 1,
	1: 'aku',
	2: x,
	3: ['aku', 'dia', 'kolo'],
};

console.log(obj['3'][1]);

let sabun = {
	nama: 'lifeboy',
	harga: 2000,
	bentuk: 'cair',
};

console.log(`sabun ${sabun.nama} harganya ${sabun.harga}`);

// penamaan variabel
// let const var

// definisi nya
let f; // undefined
let g = null; // null
let h = 0; // nilai 0

console.log(g);
