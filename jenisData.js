// Jenis2 jenis data
// data primitif
//1. data number => bentuk angka
// penulisannya dengan menggunakan variable (var, let , const)
let namaVariabel = 0;
const suradi_deni = 0.9;
var kota = 2020;
namaVariabel = suradi_deni;
// console.log(namaVariabel);
//2. bolean => pernyataan benar (true )dan salah (false)
let benar = true;
let salah = false;
//3. null => bnetuk sesuatu yang kosong
let isi = null; // bisa pake == dikasih null
let wadah; // atau cuma nulis waadah nya doank
//4. undefined => belum di bikin
// console.log(object) // diatas blm ada namanya object => undefined
//4.5 charakter => 1 huruf

// data non primitif
// 5. string => hurut, kaliamat atau angka tetapi pake tanda petik (petik 1, pertik 2, backtik)
let namaPanjang = 'Sudari';
let namaPangjangBanget = 'Suradi';
let namaGabungVariabel = `${namaPanjang} dan deni`;
// console.log(namaGabungVariabel);
// 6. array => sebuah wah untuk menampung banyak data => di lambangakan ake kurung KOTAK

let rakBuku = ['Buku', 200, `Tahun ${kota}`];
// console.log('rakBuku: ', rakBuku);

// cara mengakses sebuah data pada array dengan menyebut "nama array dengan kurung kotak yang berisi urutan ke berapa"
// urutan nya di muali dari yang ke 0
// kala saya mau mengakses banyak nya buku

let banyakBuku = rakBuku[1];
// console.log('banyakBuku: ', banyakBuku);

let keluarga = [['ayahA', 'ibuA', 'anakA'], ['ayahB', 'anakB'], 'ibuC'];
let ibuNyaC = keluarga[2];
console.log('ibuNyaC: ', ibuNyaC);

let ayahnyaB = keluarga[1][0];
console.log('ayahnyaB: ', ayahnyaB);
